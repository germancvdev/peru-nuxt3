<template>
  <div class="relative h-screen w-screen overflow-x-hidden">
    <app-notification />

    <header class="bg-primary-50 flex justify-center">
      <nav>
        <ul class="flex">
          <li
            v-for="(item, index) in items"
            :key="index"
            class="mx-3 text-lg flex items-center justify-center transition-all py-4 hover:text-primary-500"
            :class="{ 'text-primary-500': route.path === item.path }"
          >
            <nuxt-link :to="item.path">
              {{ item.name }}
              <i :class="[item.icon, 'text-sm']"></i
            ></nuxt-link>
          </li>
        </ul>
      </nav>
    </header>

    <div class="container mx-auto py-5">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
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
