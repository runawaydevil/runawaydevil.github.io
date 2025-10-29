// Rating System with Local Storage
import type { RatingData, UserRating } from '../components/interactivity/types'
import { LocalStorageManager } from './local-storage'

export interface RatingStats {
  averageRating: number
  totalRatings: number
  distribution: Record<number, number> // star -> count
  lastUpdated: Date
}

export class RatingSystem {
  private localStorage: LocalStorageManager
  private ratingsCache: Map<string, RatingStats> = new Map()
  private readonly SYNC_INTERVAL = 5 * 60 * 1000 // 5 minutes

  constructor() {
    this.localStorage = new LocalStorageManager()
    this.loadRatingsCache()
    this.startSyncInterval()
  }

  /**
   * Get rating statistics for a resource
   */
  getRatingStats(resourceId: string): RatingStats {
    // Check cache first
    if (this.ratingsCache.has(resourceId)) {
      return this.ratingsCache.get(resourceId)!
    }

    // Calculate from local data
    const stats = this.calculateRatingStats(resourceId)
    this.ratingsCache.set(resourceId, stats)
    
    return stats
  }

  /**
   * Get user's rating for a resource
   */
  getUserRating(resourceId: string): number | null {
    const userRating = this.localStorage.getUserRating(resourceId)
    return userRating?.rating || null
  }

  /**
   * Set user rating for a resource
   */
  setUserRating(resourceId: string, rating: number): RatingStats {
    // Validate rating
    if (rating < 1 || rating > 5 || !Number.isInteger(rating)) {
      throw new Error('Rating must be an integer between 1 and 5')
    }

    // Save user rating
    this.localStorage.setUserRating(resourceId, rating)

    // Update cache
    const stats = this.calculateRatingStats(resourceId)
    this.ratingsCache.set(resourceId, stats)

    // Trigger analytics event
    this.trackRatingEvent(resourceId, rating)

    return stats
  }

  /**
   * Remove user rating for a resource
   */
  removeUserRating(resourceId: string): RatingStats {
    const data = this.localStorage.getData()
    delete data.ratings[resourceId]
    this.localStorage.setData(data)

    // Update cache
    const stats = this.calculateRatingStats(resourceId)
    this.ratingsCache.set(resourceId, stats)

    return stats
  }

  /**
   * Calculate rating statistics from local data
   */
  private calculateRatingStats(resourceId: string): RatingStats {
    const data = this.localStorage.getData()
    const userRating = data.ratings[resourceId]
    
    // For now, we only have the current user's rating
    // In a real system, this would aggregate from multiple users
    if (userRating) {
      return {
        averageRating: userRating.rating,
        totalRatings: 1,
        distribution: {
          1: userRating.rating === 1 ? 1 : 0,
          2: userRating.rating === 2 ? 1 : 0,
          3: userRating.rating === 3 ? 1 : 0,
          4: userRating.rating === 4 ? 1 : 0,
          5: userRating.rating === 5 ? 1 : 0
        },
        lastUpdated: userRating.timestamp
      }
    }

    // Default stats for unrated resources
    return {
      averageRating: 0,
      totalRatings: 0,
      distribution: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
      lastUpdated: new Date()
    }
  }

  /**
   * Get all user ratings
   */
  getAllUserRatings(): Record<string, UserRating> {
    const data = this.localStorage.getData()
    return data.ratings
  }

  /**
   * Get user's favorite resources (4+ stars)
   */
  getFavoriteResources(): UserRating[] {
    const ratings = this.getAllUserRatings()
    return Object.values(ratings).filter(rating => rating.rating >= 4)
  }

  /**
   * Get rating statistics for multiple resources
   */
  getBulkRatingStats(resourceIds: string[]): Record<string, RatingStats> {
    const results: Record<string, RatingStats> = {}
    
    resourceIds.forEach(id => {
      results[id] = this.getRatingStats(id)
    })
    
    return results
  }

  /**
   * Export user ratings for backup
   */
  exportRatings(): string {
    const ratings = this.getAllUserRatings()
    const exportData = {
      ratings,
      exportedAt: new Date().toISOString(),
      version: '1.0'
    }
    
    return JSON.stringify(exportData, null, 2)
  }

