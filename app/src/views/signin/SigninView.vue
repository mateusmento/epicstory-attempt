<script setup lang="ts">
import { Button } from '@/components/button';
import { Field } from '@/components/field';
import { Form } from '@/components/form';
import { useDependency } from '@/core/dependency-injection';
import { AuthApi } from '@/domain/auth/auth.api';
import type { SigninRequest } from '@/domain/auth/dtos/singin.dto';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();

const authApi = useDependency(AuthApi);

const signinEmail = ref(route.query.email);

async function signin(data: SigninRequest) {
  await authApi.signin(data);
  router.push('/dashboard');
}
</script>

<template>
  <main>
    <h1>Sign in</h1>
    <h2>Make stories with us.</h2>
    <Form @submit="signin">
      <Field v-model="signinEmail" label="Email" name="email" data-testid="signin-email-input" />
      <Field label="Password" name="password" data-testid="signin-password-input" />
      <Button variant="special" size="md" type="submit" data-testid="signin-submit-button">
        Sign in
      </Button>
    </Form>
  </main>
</template>
