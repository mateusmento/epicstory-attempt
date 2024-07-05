<script setup lang="ts">
import type { Workspace } from '@/domain/workspace/workspace.type';

defineProps<{
  workspace: Workspace;
}>();
</script>

<template>
  <section class="current-workspace">
    {{ workspace.name }}
  </section>
</template>
