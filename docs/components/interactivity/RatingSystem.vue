<template>
  <div class="rating-system">
    <!-- Rating Display -->
    <div class="rating-display">
      <!-- Stars -->
      <div class="stars-container">
        <div
          v-for="star in 5"
          :key="star"
          class="star"
          :class="{
            filled: star <= (hoveredRating || currentRating),
            interactive: !readonly,
            user: star <= userRating
          }"
          @mouseenter="!readonly && handleStarHover(star)"
          @mouseleave="!readonly && handleStarLeave()"
          @click="!readonly && handleStarClick(star)"
        >
          <span class="star-icon">⭐</span>
        </div>
      </div>

      <!-- Rating Info -->
      <div class="rating-info">
        <div class="rating-text">
          <span v-if="ratingStats.totalRatings > 0" class="average-rating">
            {{ ratingStats.averageRating.toFixed(1) }}
          </span>
          <span v-else class="no-rating">
            Sem avaliações
          </span>
          
          <span v-if="showCount && ratingStats.totalRatings > 0" class="rating-count">
            ({{ ratingStats.totalRatings }} {{ ratingStats.totalRatings === 1 ? 'avaliação' : 'avaliações' }})
          </span>
        </div>
        
        <div v-if="userRating && !readonly" class="user-rating-info">
          Sua avaliação: {{ userRating }} estrela{{ userRating !== 1 ? 's' : '' }}
        </div>
      </div>
    </div>

    <!-- Rating Actions -->
    <div v-if="!readonly" class="rating-actions">
      <button
        v-if="userRating"
        @click="removeRating"
        class="remove-rating-btn"
      >
        Remover Avaliação
      </button>
      
      <button
        v-if="!userRating"
        @click="showRatingPrompt = true"
        class="rate-btn"
      >
        Avaliar Recurso
      </button>
    </div>

    <!-- Rating Prompt Modal -->
    <div v-if="showRatingPrompt" class="rating-modal-overlay" @click="closeRatingPrompt">
      <div class="rating-modal" @click.stop>
        <div class="modal-header">
          <h3 class="modal-title">Avaliar Recurso</h3>
          <button @click="closeRatingPrompt" class="close-btn">×</button>
        </div>
        
        <div class="modal-content">
          <p class="modal-description">
            Como você avalia este recurso? Sua avaliação ajuda outros usuários.
          </p>
          
          <!-- Large Stars for Rating -->
          <div class="modal-stars">
            <div
              v-for="star in 5"
              :key="star"
              class="modal-star"
              :class="{ filled: star <= modalRating }"
              @mouseenter="modalRating = star"
              @mouseleave="modalRating = 0"
              @click="selectModalRating(star)"
            >
              <span class="star-icon">⭐</span>
            </div>
          </div>
          
          <!-- Rating Labels -->
          <div class="rating-labels">
            <span class="rating-label">{{ getRatingLabel(modalRating) }}</span>
          </div>
        </div>
        
        <div class="modal-actions">
          <button @click="closeRatingPrompt" class="cancel-btn">
            Cancelar
          </button>
          <button 
            @click="confirmRating" 
            :disabled="modalRating === 0"
            class="confirm-btn"
          >
            Confirmar Avaliação
          </button>
        </div>
      </div>
    </div>

    <!-- Rating Distribution (Expandable) -->
    <div v-if="showDistribution && ratingStats.totalRatings > 0" class="rating-distribution">
      <button 
        @click="showDistributionDetails = !showDistributionDetails"
        class="distribution-toggle"
      >
        {{ showDistributionDetails ? 'Ocultar' : 'Ver' }} Distribuição
      </button>
      
      <div v-if="showDistributionDetails" class="distribution-details">
        <div
          v-for="(count, rating) in ratingStats.distribution"
          :key="rating"
          class="distribution-bar"
        >
          <span class="bar-label">{{ rating }}★</span>
          <div class="bar-container">
            <div 
              class="bar-fill" 
              :style="{ width: getDistributionPercentage(count) + '%' }"
            ></div>
          </div>
          <span class="bar-count">{{ count }}</span>
        </div>
      </div>
    </div>

    <!-- Success Message -->
    <div v-if="showSuccessMessage" class="success-message">
      <span class="success-icon">✅</span>
      Avaliação salva com sucesso!
    </div>

    <!-- Error Message -->
    <div v-if="errorMessage" class="error-message">
      <span class="error-icon">❌</span>
      {{ errorMessage }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { RatingSystem, type RatingStats } from '../../utils/rating-system'
import type { RatingProps } from './types'

// Props
const props = withDefaults(defineProps<RatingProps>(), {
  readonly: false,
  showCount: true
})

// Emits
const emit = defineEmits<{
  rate: [rating: number]
  remove: []
}>()

// Reactive state
const ratingStats = ref<RatingStats>({
  averageRating: 0,
  totalRatings: 0,
  distribution: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
  lastUpdated: new Date()
})

const userRating = ref<number | null>(null)
const hoveredRating = ref(0)
const showRatingPrompt = ref(false)
const modalRating = ref(0)
const showDistributionDetails = ref(false)
const showDistribution = ref(true)
const showSuccessMessage = ref(false)
const errorMessage = ref('')

// Rating system instance
const ratingSystem = new RatingSystem()

// Computed properties
const currentRating = computed(() => {
  return ratingStats.value.averageRating
})

const maxDistributionCount = computed(() => {
  return Math.max(...Object.values(ratingStats.value.distribution))
})

// Methods
const loadRatingData = () => {
  try {
    ratingStats.value = ratingSystem.getRatingStats(props.resourceId)
    userRating.value = ratingSystem.getUserRating(props.resourceId)
  } catch (error) {
    console.error('Error loading rating data:', error)
    showError('Erro ao carregar avaliações')
  }
}

const handleStarHover = (star: number) => {
  hoveredRating.value = star
}

const handleStarLeave = () => {
  hoveredRating.value = 0
}

const handleStarClick = (star: number) => {
  if (props.readonly) return
  
  modalRating.value = star
  showRatingPrompt.value = true
}

const selectModalRating = (star: number) => {
  modalRating.value = star
}

const confirmRating = () => {
  if (modalRating.value === 0) return
  
  try {
    const newStats = ratingSystem.setUserRating(props.resourceId, modalRating.value)
    ratingStats.value = newStats
    userRating.value = modalRating.value
    
    // Emit event
    emit('rate', modalRating.value)
    
    // Call onRate callback if provided
    if (props.onRate) {
      props.onRate(modalRating.value)
    }
    
    closeRatingPrompt()
    showSuccess()
    
  } catch (error) {
    console.error('Error setting rating:', error)
    showError('Erro ao salvar avaliação')
  }
}

const removeRating = () => {
  try {
    const newStats = ratingSystem.removeUserRating(props.resourceId)
    ratingStats.value = newStats
    userRating.value = null
    
    emit('remove')
    showSuccess('Avaliação removida')
    
  } catch (error) {
    console.error('Error removing rating:', error)
    showError('Erro ao remover avaliação')
  }
}

const closeRatingPrompt = () => {
  showRatingPrompt.value = false
  modalRating.value = 0
}

const getRatingLabel = (rating: number): string => {
  const labels = {
    0: 'Selecione uma avaliação',
    1: 'Muito ruim',
    2: 'Ruim',
    3: 'Regular',
    4: 'Bom',
    5: 'Excelente'
  }
  return labels[rating as keyof typeof labels] || ''
}

const getDistributionPercentage = (count: number): number => {
  if (maxDistributionCount.value === 0) return 0
  return (count / maxDistributionCount.value) * 100
}

const showSuccess = (message: string = 'Avaliação salva com sucesso!') => {
  showSuccessMessage.value = true
  setTimeout(() => {
    showSuccessMessage.value = false
  }, 3000)
}

const showError = (message: string) => {
  errorMessage.value = message
  setTimeout(() => {
    errorMessage.value = ''
  }, 5000)
}

// Lifecycle
onMounted(() => {
  loadRatingData()
})

// Watch for prop changes
watch(() => props.resourceId, () => {
  if (props.resourceId) {
    loadRatingData()
  }
})
</script>

<style scoped>
.rating-system {
  margin: 1rem 0;
}

.rating-display {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.5rem;
}

.stars-container {
  display: flex;
  gap: 0.25rem;
}

.star {
  cursor: default;
  transition: all 0.3s ease;
  position: relative;
}

.star.interactive {
  cursor: pointer;
}

.star.interactive:hover {
  transform: scale(1.1);
}

.star-icon {
  font-size: 1.2rem;
  filter: grayscale(100%);
  transition: filter 0.3s ease;
}

.star.filled .star-icon {
  filter: grayscale(0%);
}

.star.user .star-icon {
  filter: grayscale(0%) hue-rotate(45deg);
}

.rating-info {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.rating-text {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.average-rating {
  font-weight: bold;
  font-size: 1.1rem;
  color: var(--vp-c-text-1);
}

.no-rating {
  color: var(--vp-c-text-2);
  font-style: italic;
}

.rating-count {
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
}

.user-rating-info {
  font-size: 0.8rem;
  color: var(--vp-c-text-2);
}

.rating-actions {
  margin-top: 0.5rem;
}

.rate-btn,
.remove-rating-btn {
  padding: 0.5rem 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.05);
  color: var(--vp-c-text-1);
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.rate-btn:hover {
  background: rgba(59, 130, 246, 0.2);
  border-color: rgba(59, 130, 246, 0.4);
}

.remove-rating-btn:hover {
  background: rgba(239, 68, 68, 0.2);
  border-color: rgba(239, 68, 68, 0.4);
}

.rating-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.rating-modal {
  background: var(--vp-c-bg);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: 2rem;
  max-width: 400px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.modal-title {
  font-size: 1.3rem;
  font-weight: bold;
  color: var(--vp-c-text-1);
  margin: 0;
}

.close-btn {
  background: none;
  border: none;
  font-size: 1.5rem;
  color: var(--vp-c-text-2);
  cursor: pointer;
  padding: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.close-btn:hover {
  color: var(--vp-c-text-1);
}

.modal-content {
  text-align: center;
  margin-bottom: 2rem;
}

.modal-description {
  color: var(--vp-c-text-2);
  margin-bottom: 2rem;
  line-height: 1.5;
}

.modal-stars {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.modal-star {
  cursor: pointer;
  transition: all 0.3s ease;
}

.modal-star:hover {
  transform: scale(1.2);
}

.modal-star .star-icon {
  font-size: 2rem;
  filter: grayscale(100%);
  transition: filter 0.3s ease;
}

.modal-star.filled .star-icon {
  filter: grayscale(0%);
}

.rating-labels {
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.rating-label {
  font-weight: bold;
  color: var(--vp-c-text-1);
}

.modal-actions {
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
}

.cancel-btn,
.confirm-btn {
  padding: 0.75rem 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;
}

.cancel-btn {
  background: rgba(255, 255, 255, 0.05);
  color: var(--vp-c-text-2);
}

.cancel-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  color: var(--vp-c-text-1);
}

.confirm-btn {
  background: #3B82F6;
  color: white;
  border-color: #3B82F6;
}

.confirm-btn:hover:not(:disabled) {
  background: #2563EB;
  border-color: #2563EB;
}

.confirm-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.rating-distribution {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.distribution-toggle {
  background: none;
  border: none;
  color: #3B82F6;
  cursor: pointer;
  font-size: 0.9rem;
  text-decoration: underline;
  padding: 0;
}

.distribution-toggle:hover {
  color: #2563EB;
}

.distribution-details {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.distribution-bar {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
}

.bar-label {
  width: 30px;
  color: var(--vp-c-text-2);
}

.bar-container {
  flex: 1;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
}

.bar-fill {
  height: 100%;
  background: #3B82F6;
  transition: width 0.3s ease;
}

.bar-count {
  width: 30px;
  text-align: right;
  color: var(--vp-c-text-2);
}

.success-message,
.error-message {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem;
  border-radius: 8px;
  margin-top: 1rem;
  font-size: 0.9rem;
}

.success-message {
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.3);
  color: #10B981;
}

.error-message {
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
  color: #EF4444;
}

@media (max-width: 768px) {
  .rating-modal {
    padding: 1.5rem;
  }
  
  .modal-stars {
    gap: 0.25rem;
  }
  
  .modal-star .star-icon {
    font-size: 1.5rem;
  }
  
  .modal-actions {
    flex-direction: column;
  }
  
  .rating-display {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
}
</style>