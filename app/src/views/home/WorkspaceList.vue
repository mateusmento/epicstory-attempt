<script setup lang="ts">
import type { Workspace } from '@/types/workspace';

defineProps<{
  workspaces: Workspace[];
}>();
</script>

<template>
  <ul data-testid="workspace-list">
    <li v-for="workspace of workspaces" :key="workspace.id">{{ workspace.name }}</li>
  </ul>
</template>
