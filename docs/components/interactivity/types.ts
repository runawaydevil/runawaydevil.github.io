// Interactivity Types
export interface RatingProps {
  resourceId: string
  readonly?: boolean
  showCount?: boolean
  onRate?: (rating: number) => void
}

export interface RatingData {
  resourceId: string
  averageRating: number
  totalRatings: number
  userRating?: number
  lastUpdated: Date
}

export interface CommentsProps {
  pageId: string
  provider: 'giscus' | 'local'
  moderationEnabled?: boolean
}

export interface Comment {
  id: string
  author: string
  content: string
  timestamp: Date
  replies?: Comment[]
  isModerated: boolean
}



export interface LocalData {
  ratings: Record<string, UserRating>
  comments: Record<string, Comment[]>
  preferences: UserPreferences
}

export interface UserRating {
  rating: number
  timestamp: Date
  resourceId: string
}

export interface UserPreferences {
  favoriteCategories: string[]
  hiddenTags: string[]
  searchHistory: string[]
  theme: 'dark' | 'light' | 'auto'
}