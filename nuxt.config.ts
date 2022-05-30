import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],

  css: ["boxicons/css/boxicons.min.css", "@/assets/scss/main.scss"],

  runtimeConfig: {
    public: {
      BASE_URL: process.env.BASE_URL,
    },
  },
});
