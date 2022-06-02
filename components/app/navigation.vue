<template>
  <header>
    <div
      class="fixed md:relative w-full bg-primary-300 bg-opacity-90 h-16 z-20 md:bg-primary-50 flex items-center"
    >
      <div class="container mx-auto flex justify-between items-center">
        <p class="pl-2 text-lg font-bold text-white md:text-primary-500">
          Logo
        </p>

        <nav class="hidden md:block">
          <ul class="flex">
            <li
              v-for="(item, index) in items"
              :key="index"
              class="mx-3 text-md flex items-center justify-center transition-all py-4 hover:text-primary-500"
              :class="{ 'text-primary-500': route.path === item.path }"
            >
              <nuxt-link :to="item.path" @click.stop="show = false">
                {{ item.name }}
                <i :class="[item.icon, 'text-sm']"></i
              ></nuxt-link>
            </li>

            <li class="items-center justify-center transition-all py-4">
              <div>
                <select v-model="$colorMode.preference">
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                </select>
              </div>
            </li>
          </ul>
        </nav>

        <app-btn class="md:hidden" icon dark @click="show = !show">
          <i class="bx bx-menu"></i>
        </app-btn>
      </div>
    </div>
    <div
      :class="[
        {
          '!left-0': show,
          'opacity-0': !show,
        },
      ]"
      class="transition-all top-0 -left-[100%] fixed z-10 h-screen w-screen bg-primary-50 flex justify-center"
    >
      <nav class="mt-20">
        <ul class="flex flex-col">
          <li
            v-for="(item, index) in items"
            :key="index"
            class="mx-3 text-lg flex items-center justify-center transition-all py-4 hover:text-primary-500"
            :class="{ 'text-primary-500': route.path === item.path }"
          >
            <nuxt-link :to="item.path" @click.stop="show = false">
              {{ item.name }}
              <i :class="[item.icon, 'text-sm']"></i
            ></nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
const show = ref(false);
interface Item {
  name: string;
  icon: string;
  path: string;
}

const route = useRoute();

const items: Item[] = [
  {
    name: "Home",
    icon: "bx bx-home",
    path: "/",
  },
  {
    name: "Resources",
    icon: "bx bxs-map-alt",
    path: "/resources",
  },
  {
    name: "Activities",
    icon: "bx bx-body",
    path: "/activities",
  },
  {
    name: "Restaurants",
    icon: "bx bxs-food-menu",
    path: "/restaurants",
  },
  {
    name: "Hotels",
    icon: "bx bx-hotel",
    path: "/hotels",
  },
];
</script>

<style lang="scss" scoped></style>
