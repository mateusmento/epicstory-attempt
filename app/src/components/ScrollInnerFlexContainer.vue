<script lang="ts" setup>
const items = Array(50).fill(0);
</script>

<template>
  <div class="root">
    <main>
      <section class="content">
        <ul>
          <li v-for="(item, i) of items" :key="i">Item {{ i }}</li>
        </ul>
      </section>
      <section class="content-control">
        <nav>
          <a href="">Backlog</a>
          <a href="">Sprints</a>
          <a href="">Roadmap</a>
          <a href="">Members</a>
        </nav>
      </section>
    </main>
    <footer>
      <nav>
        <a href="">Backlog</a>
        <a href="">Sprints</a>
        <a href="">Roadmap</a>
        <a href="">Members</a>
      </nav>
    </footer>
  </div>
</template>

<style scoped>
.root {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

main {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 40px;
  border: 2px dashed black;

  .content {
    flex: 1;
    border: 2px dashed black;
    overflow-y: auto;
  }

  min-height: 0;
}

nav {
  display: flex;

  a {
    padding: 20px 40px;
  }
}

.content-control {
  background-color: rgb(255, 68, 68);

  a {
    color: white;

    &:hover {
      background-color: rgb(255, 87, 87);
    }
  }
}

footer {
  background-color: rgb(68, 68, 255);

  a {
    color: white;

    &:hover {
      background-color: rgb(87, 87, 255);
    }
  }
}
</style>
