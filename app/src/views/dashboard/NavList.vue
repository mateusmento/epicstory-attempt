<script lang="ts" setup>
withDefaults(
  defineProps<{
    direction: 'column' | 'row';
  }>(),
  {
    direction: 'column',
  },
);
</script>

<template>
  <nav class="nav-list p-2 gap-1">
    <slot />
  </nav>
</template>

<style scoped>
.nav-list {
  display: flex;
  flex-direction: v-bind(direction);
}
</style>
