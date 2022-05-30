<template>
  <div>
    <h1>Hello</h1>
    <div>
      <pre>{{ data }}</pre>
    </div>
  </div>
</template>

<script setup>
const { $api } = useNuxtApp();

console.log("pass");
const res1 = await $api("/activities");

console.log(res1, "res");

const { data } = await useAsyncData("places", async () => {
  const res = await $api("/places");
  return res;
});
</script>

<style lang="scss" scoped></style>
