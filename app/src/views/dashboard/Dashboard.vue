<script lang="ts" setup>
import type { Workspace } from '@/domain/workspace/workspace.type';
import DashboardAside from './DashboardAside.vue';
import DashboardHeader from './DashboardHeader.vue';
import DashboardMain from './DashboardMain.vue';

defineProps<{
  currentWorkspace: Workspace;
}>();
</script>

<template>
  <div class="layout text-sm">
    <DashboardAside class="row-span-2" :currentWorkspace="currentWorkspace" />
    <DashboardHeader />
    <DashboardMain />
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');

.layout {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
  max-height: 100vh;
  font-family: 'Inter';
}
</style>
