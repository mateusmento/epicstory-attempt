<script setup lang="ts">
import { reactive } from 'vue';

const emit = defineEmits(['submit']);

const formData = reactive({
  title: '',
});

async function createIssue() {
  emit('submit', { ...formData });
  formData.title = '';
}
</script>

<template>
  <form @submit.prevent="createIssue">
    <input v-model="formData.title" data-testid="issue-name-input" />
    <button type="submit" data-testid="create-issue-button">Create</button>
  </form>
</template>
