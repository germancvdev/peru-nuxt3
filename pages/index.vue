<template>
  <div>
    <h1>Hello</h1>
    <div>
      <pre>{{ items }}</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
// const { $api } = useNuxtApp();

// const { data } = await useAsyncData("places", async () => {
//   const res = await $api("/places");
//   return res;
// });

const { items, pending, update, item, add, del, dialog, loading } =
  await useApi("/places/");
</script>

<style lang="scss" scoped></style>
