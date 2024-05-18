<script setup lang="ts">
import type { Workspace } from '@/types/workspace';

defineProps<{
  workspace: Workspace;
}>();
</script>

<template>
  <section class="current-workspace">
    {{ workspace.name }}
  </section>
</template>
