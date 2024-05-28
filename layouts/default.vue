<template>
  <div>
    <AppNav :disabled="!navActive.value.value" />
    <main>
      <div class="min-h-[calc(100dvh-3rem)]">
        <slot></slot>
      </div>
      <footer
        class="h-[3rem] flex items-center justify-center"
        :class="{
          'bg-transparent text-white': footerActive.value.value,
          'bg-white text-gray-700': !footerActive.value.value,
        }"
      >
        All rights reserved &copy; {{ new Date().getFullYear() }}
      </footer>
    </main>
    <AppToTopButton />
  </div>
</template>

<script lang="ts" setup>
import Lenis from "lenis";

// Footer
const footerActive = useTogglable(false);

// Navigator
const navActive = useTogglable(true);

export type DefaultLayoutProvide = {
  footerActive: ReturnType<typeof useTogglable>;
  navActive: ReturnType<typeof useTogglable>;
};
provide<DefaultLayoutProvide>("layout:default", {
  footerActive,
  navActive,
});

// Lenis
onMounted(() => {
  const lenis = new Lenis();
  function raf(time: any) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
});
</script>

<style></style>
