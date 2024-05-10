<script setup lang="ts">
import { useDependency } from '@/core/dependency-injection';
import { ProjectService } from '@/services/project.service';
import type { Project } from '@/types/project';
import { RouterLink } from 'vue-router';
import CreateProjectForm from './CreateProjectForm.vue';
import { ref } from 'vue';

const props = defineProps<{
  workspaceId: number;
}>();

const projectService = useDependency(ProjectService);

const projects = ref<Project[]>([]);

async function createProject(formData: { name: string }) {
  const project = await projectService.createProject(props.workspaceId, formData.name);
  projects.value?.push(project);
}
</script>

<template>
  <div>
    <h1>Workspace {{ workspaceId }}</h1>
    <CreateProjectForm @submit="createProject" />
    <ul data-testid="project-list">
      <li v-for="project of projects" :key="project.id">
        <RouterLink :to="`/project/${project.id}`">{{ project.name }}</RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
