<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

function signin() {
  router.push('/dashboard');
}
</script>

<template>
  <main>
    <h1>Sign in</h1>
    <h2>Enter with your account</h2>
    <form @submit.prevent="signin">
      <input :value="$route.query.email" data-testid="signin-email-input" />
      <button type="submit">Sign in</button>
    </form>
  </main>
</template>
