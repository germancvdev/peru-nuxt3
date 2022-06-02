<template>
  <div class="relative h-screen w-screen overflow-x-hidden">
    <app-notification />
    <app-navigation />
    <div class="container mx-auto py-5 pt-20 md:pt-5">
      <slot />
    </div>
  </div>
</template>

<script lang="ts"></script>
