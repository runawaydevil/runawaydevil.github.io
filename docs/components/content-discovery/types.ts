// Content Discovery Types
export interface TagData {
  name: string
  count: number
  category: string
  color?: string
}

export interface CategoryData {
  name: string
  description: string
  tags: string[]
  resourceCount: number
}

export interface TagsPageProps {
  tags: TagData[]
  categories: CategoryData[]
  currentFilter?: string
}

export interface SearchProps {
  placeholder?: string
  filters: FilterConfig[]
  onSearch: (query: string, filters: ActiveFilters) => void
}

export interface FilterConfig {
  type: 'category' | 'tag' | 'content-type'
  label: string
  options: FilterOption[]
}

export interface FilterOption {
  value: string
  label: string
  count?: number
}

export interface ActiveFilters {
  categories: string[]
  tags: string[]
  contentTypes: string[]
}

export interface SearchResult {
  title: string
  excerpt: string
  url: string
  tags: string[]
  category: string
  relevanceScore: number
}

export interface RelatedResourcesProps {
  currentPage: PageData
  maxResults?: number
  algorithm?: 'tags' | 'category' | 'hybrid'
}

export interface PageData {
  title: string
  tags: string[]
  category: string
  url: string
  excerpt?: string
}

export interface SearchIndex {
  pages: IndexedPage[]
  tags: TagIndex
  categories: CategoryIndex
  lastBuilt: Date
}

export interface IndexedPage {
  id: string
  title: string
  content: string
  excerpt: string
  tags: string[]
  category: string
  url: string
  lastModified: Date
  searchTokens: string[]
}

export interface TagIndex {
  [tagName: string]: {
    count: number
    pages: string[]
    category: string
  }
}

export interface CategoryIndex {
  [categoryName: string]: {
    count: number
    pages: string[]
    subcategories: string[]
  }
}