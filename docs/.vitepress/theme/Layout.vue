<template>
  <DefaultTheme.Layout>
    <template #layout-bottom>
      <FeedbackForm />
    </template>
  </DefaultTheme.Layout>
</template>

<script setup lang="ts">
import DefaultTheme from 'vitepress/theme/Layout.vue'
import FeedbackForm from './components/FeedbackForm.vue'
</script>
