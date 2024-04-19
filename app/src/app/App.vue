<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import HelloWorld from '@/components/HelloWorld.vue';
import { provideDependencies } from '@/core/dependency-injection';

provideDependencies();
</script>

<template>
  <header>
    <div class="wrapper">
      <HelloWorld msg="Hello world" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/foos">Foos</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
