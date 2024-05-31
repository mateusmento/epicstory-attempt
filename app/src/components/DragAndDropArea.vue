<script lang="ts" setup>
function grabFile(x: MouseEvent) {
  x.preventDefault();
  console.log(x);
}
</script>

<template>
  <div class="drag-and-drop-area" @dragover="(e) => e.preventDefault()" @drop="grabFile"></div>
</template>

<style>
.drag-and-drop-area {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 400px;
  height: 300px;
  border: 2px dashed #222;
}

.drag-and-drop-area::before {
  content: 'Drag a file here';
}

.drag-and-drop-area:-moz-drag-over::before {
  content: 'Drop your file';
}
</style>
