// Local Storage Utilities
import type { LocalData, UserRating, UserPreferences, SuggestionData } from '../components/interactivity/types'

export class LocalStorageManager {
  private readonly STORAGE_KEY = 'piratas-club-data'
  private readonly VERSION = '1.0.0'

  /**
   * Get all local data
   */
  getData(): LocalData {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY)
      if (!stored) {
        return this.getDefaultData()
      }

      const parsed = JSON.parse(stored)
      
      // Check version compatibility
      if (parsed.version !== this.VERSION) {
        console.warn('Local storage version mismatch, resetting data')
        return this.getDefaultData()
      }

      return parsed.data || this.getDefaultData()
    } catch (error) {
      console.error('Error reading local storage:', error)
      return this.getDefaultData()
    }
  }

  /**
   * Save all local data
   */
  setData(data: LocalData): void {
    try {
      const toStore = {
        version: this.VERSION,
        data,
        lastUpdated: new Date().toISOString()
      }
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(toStore))
    } catch (error) {
      console.error('Error saving to local storage:', error)
      // Handle storage quota exceeded
      if (error instanceof DOMException && error.code === 22) {
        this.cleanup()
        // Try again after cleanup
        try {
          const toStore = {
            version: this.VERSION,
            data,
            lastUpdated: new Date().toISOString()
          }
          localStorage.setItem(this.STORAGE_KEY, JSON.stringify(toStore))
        } catch (retryError) {
          console.error('Failed to save even after cleanup:', retryError)
        }
      }
    }
  }

  /**
   * Get default data structure
   */
  private getDefaultData(): LocalData {
    return {
      ratings: {},
      comments: {},
      preferences: {
        favoriteCategories: [],
        hiddenTags: [],
        searchHistory: [],
        theme: 'dark'
      },
      suggestions: []
    }
  }

  /**
   * Get user rating for a resource
   */
  getUserRating(resourceId: string): UserRating | null {
    const data = this.getData()
    return data.ratings[resourceId] || null
  }

  /**
   * Set user rating for a resource
   */
  setUserRating(resourceId: string, rating: number): void {
    const data = this.getData()
    data.ratings[resourceId] = {
      rating,
      timestamp: new Date(),
      resourceId
    }
    this.setData(data)
  }

  /**
   * Get user preferences
   */
  getPreferences(): UserPreferences {
    const data = this.getData()
    return data.preferences
  }

  /**
   * Update user preferences
   */
  updatePreferences(preferences: Partial<UserPreferences>): void {
    const data = this.getData()
    data.preferences = { ...data.preferences, ...preferences }
    this.setData(data)
  }

  /**
   * Add to search history
   */
  addToSearchHistory(query: string): void {
    const data = this.getData()
    const history = data.preferences.searchHistory
    
    // Remove if already exists
    const index = history.indexOf(query)
    if (index > -1) {
      history.splice(index, 1)
    }
    
    // Add to beginning
    history.unshift(query)
    
    // Keep only last 20 searches
    if (history.length > 20) {
      history.splice(20)
    }
    
    this.setData(data)
  }

  /**
   * Add suggestion
   */
  addSuggestion(suggestion: SuggestionData): void {
    const data = this.getData()
    data.suggestions.push(suggestion)
    this.setData(data)
  }

  /**
   * Get all suggestions
   */
  getSuggestions(): SuggestionData[] {
    const data = this.getData()
    return data.suggestions
  }

  /**
   * Clean up old data to free space
   */
  private cleanup(): void {
    const data = this.getData()
    
    // Remove ratings older than 1 year
    const oneYearAgo = new Date()
    oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1)
    
    Object.keys(data.ratings).forEach(resourceId => {
      const rating = data.ratings[resourceId]
      if (rating.timestamp < oneYearAgo) {
        delete data.ratings[resourceId]
      }
    })
    
    // Limit search history to 10 items
    data.preferences.searchHistory = data.preferences.searchHistory.slice(0, 10)
    
    // Remove old suggestions (keep only last 50)
    data.suggestions = data.suggestions.slice(-50)
    
    this.setData(data)
  }

  /**
   * Clear all data
   */
  clearAll(): void {
    try {
      localStorage.removeItem(this.STORAGE_KEY)
    } catch (error) {
      console.error('Error clearing local storage:', error)
    }
  }

  /**
   * Export data for backup
   */
  exportData(): string {
    const data = this.getData()
    return JSON.stringify(data, null, 2)
  }

  /**
   * Import data from backup
   */
  importData(jsonData: string): boolean {
    try {
      const data = JSON.parse(jsonData) as LocalData
      this.setData(data)
      return true
    } catch (error) {
      console.error('Error importing data:', error)
      return false
    }
  }
}