  /**
   * Import ratings from backup
   */
  importRatings(jsonData: string): boolean {
    try {
      const importData = JSON.parse(jsonData)
      
      if (!importData.ratings || typeof importData.ratings !== 'object') {
        throw new Error('Invalid ratings data format')
      }

      const data = this.localStorage.getData()
      
      // Merge imported ratings with existing ones
      Object.entries(importData.ratings).forEach(([resourceId, rating]) => {
        if (this.isValidRating(rating as UserRating)) {
          data.ratings[resourceId] = rating as UserRating
        }
      })
      
      this.localStorage.setData(data)
      this.clearCache()
      
      return true
    } catch (error) {
      console.error('Error importing ratings:', error)
      return false
    }
  }

  /**
   * Validate rating object
   */
  private isValidRating(rating: any): rating is UserRating {
    return rating &&
           typeof rating.rating === 'number' &&
           rating.rating >= 1 &&
           rating.rating <= 5 &&
           Number.isInteger(rating.rating) &&
           rating.timestamp &&
           rating.resourceId
  }

  /**
   * Clear ratings cache
   */
  clearCache(): void {
    this.ratingsCache.clear()
  }

  /**
   * Load ratings into cache
   */
  private loadRatingsCache(): void {
    const ratings = this.getAllUserRatings()
    
    Object.keys(ratings).forEach(resourceId => {
      const stats = this.calculateRatingStats(resourceId)
      this.ratingsCache.set(resourceId, stats)
    })
  }

  /**
   * Start periodic sync (for future server sync)
   */
  private startSyncInterval(): void {
    setInterval(() => {
      this.syncWithServer()
    }, this.SYNC_INTERVAL)
  }

  /**
   * Sync ratings with server (placeholder for future implementation)
   */
  private async syncWithServer(): Promise<void> {
    // This would sync local ratings with a server
    // For now, it's just a placeholder
    console.log('Rating sync placeholder - would sync with server')
  }

  /**
   * Track rating event for analytics
   */
  private trackRatingEvent(resourceId: string, rating: number): void {
    // Analytics tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'rate_content', {
        content_type: 'resource',
        content_id: resourceId,
        value: rating
      })
    }
    
    console.log(`Rating event: ${resourceId} rated ${rating} stars`)
  }

  /**
   * Get rating trends (most/least rated content)
   */
  getRatingTrends(): {
    mostRated: UserRating[]
    highestRated: UserRating[]
    recentlyRated: UserRating[]
  } {
    const ratings = Object.values(this.getAllUserRatings())
    
    return {
      mostRated: ratings.sort((a, b) => b.rating - a.rating).slice(0, 10),
      highestRated: ratings.filter(r => r.rating >= 4).slice(0, 10),
      recentlyRated: ratings
        .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())
        .slice(0, 10)
    }
  }

  /**
   * Get rating summary for user dashboard
   */
  getUserRatingSummary(): {
    totalRated: number
    averageGiven: number
    favoriteCount: number
    ratingDistribution: Record<number, number>
    lastRatingDate: Date | null
  } {
    const ratings = Object.values(this.getAllUserRatings())
    
    if (ratings.length === 0) {
      return {
        totalRated: 0,
        averageGiven: 0,
        favoriteCount: 0,
        ratingDistribution: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
        lastRatingDate: null
      }
    }

    const totalRated = ratings.length
    const averageGiven = ratings.reduce((sum, r) => sum + r.rating, 0) / totalRated
    const favoriteCount = ratings.filter(r => r.rating >= 4).length
    
    const ratingDistribution = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }
    ratings.forEach(rating => {
      ratingDistribution[rating.rating]++
    })
    
    const lastRatingDate = ratings.length > 0 ? 
      new Date(Math.max(...ratings.map(r => r.timestamp.getTime()))) : 
      null

    return {
      totalRated,
      averageGiven: Math.round(averageGiven * 10) / 10,
      favoriteCount,
      ratingDistribution,
      lastRatingDate
    }
  }

  /**
   * Generate rating recommendations based on user preferences
   */
  getRecommendations(limit: number = 5): string[] {
    const ratings = this.getAllUserRatings()
    const highRatedResources = Object.entries(ratings)
      .filter(([, rating]) => rating.rating >= 4)
      .map(([resourceId]) => resourceId)
    
    // This is a placeholder - in a real system, this would use
    // collaborative filtering or content-based recommendations
    return highRatedResources.slice(0, limit)
  }
}