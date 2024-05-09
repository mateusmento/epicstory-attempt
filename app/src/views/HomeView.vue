<script setup lang="ts">
import { useDependency } from '@/core/dependency-injection';
import { WorkspaceService } from '@/services/workspace.service';
import type { Workspace } from '@/types/workspace';
import { reactive, ref } from 'vue';

const workspaceService = useDependency(WorkspaceService);

const workspaces = ref<Workspace[]>([]);

const workspace = reactive({
  name: '',
});

async function createWorkspace() {
  const created = await workspaceService.createWorkspace(workspace.name).then((res) => res.data);
  workspaces.value.push(created);
  workspace.name = '';
}
</script>

<template>
  <main>
    <h1>Workspaces</h1>
    <form @submit.prevent="createWorkspace">
      <h2>Create workspace</h2>
      <label>Name</label>
      <input v-model="workspace.name" data-testid="workspace-name-input" />
      <button type="submit" data-testid="create-workspace-button">Create</button>
    </form>
    <ul data-testid="workspace-list">
      <li v-for="workspace of workspaces" :key="workspace.id">{{ workspace.name }}</li>
    </ul>
  </main>
</template>
