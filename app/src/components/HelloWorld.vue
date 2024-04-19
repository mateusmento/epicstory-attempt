<script setup lang="ts">
defineProps<{
  msg: string;
}>();
</script>

<template>
  <div class="greetings">
    {{ msg }}
  </div>
</template>

<style scoped></style>
