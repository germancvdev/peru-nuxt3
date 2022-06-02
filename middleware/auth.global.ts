export default defineNuxtRouteMiddleware(async (to, from) => {
  if (to.path !== from.path) return;

  console.log("defineNuxtRouteMiddleware");
  const { $api } = useNuxtApp();

  const token = useCookie("token");

  const { id } = await $api("/whoAmI", {
    headers: {
      Authorization: `Bearer ${token.value}`,
    },
  })
    .then((x) => x)
    .catch((_) => ({}));

  if (!id && to.path !== "/login") {
    return navigateTo("/login");
  }
});
