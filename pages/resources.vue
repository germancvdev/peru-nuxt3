<template>
  <div>
    <div>
      <p v-if="pending" class="text-slate-600 text-center transition-all">
        pending...
      </p>

      <div class="flex justify-end pr-2 mb-3">
        <app-btn
          color="primary"
          dark
          tile
          small
          @click="
            dialog = true;
            item = {};
          "
        >
          Add resource
        </app-btn>
      </div>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
      >
        <div
          v-for="p in items"
          :key="p.id"
          class="shadow m-2 overflow-hidden hover:cursor-pointer hover:shadow-sm transition-all"
        >
          <img
            :src="p.image"
            :alt="p.name"
            class="h-40 object-cover w-full hover:scale-105 transition-all"
          />
          <p class="text-lg mt-2 text-center">
            {{ p.name }}
          </p>

          <div class="flex justify-evenly my-3">
            <app-btn color="error" small tile dark icon @click="del(p.id)">
              <i class="bx bx-x"></i>
            </app-btn>
            <app-btn
              color="warning"
              small
              tile
              dark
              icon
              @click="
                dialog = true;
                item = { ...p };
              "
            >
              <i class="bx bxs-pencil"> </i>
            </app-btn>
          </div>
        </div>
      </div>
    </div>

    <div
      :class="{
        'hidden opacity-0': !dialog,
        'flex opacity-100': dialog,
      }"
      class="transition-all duration-1000 bg-gray-800 h-screen w-screen fixed top-0 left-0 bg-opacity-60 justify-center items-center z-10"
    >
      <div class="w-96 bg-white rounded-sm p-5">
        <h1 class="text-xl mb-2 text-primary-500 font-bold">
          {{ item.id ? "Update" : "Add" }} Place
        </h1>

        <form @submit.prevent="item.id ? update() : add()">
          <div class="my-3">
            <input
              v-model="item.name"
              type="text"
              placeholder="Name"
              class="w-full form-input bg-gray-100 py-2 rounded-sm border-transparent focus:border-gray-200 focus:bg-white focus:ring-0"
            />
          </div>
          <div class="my-3">
            <input
              v-model="item.description"
              type="text"
              placeholder="Description"
              class="w-full form-input bg-gray-100 py-2 rounded-sm border-transparent focus:border-gray-200 focus:bg-white focus:ring-0"
            />
          </div>
          <div class="my-3">
            <input
              v-model="item.image"
              type="text"
              placeholder="URL Image"
              class="w-full form-input bg-gray-100 py-2 rounded-sm border-transparent focus:border-gray-200 focus:bg-white focus:ring-0"
            />
          </div>
          <div class="flex justify-evenly mt-6">
            <app-btn
              dark
              small
              depressed
              tile
              color="secondary"
              @click.prevent="dialog = false"
            >
              Cancel
            </app-btn>
            <app-btn
              type="submit"
              dark
              small
              depressed
              tile
              color="primary"
              :loading="loading"
            >
              Save
            </app-btn>
          </div>
        </form>
      </div>
    </div>

    <app-btn @click="refresh">refresh</app-btn>
  </div>
</template>

<script setup lang="ts">
const { items, pending, update, item, add, del, dialog, loading, refresh } =
  await useApi("/places/");
</script>

<style lang="scss" scoped></style>
