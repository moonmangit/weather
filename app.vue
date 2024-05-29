<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Veather | Weather App",
  ogTitle: "Veather | Weather App",
  description: "A simple weather app to check the weather in your location.",
  ogDescription: "A simple weather app to check the weather in your location.",
  ogImage: "https://weather.moonman.work/favicon.svg",
  twitterCard: "summary_large_image",
});

const darkModeActive = useLocalStorage("darkMode", true);
useHead({
  htmlAttrs: {
    class: darkModeActive.value ? "dark" : "",
  },
  link: [
    {
      rel: "icon",
      type: "image/svg+xml",
      href: "/favicon.svg",
    },
  ],
});

export type AppProvide = {
  darkMode: {
    active: ComputedRef<boolean>;
    toggle: Function;
  };
};
provide<AppProvide>("app", {
  darkMode: {
    active: computed(() => darkModeActive.value),
    toggle: () => {
      darkModeActive.value = !darkModeActive.value;
      // toggle the class on the html element
      document.documentElement.classList.toggle("dark");
    },
  },
});
</script>
