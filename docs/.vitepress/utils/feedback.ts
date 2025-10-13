// Utilitários para gerenciamento de feedback
export interface FeedbackData {
  type: string
  page: string
  message: string
  contact?: string
  timestamp: string
  userAgent: string
  url: string
}

export class FeedbackManager {
  private static STORAGE_KEY = 'pablo-news-feedback'

  // Salvar feedback localmente
  static saveFeedback(feedback: FeedbackData): void {
    try {
      const existingFeedback = this.getFeedback()
      existingFeedback.push(feedback)
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(existingFeedback))
    } catch (error) {
      console.error('Erro ao salvar feedback:', error)
    }
  }

  // Recuperar feedback salvo
  static getFeedback(): FeedbackData[] {
    try {
      const feedback = localStorage.getItem(this.STORAGE_KEY)
      return feedback ? JSON.parse(feedback) : []
    } catch (error) {
      console.error('Erro ao recuperar feedback:', error)
      return []
    }
  }

  // Limpar feedback antigo (mais de 30 dias)
  static cleanupOldFeedback(): void {
    try {
      const feedback = this.getFeedback()
      const thirtyDaysAgo = new Date()
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)

      const recentFeedback = feedback.filter(item => {
        const itemDate = new Date(item.timestamp)
        return itemDate > thirtyDaysAgo
      })

      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(recentFeedback))
    } catch (error) {
      console.error('Erro ao limpar feedback antigo:', error)
    }
  }

  // Exportar feedback para análise
  static exportFeedback(): string {
    try {
      const feedback = this.getFeedback()
      return JSON.stringify(feedback, null, 2)
    } catch (error) {
      console.error('Erro ao exportar feedback:', error)
      return '[]'
    }
  }

  // Estatísticas do feedback
  static getFeedbackStats(): {
    total: number
    byType: Record<string, number>
    recent: number
  } {
    try {
      const feedback = this.getFeedback()
      const sevenDaysAgo = new Date()
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7)

      const byType: Record<string, number> = {}
      let recent = 0

      feedback.forEach(item => {
        byType[item.type] = (byType[item.type] || 0) + 1
        
        const itemDate = new Date(item.timestamp)
        if (itemDate > sevenDaysAgo) {
          recent++
        }
      })

      return {
        total: feedback.length,
        byType,
        recent
      }
    } catch (error) {
      console.error('Erro ao calcular estatísticas:', error)
      return { total: 0, byType: {}, recent: 0 }
    }
  }

  // Validar feedback
  static validateFeedback(feedback: Partial<FeedbackData>): string[] {
    const errors: string[] = []

    if (!feedback.type) {
      errors.push('Tipo de feedback é obrigatório')
    }

    if (!feedback.message || feedback.message.trim().length < 10) {
      errors.push('Mensagem deve ter pelo menos 10 caracteres')
    }

    if (feedback.contact && !this.isValidContact(feedback.contact)) {
      errors.push('Formato de contato inválido')
    }

    return errors
  }

  // Validar formato de contato
  private static isValidContact(contact: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const telegramRegex = /^@?[a-zA-Z0-9_]{5,32}$/
    
    return emailRegex.test(contact) || telegramRegex.test(contact)
  }

  // Preparar feedback para envio
  static prepareFeedback(data: Partial<FeedbackData>): FeedbackData {
    return {
      type: data.type || '',
      page: data.page || window.location.pathname,
      message: data.message || '',
      contact: data.contact || '',
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href
    }
  }

  // Simular envio para diferentes serviços
  static async sendToGitHub(feedback: FeedbackData): Promise<boolean> {
    try {
      // Implementar integração com GitHub Issues API
      console.log('Enviando para GitHub:', feedback)
      return true
    } catch (error) {
      console.error('Erro ao enviar para GitHub:', error)
      return false
    }
  }

  static async sendToTelegram(feedback: FeedbackData): Promise<boolean> {
    try {
      // Implementar integração com Telegram Bot API
      console.log('Enviando para Telegram:', feedback)
      return true
    } catch (error) {
      console.error('Erro ao enviar para Telegram:', error)
      return false
    }
  }

  static async sendToGoogleForms(feedback: FeedbackData): Promise<boolean> {
    try {
      // Implementar integração com Google Forms API
      console.log('Enviando para Google Forms:', feedback)
      return true
    } catch (error) {
      console.error('Erro ao enviar para Google Forms:', error)
      return false
    }
  }
}

// Tipos de feedback disponíveis
export const FEEDBACK_TYPES = [
  { value: 'bug', label: '🐛 Bug/Erro', description: 'Problemas técnicos ou links quebrados' },
  { value: 'suggestion', label: '💡 Sugestão', description: 'Ideias para melhorias' },
  { value: 'content', label: '📝 Conteúdo', description: 'Correções ou atualizações de texto' },
  { value: 'link', label: '🔗 Link quebrado', description: 'Sites que não carregam' },
  { value: 'other', label: '❓ Outro', description: 'Qualquer outro tipo de feedback' }
] as const

// Configurações do sistema de feedback
export const FEEDBACK_CONFIG = {
  maxMessageLength: 1000,
  minMessageLength: 10,
  maxContactLength: 100,
  cleanupDays: 30,
  statsDays: 7
} as const
