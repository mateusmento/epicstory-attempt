<script setup lang="ts">
import { useDependency } from '@/core/dependency-injection';
import { ProjectService } from '@/services/project.service';
import type { Project } from '@/types/project';
import { ref } from 'vue';
import CreateProjectForm from './CreateProjectForm.vue';
import ProjectList from './ProjectList.vue';

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
  <main>
    <h1>Workspace {{ workspaceId }}</h1>
    <CreateProjectForm @submit="createProject" />
    <ProjectList :projects="projects" />
  </main>
</template>

<style scoped></style>
