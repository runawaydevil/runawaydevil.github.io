<template>
  <div class="comments-system">
    <!-- Comments Header -->
    <div class="comments-header">
      <h3 class="comments-title">
        <span class="comments-icon">💬</span>
        Comentários da Comunidade
      </h3>
      <div class="comments-info">
        <span class="comments-description">
          Compartilhe suas experiências e tire dúvidas com a comunidade
        </span>
      </div>
    </div>

    <!-- Provider Selection (Admin/Debug) -->
    <div v-if="showProviderSelector" class="provider-selector">
      <label class="provider-label">Sistema de Comentários:</label>
      <select v-model="selectedProvider" @change="switchProvider" class="provider-select">
        <option value="giscus">Giscus (GitHub Discussions)</option>
        <option value="local">Local (Desenvolvimento)</option>
      </select>
    </div>

    <!-- Giscus Comments -->
    <div v-if="selectedProvider === 'giscus'" class="giscus-container">
      <div ref="giscusContainer" class="giscus-wrapper"></div>
      
      <!-- Loading State -->
      <div v-if="isLoadingGiscus" class="giscus-loading">
        <div class="loading-spinner"></div>
        <p>Carregando comentários...</p>
      </div>
      
      <!-- Error State -->
      <div v-if="giscusError" class="giscus-error">
        <div class="error-icon">⚠️</div>
        <h4>Erro ao Carregar Comentários</h4>
        <p>{{ giscusError }}</p>
        <button @click="retryGiscus" class="retry-btn">
          Tentar Novamente
        </button>
      </div>
    </div>

    <!-- Local Comments (Fallback/Development) -->
    <div v-else-if="selectedProvider === 'local'" class="local-comments">
      <!-- Comment Form -->
      <div class="comment-form">
        <h4 class="form-title">Adicionar Comentário</h4>
        
        <div class="form-fields">
          <input
            v-model="newComment.author"
            type="text"
            placeholder="Seu nome"
            class="author-input"
            maxlength="50"
          />
          
          <div class="comment-input-container">
            <textarea
              v-model="newComment.content"
              placeholder="Escreva seu comentário... (Markdown suportado)"
              class="comment-textarea"
              rows="4"
              maxlength="1000"
              @input="updatePreview"
            ></textarea>
            
            <div class="input-actions">
              <button 
                @click="showPreview = !showPreview" 
                class="preview-btn"
                :class="{ active: showPreview }"
              >
                {{ showPreview ? 'Editar' : 'Preview' }}
              </button>
              <span class="char-count">
                {{ newComment.content.length }}/1000
              </span>
            </div>
          </div>
          
          <!-- Markdown Preview -->
          <div v-if="showPreview" class="markdown-preview">
            <h5>Preview:</h5>
            <div class="preview-content" v-html="markdownPreview"></div>
          </div>
        </div>
        
        <div class="form-actions">
          <button 
            @click="submitComment" 
            :disabled="!canSubmitComment"
            class="submit-btn"
          >
            Publicar Comentário
          </button>
          <button @click="clearForm" class="clear-btn">
            Limpar
          </button>
        </div>
      </div>

      <!-- Comments List -->
      <div class="comments-list">
        <div v-if="localComments.length === 0" class="no-comments">
          <div class="no-comments-icon">💭</div>
          <p>Seja o primeiro a comentar!</p>
        </div>
        
        <div
          v-for="comment in sortedComments"
          :key="comment.id"
          class="comment-item"
          :class="{ moderated: comment.isModerated }"
        >
          <div class="comment-header">
            <div class="comment-author">
              <span class="author-name">{{ comment.author }}</span>
              <span class="comment-date">{{ formatDate(comment.timestamp) }}</span>
            </div>
            
            <div class="comment-actions">
              <button 
                @click="replyToComment(comment.id)"
                class="reply-btn"
              >
                Responder
              </button>
              <button 
                @click="deleteComment(comment.id)"
                class="delete-btn"
              >
                Excluir
              </button>
            </div>
          </div>
          
          <div class="comment-content" v-html="renderMarkdown(comment.content)"></div>
          
          <!-- Replies -->
          <div v-if="comment.replies && comment.replies.length > 0" class="comment-replies">
            <div
              v-for="reply in comment.replies"
              :key="reply.id"
              class="reply-item"
            >
              <div class="reply-header">
                <span class="reply-author">{{ reply.author }}</span>
                <span class="reply-date">{{ formatDate(reply.timestamp) }}</span>
              </div>
              <div class="reply-content" v-html="renderMarkdown(reply.content)"></div>
            </div>
          </div>
          
          <!-- Reply Form -->
          <div v-if="replyingTo === comment.id" class="reply-form">
            <textarea
              v-model="replyContent"
              placeholder="Escreva sua resposta..."
              class="reply-textarea"
              rows="3"
            ></textarea>
            <div class="reply-actions">
              <button @click="submitReply(comment.id)" class="submit-reply-btn">
                Responder
              </button>
              <button @click="cancelReply" class="cancel-reply-btn">
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Comments Statistics -->
    <div v-if="showStats" class="comments-stats">
      <div class="stats-item">
        <span class="stat-number">{{ totalComments }}</span>
        <span class="stat-label">Comentários</span>
      </div>
      <div class="stats-item">
        <span class="stat-number">{{ uniqueAuthors }}</span>
        <span class="stat-label">Participantes</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, nextTick, watch } from 'vue'
