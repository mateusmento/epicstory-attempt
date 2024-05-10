<script setup lang="ts">
import type { Project } from '@/types/project';
import { reactive, ref } from 'vue';

defineProps<{
  workspaceId: number;
}>();

const projects = ref<Project[]>([]);

const formData = reactive({
  name: '',
});

function createProject() {
  const maxId = projects.value?.reduce((maxId, p) => Math.max(maxId, p.id), 0) + 1;
  projects.value?.push({
    id: maxId,
    name: formData.name,
  });
  formData.name = '';
}
</script>

<template>
  <div>
    <h1>Workspace {{ workspaceId }}</h1>
    <form @submit.prevent="createProject">
      <input v-model="formData.name" data-testid="project-name-input" />
      <button type="submit" data-testid="create-project-button">Create</button>
    </form>
    <ul data-testid="project-list">
      <li v-for="project of projects" :key="project.id">{{ project.name }}</li>
    </ul>
  </div>
</template>

<style scoped></style>
