<script setup lang="ts"></script>

<template>
  <main>
    <h1>Sign in</h1>
    <h2>Enter with your account</h2>
    <form>
      <input :value="$route.query.email" data-testid="signin-email-input" />
    </form>
  </main>
</template>
