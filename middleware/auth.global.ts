export default async function ({ path }) {
  const { $api } = useNuxtApp();

  const token = useCookie("token");

  const { id } = await $api("/whoAmI", {
    headers: {
      Authorization: `Bearer ${token.value}`,
    },
  })
    .then((x) => x)
    .catch((_) => ({}));

  if (!id && path !== "/login") {
    return navigateTo("/login");
  }
}
