<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const darkModeActive = useLocalStorage("darkMode", true);
useHead({
  htmlAttrs: {
    class: darkModeActive.value ? "dark" : "",
  },
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
