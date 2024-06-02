<script setup lang="ts">
import type { Project } from '@/types/project';
import { RouterLink } from 'vue-router';

defineProps<{
  projects: Project[];
}>();
</script>

<template>
  <ul data-testid="project-list">
    <li v-for="project of projects" :key="project.id">
      <RouterLink :to="`/project/${project.id}`">{{ project.name }}</RouterLink>
    </li>
  </ul>
</template>

<style scoped></style>
