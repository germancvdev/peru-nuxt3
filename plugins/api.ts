import { $Fetch, $fetch } from "ohmyfetch";

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig().public;
  const cookie = useCookie("auth.token");
  const api: $Fetch = $fetch.create({
    baseURL: config.BASE_URL,
    headers: {
      Authorization: `Bearer ${cookie.value}`,
    },
  });
  return {
    provide: {
      api,
    },
  };
});
