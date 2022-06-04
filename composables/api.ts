import { Global } from "@/interfaces/global";

export const useApi = async (path: string) => {
  const item = ref<Global>({});
  const dialog = ref(false);
  const loading = ref(false);

  const { $api } = useNuxtApp();

  async function add() {
    loading.value = true;

    try {
      await $api(path, {
        method: "POST",
        body: item.value,
      });

      dialog.value = false;
      refresh();
    } catch (_) {}

    loading.value = false;
  }

  async function update() {
    loading.value = true;
    try {
      await $api(`${path}${item.value.id}`, {
        method: "PUT",
        body: item.value,
      });
      dialog.value = false;
      refresh();
    } catch (_) {}

    loading.value = false;
  }

  async function del(id: string) {
    loading.value = true;
    try {
      await $api(`${path}${id}`, {
        method: "DELETE",
      });
      dialog.value = false;
      refresh();
    } catch (_) {}

    loading.value = false;
  }

  const {
    data: items,
    pending,
    error,
    refresh,
  } = await useLazyAsyncData<Global[]>(path, async () => {
    const { results } = await $api(path, {
      params: {
        "filter[limit]": 6,
      },
    });
    return results;
  });

  return {
    item,
    items,
    error,
    pending,
    refresh,
    add,
    update,
    del,
    loading,
    dialog,
  };
};
