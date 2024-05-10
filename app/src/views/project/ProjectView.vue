<script setup lang="ts">
import type { Issue } from '@/types/issue';
import { reactive, ref } from 'vue';

defineProps<{
  projectId: number;
}>();

const issues = ref<Issue[]>([]);

const formData = reactive({
  title: '',
});

function createIssue() {
  issues.value.push({
    id: issues.value.reduce((maxId, iss) => Math.max(maxId, iss.id), 0) + 1,
    title: formData.title,
  });

  formData.title = '';
}
</script>

<template>
  <main>
    <h1>Project {{ projectId }}</h1>
    <form @submit.prevent="createIssue">
      <input v-model="formData.title" data-testid="issue-name-input" />
      <button type="submit" data-testid="create-issue-button">Create</button>
    </form>
    <ul data-testid="issue-list">
      <li v-for="issue of issues" :key="issue.id">{{ issue.title }}</li>
    </ul>
  </main>
</template>
