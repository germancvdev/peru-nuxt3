<template>
  <div class="w-96 bg-white dark:bg-slate-800 p-6 rounded-lg">
    <p class="text-primary-500 text-3xl text-center mb-8 mt-1 font-medium">
      Login
    </p>
    <div class="my-3">
      <input
        v-model="auth.auth.email"
        type="email"
        placeholder="Email"
        class="w-full form-input bg-gray-100 py-2 dark:bg-slate-400 rounded-sm border-transparent focus:border-gray-200 focus:bg-white focus:ring-0 dark:placeholder:text-white dark:focus:border-none"
      />
    </div>
    <div class="my-4">
      <input
        v-model="auth.auth.password"
        type="password"
        placeholder="Password"
        class="w-full form-input dark:bg-slate-400 bg-gray-100 py-2 rounded-sm border-transparent focus:border-gray-200 focus:bg-white focus:ring-0 dark:focus:border-none dark:placeholder:text-white"
      />
    </div>

    <div class="mt-6 mb-2 flex justify-center">
      <app-btn
        :loading="auth.loading"
        dark
        block
        color="primary"
        :disabled="!auth.auth.password && !auth.auth.email"
        @click="auth.login"
      >
        Sign In
      </app-btn>
    </div>
    <p class="text-center">or</p>
    <div class="mt-2 mb-5 flex justify-center">
      <app-btn
        :loading="auth.loadingRegister"
        dark
        block
        color="secondary"
        :disabled="!auth.auth.password && !auth.auth.email"
        @click="auth.singup"
      >
        Sing Up
      </app-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthUserStore } from "@/stores/auth";

const auth = useAuthUserStore();

definePageMeta({
  layout: "login",
});
</script>
