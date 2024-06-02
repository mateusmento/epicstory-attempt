<script lang="ts" setup>
import type { Workspace } from '@/types/workspace';
import CurrentWorkspace from './CurrentWorkspace.vue';
import NavList from '../../components/NavList.vue';
import NavLink from '../../components/NavLink.vue';

defineProps<{
  currentWorkspace: Workspace;
}>();
</script>

<template>
  <aside class="row-span-2">
    <CurrentWorkspace class="py-3 pb-1.5 px-5" :workspace="currentWorkspace" />
    <NavList variant="primary">
      <NavLink to="" class="flex gap-8 justify-between items-baseline">
        <span>Workspaces</span>
        <small class="text-xs hover:underline underline-offset-2">Epicstory</small>
      </NavLink>
      <NavLink to="" class="flex gap-8 justify-between items-baseline">
        <span>Projects</span>
        <span class="text-xs hover:underline underline-offset-2">Cloud Migration</span>
      </NavLink>
      <NavLink to="">Members</NavLink>
    </NavList>
  </aside>
</template>

<style scoped>
aside {
  color: rgb(244, 232, 255);
  background-color: blueviolet;
}
</style>
