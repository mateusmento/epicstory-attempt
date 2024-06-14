<script lang="ts" setup>
const items = Array(20).fill(0);
</script>

<template>
  <main class="p-4">
    <ul class="backlog">
      <li class="item" v-for="(item, i) of items" :key="i">
        <div>User story</div>
        <div class="title">Item {{ i }}</div>
      </li>
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

.backlog {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.item {
  width: 126px;
  height: 126px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 8px;
  background-color: white;
  font-size: 0.8rem;
}

.title {
  font-size: 1.4rem;
  font-weight: 500;
  margin-top: 8px;
}
</style>