import type { CommentsProps, Comment } from './types'

// Props
const props = withDefaults(defineProps<CommentsProps>(), {
  provider: 'giscus',
  moderationEnabled: false
})

// Reactive state
const selectedProvider = ref(props.provider)
const giscusContainer = ref<HTMLElement>()
const isLoadingGiscus = ref(false)
const giscusError = ref('')
const showProviderSelector = ref(false) // Set to true for debugging

// Local comments state
const localComments = ref<Comment[]>([])
const newComment = ref({
  author: '',
  content: ''
})
const showPreview = ref(false)
const markdownPreview = ref('')
const replyingTo = ref<string | null>(null)
const replyContent = ref('')
const showStats = ref(true)

// Giscus configuration
const giscusConfig = {
  repo: 'runawaydevil/runawaydevil.github.io',
  repoId: 'R_kgDONdqGJw', // You'll need to get this from GitHub
  category: 'General',
  categoryId: 'DIC_kwDONdqGJ84ClBOp', // You'll need to get this from GitHub
  mapping: 'pathname',
  strict: '0',
  reactionsEnabled: '1',
  emitMetadata: '0',
  inputPosition: 'bottom',
  theme: 'dark',
  lang: 'pt'
}

// Computed properties
const canSubmitComment = computed(() => {
  return newComment.value.author.trim().length > 0 && 
         newComment.value.content.trim().length > 0
})

const sortedComments = computed(() => {
  return [...localComments.value].sort((a, b) => 
    new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  )
})

const totalComments = computed(() => {
  return localComments.value.reduce((total, comment) => {
    return total + 1 + (comment.replies?.length || 0)
  }, 0)
})

const uniqueAuthors = computed(() => {
  const authors = new Set<string>()
  localComments.value.forEach(comment => {
    authors.add(comment.author)
    comment.replies?.forEach(reply => {
      authors.add(reply.author)
    })
  })
  return authors.size
})

// Methods
const loadGiscus = async () => {
  if (!giscusContainer.value) return
  
  isLoadingGiscus.value = true
  giscusError.value = ''
  
  try {
    // Clear existing content
    giscusContainer.value.innerHTML = ''
    
    // Create Giscus script
    const script = document.createElement('script')
    script.src = 'https://giscus.app/client.js'
    script.setAttribute('data-repo', giscusConfig.repo)
    script.setAttribute('data-repo-id', giscusConfig.repoId)
    script.setAttribute('data-category', giscusConfig.category)
    script.setAttribute('data-category-id', giscusConfig.categoryId)
    script.setAttribute('data-mapping', giscusConfig.mapping)
    script.setAttribute('data-strict', giscusConfig.strict)
    script.setAttribute('data-reactions-enabled', giscusConfig.reactionsEnabled)
    script.setAttribute('data-emit-metadata', giscusConfig.emitMetadata)
    script.setAttribute('data-input-position', giscusConfig.inputPosition)
    script.setAttribute('data-theme', giscusConfig.theme)
    script.setAttribute('data-lang', giscusConfig.lang)
    script.crossOrigin = 'anonymous'
    script.async = true
    
    // Handle load events
    script.onload = () => {
      isLoadingGiscus.value = false
    }
    
    script.onerror = () => {
      isLoadingGiscus.value = false
      giscusError.value = 'Falha ao carregar o sistema de comentários'
    }
    
    giscusContainer.value.appendChild(script)
    
  } catch (error) {
    console.error('Error loading Giscus:', error)
    isLoadingGiscus.value = false
    giscusError.value = 'Erro ao inicializar comentários'
  }
}

