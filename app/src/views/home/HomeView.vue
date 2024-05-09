<script setup lang="ts">
import { useDependency } from '@/core/dependency-injection';
import { WorkspaceService } from '@/services/workspace.service';
import type { Workspace } from '@/types/workspace';
import { ref } from 'vue';
import CreateWorkspaceForm from './CreateWorkspaceForm.vue';

const workspaceService = useDependency(WorkspaceService);

const workspaces = ref<Workspace[]>([]);

async function createWorkspace(formData: { name: string }) {
  const workspace = await workspaceService.createWorkspace(formData.name).then((res) => res.data);
  workspaces.value.push(workspace);
}
</script>

<template>
  <main>
    <h1>Workspaces</h1>
    <CreateWorkspaceForm @submit="createWorkspace" />
    <ul data-testid="workspace-list">
      <li v-for="workspace of workspaces" :key="workspace.id">{{ workspace.name }}</li>
    </ul>
  </main>
</template>
