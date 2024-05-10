<script setup lang="ts">
import { useDependency } from '@/core/dependency-injection';
import { ProjectService } from '@/services/project.service';
import type { Project } from '@/types/project';
import { reactive, ref } from 'vue';

const props = defineProps<{
  workspaceId: number;
}>();

const projectService = useDependency(ProjectService);

const projects = ref<Project[]>([]);

const formData = reactive({
  name: '',
});

async function createProject() {
  const project = await projectService.createProject(props.workspaceId, formData.name);
  projects.value?.push(project);
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