const retryGiscus = () => {
  loadGiscus()
}

const switchProvider = () => {
  if (selectedProvider.value === 'giscus') {
    nextTick(() => {
      loadGiscus()
    })
  } else {
    loadLocalComments()
  }
}

const loadLocalComments = () => {
  // Load comments from localStorage
  const stored = localStorage.getItem(`comments-${props.pageId}`)
  if (stored) {
    try {
      localComments.value = JSON.parse(stored).map((comment: any) => ({
        ...comment,
        timestamp: new Date(comment.timestamp)
      }))
    } catch (error) {
      console.error('Error loading local comments:', error)
      localComments.value = []
    }
  }
}

const saveLocalComments = () => {
  localStorage.setItem(`comments-${props.pageId}`, JSON.stringify(localComments.value))
}

const updatePreview = () => {
  markdownPreview.value = renderMarkdown(newComment.value.content)
}

const renderMarkdown = (content: string): string => {
  // Simple markdown rendering (you might want to use a proper library)
  return content
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/`(.*?)`/g, '<code>$1</code>')
    .replace(/\n/g, '<br>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>')
}

const submitComment = () => {
  if (!canSubmitComment.value) return
  
  const comment: Comment = {
    id: Date.now().toString(),
    author: newComment.value.author.trim(),
    content: newComment.value.content.trim(),
    timestamp: new Date(),
    replies: [],
    isModerated: props.moderationEnabled
  }
  
  localComments.value.unshift(comment)
  saveLocalComments()
  clearForm()
}

const clearForm = () => {
  newComment.value = { author: '', content: '' }
  showPreview.value = false
  markdownPreview.value = ''
}

const replyToComment = (commentId: string) => {
  replyingTo.value = commentId
  replyContent.value = ''
}

const cancelReply = () => {
  replyingTo.value = null
  replyContent.value = ''
}

const submitReply = (commentId: string) => {
  if (!replyContent.value.trim()) return
  
  const reply: Comment = {
    id: Date.now().toString(),
    author: newComment.value.author || 'Anônimo',
    content: replyContent.value.trim(),
    timestamp: new Date(),
    isModerated: props.moderationEnabled
  }
  
  const comment = localComments.value.find(c => c.id === commentId)
  if (comment) {
    if (!comment.replies) comment.replies = []
    comment.replies.push(reply)
    saveLocalComments()
  }
  
  cancelReply()
}

const deleteComment = (commentId: string) => {
  if (confirm('Tem certeza que deseja excluir este comentário?')) {
    localComments.value = localComments.value.filter(c => c.id !== commentId)
    saveLocalComments()
  }
}

const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('pt-BR', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date)
}

// Lifecycle
onMounted(() => {
  if (selectedProvider.value === 'giscus') {
    nextTick(() => {
      loadGiscus()
    })
  } else {
    loadLocalComments()
  }
})

// Watch for page changes
watch(() => props.pageId, () => {
  if (selectedProvider.value === 'giscus') {
    loadGiscus()
  } else {
    loadLocalComments()
  }
})
</script>

<style scoped>
.comments-system {
  margin: 3rem 0;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
}

.comments-header {
  margin-bottom: 2rem;
}

.comments-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--vp-c-text-1);
  margin: 0 0 0.5rem 0;
}

.comments-icon {
  font-size: 1.2rem;
}

.comments-description {
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
}

.provider-selector {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
}

.provider-label {
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
}

.provider-select {
  padding: 0.5rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.05);
  color: var(--vp-c-text-1);
}

.giscus-container {
  min-height: 200px;
}

.giscus-loading,
.giscus-error {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 2rem;
  text-align: center;
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 4px solid rgba(255, 255, 255, 0.1);
  border-left: 4px solid #3B82F6;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 1rem;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.error-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.retry-btn {
  background: #3B82F6;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  margin-top: 1rem;
}

.retry-btn:hover {
  background: #2563EB;
}

.comment-form {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 2rem;
}

.form-title {
  font-size: 1.1rem;
  font-weight: bold;
  color: var(--vp-c-text-1);
  margin: 0 0 1rem 0;
}

.form-fields {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;
}

.author-input {
  padding: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.05);
  color: var(--vp-c-text-1);
}

