<template>
  <div
    class="h-screen transition-all w-screen dark:bg-slate-900 bg-slate-100 flex justify-center items-center relative overflow-hidden"
  >
    <div class="absolute top-0 right-0">
      <app-btn
        v-if="colorMode.preference === 'dark'"
        icon
        @click="changeTheme('light')"
      >
        <i class="bx bxs-brightness"></i>
      </app-btn>
      <app-btn v-else icon @click="changeTheme('dark')">
        <i class="bx bxs-adjust-alt"></i>
      </app-btn>
    </div>
    <app-notification />
    <slot />
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode();
const mode = useCookie("colorMode");

colorMode.preference = mode.value;

function changeTheme(m: string) {
  colorMode.preference = m;
  mode.value = m;
}
</script>
