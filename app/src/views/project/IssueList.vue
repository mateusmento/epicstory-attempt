<script setup lang="ts">
import type { Issue } from '@/types/issue';

defineProps<{
  issues: Issue[];
}>();
</script>

<template>
  <ul data-testid="issue-list">
    <li v-for="issue of issues" :key="issue.id">{{ issue.title }}</li>
  </ul>
</template>