.comment-input-container {
  position: relative;
}

.comment-textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.05);
  color: var(--vp-c-text-1);
  resize: vertical;
  font-family: inherit;
}

.input-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
}

.preview-btn {
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: var(--vp-c-text-2);
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.preview-btn:hover,
.preview-btn.active {
  background: rgba(59, 130, 246, 0.2);
  border-color: rgba(59, 130, 246, 0.4);
  color: #3B82F6;
}

.char-count {
  color: var(--vp-c-text-2);
  font-size: 0.8rem;
}

.markdown-preview {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  padding: 1rem;
}

.markdown-preview h5 {
  margin: 0 0 0.5rem 0;
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
}

.preview-content {
  color: var(--vp-c-text-1);
  line-height: 1.5;
}

.form-actions {
  display: flex;
  gap: 1rem;
}

.submit-btn,
.clear-btn {
  padding: 0.75rem 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;
}

.submit-btn {
  background: #3B82F6;
  color: white;
  border-color: #3B82F6;
}

.submit-btn:hover:not(:disabled) {
  background: #2563EB;
  border-color: #2563EB;
}

.submit-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.clear-btn {
  background: rgba(255, 255, 255, 0.05);
  color: var(--vp-c-text-2);
}

.clear-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  color: var(--vp-c-text-1);
}

.comments-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.no-comments {
  text-align: center;
  padding: 3rem 2rem;
  color: var(--vp-c-text-2);
}

.no-comments-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.comment-item {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 1.5rem;
}

.comment-item.moderated {
  opacity: 0.7;
  border-color: rgba(245, 158, 11, 0.3);
}

.comment-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.comment-author {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.author-name {
  font-weight: bold;
  color: var(--vp-c-text-1);
}

.comment-date {
  font-size: 0.8rem;
  color: var(--vp-c-text-2);
}

.comment-actions {
  display: flex;
  gap: 0.5rem;
}

.reply-btn,
.delete-btn {
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: var(--vp-c-text-2);
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.8rem;
  transition: all 0.3s ease;
}

.reply-btn:hover {
  background: rgba(59, 130, 246, 0.2);
  border-color: rgba(59, 130, 246, 0.4);
  color: #3B82F6;
}

.delete-btn:hover {
  background: rgba(239, 68, 68, 0.2);
  border-color: rgba(239, 68, 68, 0.4);
  color: #EF4444;
}

.comment-content {
  color: var(--vp-c-text-1);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.comment-replies {
  margin-left: 2rem;
  padding-left: 1rem;
  border-left: 2px solid rgba(255, 255, 255, 0.1);
}

.reply-item {
  background: rgba(255, 255, 255, 0.02);
  border-radius: 6px;
  padding: 1rem;
  margin-bottom: 1rem;
}

.reply-header {
  display: flex;
  gap: 1rem;
  margin-bottom: 0.5rem;
}

.reply-author {
  font-weight: bold;
  color: var(--vp-c-text-1);
  font-size: 0.9rem;
}

.reply-date {
  font-size: 0.8rem;
  color: var(--vp-c-text-2);
}

.reply-content {
  color: var(--vp-c-text-1);
  line-height: 1.5;
  font-size: 0.9rem;
}

.reply-form {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.reply-textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.05);
  color: var(--vp-c-text-1);
  resize: vertical;
  font-family: inherit;
  margin-bottom: 0.5rem;
}

.reply-actions {
  display: flex;
  gap: 0.5rem;
}

.submit-reply-btn,
.cancel-reply-btn {
  padding: 0.5rem 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.submit-reply-btn {
  background: #3B82F6;
  color: white;
  border-color: #3B82F6;
}

.submit-reply-btn:hover {
  background: #2563EB;
}

.cancel-reply-btn {
  background: rgba(255, 255, 255, 0.05);
  color: var(--vp-c-text-2);
}

.cancel-reply-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  color: var(--vp-c-text-1);
}

.comments-stats {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.stats-item {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 1.5rem;
  font-weight: bold;
  color: #3B82F6;
}

.stat-label {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
}

@media (max-width: 768px) {
  .comments-system {
    padding: 1rem;
  }
  
  .comment-header {
    flex-direction: column;
    gap: 1rem;
  }
  
  .comment-replies {
    margin-left: 1rem;
  }
  
  .form-actions {
    flex-direction: column;
  }
  
  .comments-stats {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>