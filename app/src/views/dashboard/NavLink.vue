<script lang="ts" setup></script>

<template>
  <a class="py-1.5 px-3 rounded-md">
    <slot />
  </a>
</template>

<style>
a {
  color: rgb(104, 65, 138);
  cursor: pointer;

  &:hover {
    color: white;
    background-color: blueviolet;
  }
}
</style>
