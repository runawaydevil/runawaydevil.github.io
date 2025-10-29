// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './styles/vars.css'  // FUNDAMENTAL: isso faz as cores entrarem no bundle
import './style.css'
import './custom.css'

// Import custom components
import RelatedResources from '../../components/content-discovery/RelatedResources.vue'
import TagsPage from '../../components/content-discovery/TagsPage.vue'

import FilterControls from '../../components/content-discovery/FilterControls.vue'
import RatingSystem from '../../components/interactivity/RatingSystem.vue'
import CommentsSystem from '../../components/interactivity/CommentsSystem.vue'

import { PageMetadataExtractor } from '../../utils/page-metadata'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'doc-after': () => {
        // Only show components on appropriate pages
        if (typeof window === 'undefined') return null
        
        const pageData = PageMetadataExtractor.extractFromDOM()
        
        if (!PageMetadataExtractor.shouldShowRelatedResources(pageData)) {
          return null
        }
        
        // Create container for multiple components
        return h('div', { class: 'page-enhancements' }, [
          // Rating System
          h(RatingSystem, {
            resourceId: pageData.url,
            showCount: true,
            readonly: false
          }),
          
          // Related Resources
          h(RelatedResources, {
            currentPage: pageData,
            maxResults: 5,
            algorithm: 'hybrid'
          }),
          
          // Comments System
          h(CommentsSystem, {
            pageId: pageData.url,
            provider: 'giscus',
            moderationEnabled: false
          })
        ])
      }
    })
  },
  enhanceApp({ app, router }) {
    // Register global components
    app.component('RelatedResources', RelatedResources)
    app.component('TagsPage', TagsPage)

    app.component('FilterControls', FilterControls)
    app.component('RatingSystem', RatingSystem)
    app.component('CommentsSystem', CommentsSystem)

  }
} satisfies Theme
