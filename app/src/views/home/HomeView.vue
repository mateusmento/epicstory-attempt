<script setup lang="ts">
import { useDependency } from '@/core/dependency-injection';
import { WorkspaceService } from '@/services/workspace.service';
import type { Workspace } from '@/types/workspace';
import { ref } from 'vue';
import CreateWorkspaceForm from './CreateWorkspaceForm.vue';
import WorkspaceList from './WorkspaceList.vue';

const workspaceService = useDependency(WorkspaceService);

const workspaces = ref<Workspace[]>([]);

async function createWorkspace(formData: { name: string }) {
  const workspace = await workspaceService.createWorkspace(formData.name);
  workspaces.value.push(workspace);
}
</script>

<template>
  <main>
    <h1>Workspaces</h1>
    <CreateWorkspaceForm @submit="createWorkspace" />
    <WorkspaceList :workspaces="workspaces" />
  </main>
</template>
