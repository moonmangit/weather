<template>
  <div>
    <AppNav />
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
// Footer
const footerActive = useTogglable(false);

export type DefaultLayoutProvide = {
  footerActive: ReturnType<typeof useTogglable>;
};
provide<DefaultLayoutProvide>("layout:default", {
  footerActive,
});
</script>

<style></style>
