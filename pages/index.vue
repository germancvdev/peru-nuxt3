<template>
  <div>
    <h1>Hello</h1>

    <div class="dark:bg-red-800 bg-purple-400 py-4 px-2 rounded-lg shadow-lg">
      <h1>Princess!</h1>
    </div>
    <div
      id="chartdiv"
      class="bg-purple-200 dark:bg-slate-700 rounded-lg shadow-2xl mt-3"
    ></div>
  </div>
</template>

<script setup>
const colorMode = useColorMode();

onBeforeMount(() => {
  const { drawing, changeTheme } = useChart(colorMode.value, "chartdiv");
  drawing();

  watch(colorMode, (v) => {
    changeTheme(v.value);
  });
});
</script>

<style lang="scss">
#chartdiv {
  width: 100%;
  height: 500px;
}
</style>
