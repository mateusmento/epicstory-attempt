<script setup lang="ts">
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const formData = reactive({
  email: '',
});

function signup() {
  router.push({ name: 'signin', query: { email: formData.email } });
}
</script>

<template>
  <main>
    <h1>Sign up</h1>
    <h2>Create an account</h2>
    <form @submit.prevent="signup" data-testid="signup-form">
      <input data-testid="signup-name-input" />
      <input v-model="formData.email" data-testid="signup-email-input" />
      <input type="password" data-testid="signup-password-input" />
      <button type="submit" data-testid="signup-button">Sign up</button>
    </form>
  </main>
</template>

<style scoped>
button {
  background: red;
  color: white;
}
</style>
