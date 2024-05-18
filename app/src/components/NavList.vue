<script lang="ts" setup>
import { provide } from 'vue';
import type { ContextVariant } from './theme.type';

const props = withDefaults(
  defineProps<{
    direction: 'column' | 'row';
    variant?: ContextVariant;
  }>(),
  {
    direction: 'column',
    variant: 'default',
  },
);

provide('variant', props.variant);
</script>

<template>
  <nav class="navlist p-2 gap-1" :class="`navlist-variant-${variant}`">
    <slot />
  </nav>
</template>

<style scoped>
.navlist {
  display: flex;
  flex-direction: v-bind(direction);

  color: var(--navlist-color);
  background-color: var(--navlist-bg);
}

.navlist-variant-default {
  --navlist-bg: rgb(247, 239, 255);
}

.navlist-variant-primary {
  --navlist-bg: blueviolet;
}

.navlist-variant-secondary {
  --navlist-bg: rgb(235, 214, 255);
  --navlist-color: rgb(150, 83, 209);
}
</style>
