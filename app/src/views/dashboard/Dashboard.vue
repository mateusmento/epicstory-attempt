<script lang="ts" setup>
import type { Workspace } from '@/types/workspace';
import CurrentWorkspace from './CurrentWorkspace.vue';
import NavList from './NavList.vue';
import NavLink from './NavLink.vue';

defineProps<{
  currentWorkspace: Workspace;
}>();

const items = Array(20).fill(0);
</script>

<template>
  <div class="layout text-sm">
    <aside>
      <CurrentWorkspace class="py-3 pb-1.5 px-5" :workspace="currentWorkspace" />
      <NavList>
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

    <header>
      <div class="py-3.5 px-5 pr-0 underline underline-offset-4">Cloud Migration</div>
      <NavList direction="row">
        <NavLink to="">Backlog</NavLink>
        <NavLink to="">Sprints</NavLink>
        <NavLink to="">Roadmap</NavLink>
        <NavLink to="">Members</NavLink>
      </NavList>
    </header>

    <main class="p-4">
      <ul>
        <li v-for="(item, i) of items" :key="i">Item {{ i }}</li>
      </ul>
    </main>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');

.layout {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
  max-height: 100vh;
  font-family: 'Inter';
}

header {
  display: flex;
  background-color: rgb(235, 214, 255);
  background-color: rgb(247, 239, 255);
  border-bottom: 1px solid rgb(223, 188, 255);
  color: rgb(104, 65, 138);
  z-index: 1;
}

aside {
  background-color: blueviolet;
  grid-row: 1 / span 2;

  &,
  a {
    color: rgb(244, 232, 255);
  }

  a:hover {
    color: blueviolet;
    background-color: rgb(247, 239, 255);
  }
}

main {
  background-color: rgb(235, 214, 255);
  background-color: rgb(247, 239, 255);
  color: rgb(104, 65, 138);
  overflow-y: auto;
  min-height: 0;
}
</style>
