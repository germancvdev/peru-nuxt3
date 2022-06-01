import { $Fetch, $fetch } from "ohmyfetch";
import { useNotification } from "~~/stores/notification";

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig().public;
  const cookie = useCookie("auth.token");

  const noti = useNotification();

  const api: $Fetch = $fetch.create({
    baseURL: config.BASE_URL,
    headers: {
      Authorization: `Bearer ${cookie.value}`,
    },
    onResponse: async ({ options, request }) => {
      if (!options.method) return;
      console.log(options.method);

      switch (options.method) {
        case "POST":
          noti.$patch({
            title: "OK!",
            type: "success",
            message: "Successfully created",
          });
          return noti.show();
        case "PUT":
          noti.$patch({
            title: "OK!",
            type: "success",
            message: "Successfully updated",
          });
          return noti.show();
        case "DELETE":
          noti.$patch({
            title: "OK!",
            type: "success",
            message: "Successfully deleted",
          });
          return noti.show();

        default:
          return;
      }
    },

    onResponseError: async ({ response }) => {
      const { message, name, statusCode } = response._data.error;
      noti.$patch({
        title: `${name} ${statusCode}`,
        type: "error",
        message,
      });
      noti.show();
    },
  });
  return {
    provide: {
      api,
    },
  };
});
