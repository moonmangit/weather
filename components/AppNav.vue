<template>
  <nav
    ref="thisEl"
    class="fixed top-0 inset-x-0 group/nav text-white z-30 duration-300 border-b border-transparent"
    :class="{
      '-translate-y-full': hideNav,
      'bg-white !text-gray-700 !border-gray-500': activeNav,
    }"
  >
    <div class="container mx-auto flex justify-between items-stretch">
      <NuxtLink
        to="/"
        class="pl-2"
      >
        <AppBanner :no-by="activeNav" />
      </NuxtLink>
      <ul class="relative flex">
        <li
          v-for="(link, key) in links"
          ref="linkEls"
          :key="key"
          class="flex items-stretch"
        >
          <NuxtLink
            :to="link.to"
            class="h-full flex items-center justify-center p-5"
          >
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>
      <div
        class="fixed top-0 right-0 h-[10px] w-0 clip-path-polygon-[50%_100%,_0%_0%,_100%_0%] duration-300"
        :class="{
          'bg-white': !activeNav,
          'bg-gray-800': activeNav,
        }"
        :style="{
          width: `${movingBarStyle.width}px`,
          left: `${movingBarStyle.left}px`,
        }"
      ></div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
const hideNav = ref(false);
const activeNav = ref(false);
onMounted(() => {
  const { y, directions } = useScroll(document, {
    onScroll() {
      // Hide nav if y is greater than 100 and scrolling down
      hideNav.value = y.value > 100 && directions.bottom;
      // Nav will be change appearance if y is greater than 100
      activeNav.value = y.value > 100;
    },
  });
});

const links: Record<string, { to: string; label: string; iconName: string }> = {
  about: { to: "/about", label: "About", iconName: "mdi:information" },
  contact: { to: "/contact", label: "Contact", iconName: "mdi:email" },
};

// Moving bar
const linkEls = ref<HTMLElement[]>([]);
const thisEl = ref<HTMLElement | null>(null);
const linkActiveEl = ref<HTMLElement | Element | null>(null);
const movingBarStyle = ref({ width: 0, left: 0 });
onMounted(() => {
  watch(() => useRoute().fullPath, calculateMovingBar, {
    immediate: true,
  });
  window.addEventListener("resize", calculateMovingBar);
});
function findActiveLink() {
  const linkEls = thisEl.value?.querySelectorAll(
    `a[href="${useRoute().fullPath}"]`,
  );
  if (linkEls?.length) {
    linkActiveEl.value = linkEls[0];
  }
}
function updateMovingBar() {
  if (linkActiveEl.value) {
    const { width, left } = linkActiveEl.value.getBoundingClientRect();
    movingBarStyle.value = { width, left };
  }
}
function calculateMovingBar() {
  findActiveLink();
  updateMovingBar();
}
</script>

<style scoped></style>
