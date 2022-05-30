// export default defineNuxtRouteMiddleware(async (to, from) => {
//   const { $api } = useNuxtApp();
//   const token = useCookie("token");

//   const { id } = await $api("/whoAmI", {
//     headers: {
//       Authorization: `Bearer ${token.value}`,
//     },
//   })
//     .then((x) => x)
//     .catch((_) => ({}));
//   console.log(id);

//   if (!id) {
//     return navigateTo("/login");
//   }
// });

export default async function ({ path }) {
  console.log(path);

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
console.log("auth");
