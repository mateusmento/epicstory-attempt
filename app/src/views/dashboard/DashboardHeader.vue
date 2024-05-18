<script lang="ts" setup>
import NavList from '../../components/NavList.vue';
import NavLink from '../../components/NavLink.vue';
</script>

<template>
  <header>
    <div class="py-3.5 px-5 pr-0 underline underline-offset-4">Cloud Migration</div>
    <NavList direction="row">
      <NavLink to="">Backlog</NavLink>
      <NavLink to="">Sprints</NavLink>
      <NavLink to="">Roadmap</NavLink>
      <NavLink to="">Members</NavLink>
    </NavList>
  </header>
</template>

<style scoped>
header {
  display: flex;
  border-bottom: 1px solid rgb(223, 188, 255);
  background-color: rgb(247, 239, 255);
  color: rgb(104, 65, 138);
}
</style>
