<template>
  <div class="feedback-form">
    <div class="feedback-trigger" @click="showForm = !showForm">
      <span class="feedback-icon">💬</span>
      <span class="feedback-text">Feedback</span>
    </div>
    
    <div v-if="showForm" class="feedback-modal">
      <div class="feedback-content">
        <div class="feedback-header">
          <h3>Envie seu Feedback</h3>
          <button @click="showForm = false" class="close-btn">×</button>
        </div>
        
        <form @submit.prevent="submitFeedback" class="feedback-form-content">
          <div class="form-group">
            <label for="feedback-type">Tipo de Feedback:</label>
            <select id="feedback-type" v-model="feedback.type" required>
              <option value="">Selecione...</option>
              <option value="bug">🐛 Bug/Erro</option>
              <option value="suggestion">💡 Sugestão</option>
              <option value="content">📝 Conteúdo</option>
              <option value="link">🔗 Link quebrado</option>
              <option value="other">❓ Outro</option>
            </select>
          </div>
          
          <div class="form-group">
            <label for="feedback-page">Página (opcional):</label>
            <input 
              id="feedback-page" 
              v-model="feedback.page" 
              type="text" 
              :placeholder="currentPage"
            >
          </div>
          
          <div class="form-group">
            <label for="feedback-message">Mensagem:</label>
            <textarea 
              id="feedback-message" 
              v-model="feedback.message" 
              required 
              rows="4"
              placeholder="Descreva seu feedback de forma detalhada..."
            ></textarea>
          </div>
          
          <div class="form-group">
            <label for="feedback-contact">Contato (opcional):</label>
            <input 
              id="feedback-contact" 
              v-model="feedback.contact" 
              type="text" 
              placeholder="Email, Telegram, etc."
            >
          </div>
          
          <div class="form-actions">
            <button type="button" @click="showForm = false" class="btn-secondary">
              Cancelar
            </button>
            <button type="submit" :disabled="isSubmitting" class="btn-primary">
              {{ isSubmitting ? 'Enviando...' : 'Enviar' }}
            </button>
          </div>
        </form>
        
        <div v-if="submissionResult" class="submission-result" :class="submissionResult.type">
          {{ submissionResult.message }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vitepress'

const route = useRoute()
const showForm = ref(false)
const isSubmitting = ref(false)
const submissionResult = ref<{ type: 'success' | 'error', message: string } | null>(null)

const currentPage = computed(() => {
  return route.path || window.location.pathname
})

const feedback = ref({
  type: '',
  page: '',
  message: '',
  contact: '',
  timestamp: '',
  userAgent: '',
  url: ''
})

const submitFeedback = async () => {
  if (!feedback.value.message.trim()) return
  
  isSubmitting.value = true
  submissionResult.value = null
  
  try {
    // Preparar dados do feedback
    const feedbackData = {
      ...feedback.value,
      page: feedback.value.page || currentPage.value,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href
    }
    
    // Aqui você pode implementar diferentes métodos de envio:
    // 1. Email via API
    // 2. GitHub Issues
    // 3. Google Forms
    // 4. Discord Webhook
    // 5. Telegram Bot
    
    // Por enquanto, vamos usar uma abordagem simples com localStorage
    const existingFeedback = JSON.parse(localStorage.getItem('pablo-news-feedback') || '[]')
    existingFeedback.push(feedbackData)
    localStorage.setItem('pablo-news-feedback', JSON.stringify(existingFeedback))
    
    // Simular envio (remover em produção)
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    submissionResult.value = {
      type: 'success',
      message: '✅ Feedback enviado com sucesso! Obrigado pela sua contribuição.'
    }
    
    // Reset form
    feedback.value = {
      type: '',
      page: '',
      message: '',
      contact: '',
      timestamp: '',
      userAgent: '',
      url: ''
    }
    
    // Fechar formulário após 2 segundos
    setTimeout(() => {
      showForm.value = false
      submissionResult.value = null
    }, 2000)
    
  } catch (error) {
    console.error('Erro ao enviar feedback:', error)
    submissionResult.value = {
      type: 'error',
      message: '❌ Erro ao enviar feedback. Tente novamente ou entre em contato via Telegram.'
    }
  } finally {
    isSubmitting.value = false
  }
}

onMounted(() => {
  // Verificar se há feedback pendente para exibir
  const pendingFeedback = localStorage.getItem('pablo-news-feedback-pending')
  if (pendingFeedback) {
    console.log('Feedback pendente encontrado:', pendingFeedback)
  }
})
</script>

<style scoped>
.feedback-form {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
}

.feedback-trigger {
  background: var(--vp-c-brand-1);
  color: white;
  padding: 12px 16px;
  border-radius: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 4px 12px rgba(0, 212, 255, 0.3);
  transition: all 0.3s ease;
  font-weight: 500;
}

.feedback-trigger:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 212, 255, 0.4);
}

.feedback-icon {
  font-size: 18px;
}

.feedback-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1001;
}

.feedback-content {
  background: var(--vp-c-bg);
  border-radius: 12px;
  padding: 24px;
  max-width: 500px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.feedback-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--vp-c-divider);
}

.feedback-header h3 {
  margin: 0;
  color: var(--vp-c-text-1);
}

.close-btn {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: var(--vp-c-text-2);
  padding: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s ease;
}

.close-btn:hover {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
}

.form-group {
  margin-bottom: 16px;
}

.form-group label {
  display: block;
  margin-bottom: 6px;
  font-weight: 500;
  color: var(--vp-c-text-1);
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-size: 14px;
  transition: border-color 0.2s ease;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--vp-c-brand-1);
}

.form-group textarea {
  resize: vertical;
  min-height: 80px;
}

.form-actions {
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  margin-top: 24px;
}

.btn-primary,
.btn-secondary {
  padding: 10px 20px;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
}

.btn-primary {
  background: var(--vp-c-brand-1);
  color: white;
}

.btn-primary:hover:not(:disabled) {
  background: var(--vp-c-brand-2);
}

.btn-primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.btn-secondary {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  border: 1px solid var(--vp-c-divider);
}

.btn-secondary:hover {
  background: var(--vp-c-bg-soft);
  border-color: var(--vp-c-brand-1);
}

.submission-result {
  margin-top: 16px;
  padding: 12px;
  border-radius: 6px;
  font-weight: 500;
}

.submission-result.success {
  background: rgba(34, 197, 94, 0.1);
  color: #22c55e;
  border: 1px solid rgba(34, 197, 94, 0.2);
}

.submission-result.error {
  background: rgba(239, 68, 68, 0.1);
  color: #ef4444;
  border: 1px solid rgba(239, 68, 68, 0.2);
}

@media (max-width: 640px) {
  .feedback-content {
    margin: 20px;
    padding: 20px;
  }
  
  .feedback-trigger {
    bottom: 15px;
    right: 15px;
    padding: 10px 14px;
  }
  
  .feedback-text {
    display: none;
  }
}
</style>
