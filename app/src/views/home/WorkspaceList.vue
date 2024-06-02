<script setup lang="ts">
import type { Workspace } from '@/types/workspace';
import { RouterLink } from 'vue-router';

defineProps<{
  workspaces: Workspace[];
}>();
</script>

<template>
  <ul data-testid="workspace-list">
    <li v-for="workspace of workspaces" :key="workspace.id">
      <RouterLink :to="`/workspace/${workspace.id}`">{{ workspace.name }}</RouterLink>
    </li>
  </ul>
</template>
