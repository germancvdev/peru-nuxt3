export const useApi = async (path: string) => {
  const item = ref<Global>({});
  const dialog = ref(false);
  const loading = ref(false);

  interface Global {
    id?: string;
    name?: string;
    image?: string;
    images?: string[];
    description?: string;
  }
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
    const res = await $api(path);
    return res;
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
