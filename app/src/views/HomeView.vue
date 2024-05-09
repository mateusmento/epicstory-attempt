<script setup lang="ts">
import { reactive, ref } from 'vue';

interface Workspace {
  id: number;
  name: string;
}

const workspaces = ref<Workspace[]>([]);

const workspace = reactive({
  name: '',
});

function createWorkspace() {
  const maxId = workspaces.value.reduce((maxId, w) => Math.max(maxId, w.id), 0) + 1;
  workspaces.value.push({
    id: maxId,
    ...workspace,
  });
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
