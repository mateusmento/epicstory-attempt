<script lang="ts" setup>
import { computed, inject } from 'vue';
import type { ContextVariant } from './theme.type';

const props = defineProps<{
  variant?: ContextVariant;
}>();

const parentVariant = inject('variant') as ContextVariant | undefined;

const currentVariant = computed(() => props.variant ?? parentVariant ?? 'default');
</script>

<template>
  <a class="navlink py-1.5 px-3 rounded-md" :class="`navlink-variant-${currentVariant}`">
    <slot />
  </a>
</template>

<style scoped>
.navlink {
  color: var(--navlink-color);
  cursor: pointer;

  &:hover {
    color: var(--navlink-hover-color);
    background-color: var(--navlink-hover-bg);
  }
}

.navlink-variant-default {
  --navlink-color: rgb(104, 65, 138);
  --navlink-hover-bg: blueviolet;
  --navlink-hover-color: white;
}

.navlink-variant-primary {
  --navlink-color: rgb(244, 232, 255);
  --navlink-hover-color: blueviolet;
  --navlink-hover-bg: rgb(247, 239, 255);
}

.navlink-variant-secondary {
  --navlink-color: rgb(104, 65, 138);
  --navlink-hover-bg: rgb(150, 83, 209);
  --navlink-hover-color: white;
}
</style>
