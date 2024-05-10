<script setup lang="ts">
import { useDependency } from '@/core/dependency-injection';
import { IssueService } from '@/services/issue.service';
import type { Issue } from '@/types/issue';
import { reactive, ref } from 'vue';

const props = defineProps<{
  projectId: number;
}>();

const issueService = useDependency(IssueService);

const issues = ref<Issue[]>([]);

const formData = reactive({
  title: '',
});

async function createIssue() {
  const issue = await issueService.createIssue(props.projectId, formData.title);
  issues.value.push(issue);
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
