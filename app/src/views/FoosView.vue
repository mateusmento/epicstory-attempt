<script lang="ts" setup>
import { useDependency } from '@/core/dependency-injection';
import { FooService } from '@/services/foo.service';
import { onMounted, ref } from 'vue';

const fooService = useDependency(FooService);

interface Foo {
  id: number;
  counter: number;
}

const foos = ref<Foo[]>([]);

onMounted(async () => {
  foos.value = await fooService.getFoos();
});

async function addFoo() {
  foos.value.push(await fooService.createFoo());
}

async function incrementFoo(index: number) {
  if (!foos.value[index]) return;
  const foo = await fooService.incrementFoo(foos.value[index].id);
  foos.value[index] = foo;
}
</script>

<template>
  <div>
    <div>Foos</div>
    <div>
      <div v-for="(foo, i) of foos" :key="foo.id">
        Count: {{ foo.counter }}
        <button @click="incrementFoo(i)">Increment</button>
      </div>
      <button @click="addFoo">Add</button>
    </div>
  </div>
</template>

<style scoped></style>
