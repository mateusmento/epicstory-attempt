<script lang="ts" setup>
const items = Array(20).fill(0);
</script>

<template>
  <main class="p-4">
    <ul>
      <li v-for="(item, i) of items" :key="i">Item {{ i }}</li>
    </ul>
  </main>
</template>

<style scoped>
main {
  background-color: rgb(247, 239, 255);
  color: rgb(104, 65, 138);
  overflow-y: auto;
  min-height: 0;
}
</style>
