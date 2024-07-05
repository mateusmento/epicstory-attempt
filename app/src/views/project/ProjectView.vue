<script setup lang="ts">
import { useDependency } from '@/core/dependency-injection';
import { IssueService } from '@/domain/issue/issue.service';
import type { Issue } from '@/domain/issue/issue.type';
import { ref } from 'vue';
import CreateIssueForm from './CreateIssueForm.vue';
import IssueList from './IssueList.vue';

const props = defineProps<{
  projectId: number;
}>();

const issueService = useDependency(IssueService);

const issues = ref<Issue[]>([]);

async function createIssue(formData: { title: string }) {
  const issue = await issueService.createIssue(props.projectId, formData.title);
  issues.value.push(issue);
}
</script>

<template>
  <main>
    <h1>Project {{ projectId }}</h1>
    <CreateIssueForm @submit="createIssue" />
    <IssueList :issues="issues" />
  </main>
</template>
