<template>
  <div>
    <h1>Hello</h1>

    <div class="dark:bg-red-800 bg-purple-400 py-4 px-2 rounded-lg shadow-lg">
      <h1>Princess!</h1>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div
        id="chartdivpie"
        class="chartdiv bg-purple-200 dark:bg-slate-700 rounded-lg shadow-2xl mt-3"
      ></div>
      <div
        id="chartdiv"
        class="chartdiv bg-purple-200 dark:bg-slate-700 rounded-lg shadow-2xl mt-3"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useColumnChart } from "@/composables/charts/column";
import { usePieChart } from "@/composables/charts/pie";

definePageMeta({
  keepalive: false,
});
const colorMode = useColorMode();

onBeforeMount(async () => {
  setTimeout(() => {
    const {
      drawing: drawing1,
      dispose: dispose1,
      data,
    } = usePieChart("chartdiv");
    const { drawing, dispose } = useColumnChart("chartdivpie");
    data.value = [
      {
        category: "Lithuania",
        value: 501.9,
      },
      {
        category: "Czechia",
        value: 301.9,
      },
      {
        category: "Ireland",
        value: 201.1,
      },
      {
        category: "Germany",
        value: 165.8,
      },
      {
        category: "Australia",
        value: 139.9,
      },
      {
        category: "Austria",
        value: 128.3,
      },
      {
        category: "UK",
        value: 99,
      },
    ];
    setTimeout(() => {
      drawing(colorMode.value);
      drawing1(colorMode.value);
    }, 1000);

    watch(colorMode, (v) => {
      console.log("CHANGE MODE");

      dispose();
      dispose1();
      drawing(v.value);
      drawing1(v.value);
    });
  }, 200);
});
</script>

<style lang="scss">
.chartdiv {
  width: 100%;
  height: 300px;
}
</style>
