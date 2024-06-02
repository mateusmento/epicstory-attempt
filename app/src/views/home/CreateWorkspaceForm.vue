<script setup lang="ts">
import { reactive } from 'vue';

const emit = defineEmits(['submit']);

const formData = reactive({
  name: '',
});

async function createWorkspace() {
  emit('submit', { ...formData });
  formData.name = '';
}
</script>

<template>
  <form @submit.prevent="createWorkspace">
    <h2>Create workspace</h2>
    <label>Name</label>
    <input v-model="formData.name" data-testid="workspace-name-input" />
    <button type="submit" data-testid="create-workspace-button">Create</button>
  </form>
</template>
