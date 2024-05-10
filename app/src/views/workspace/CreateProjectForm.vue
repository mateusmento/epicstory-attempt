<script setup lang="ts">
import { reactive } from 'vue';

const emit = defineEmits(['submit']);

const formData = reactive({
  name: '',
});

async function createProject() {
  emit('submit', { name: formData.name });
  formData.name = '';
}
</script>

<template>
  <form @submit.prevent="createProject">
    <input v-model="formData.name" data-testid="project-name-input" />
    <button type="submit" data-testid="create-project-button">Create</button>
  </form>
</template>
