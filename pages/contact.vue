<template>
  <div class="min-h-[calc(100dvh-3rem)]">
    <div class="container mx-auto"></div>
    <div class="fixed inset-0 z-[-1] brightness-50">
      <img
        class="w-full h-full object-cover"
        src="/images/night-rain.jpg"
        alt=""
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { DefaultLayoutProvide } from "~/layouts/default.vue";

const injected = inject<DefaultLayoutProvide>("layout:default")!;

onMounted(() => {
  injected.footerActive.setTrue();
});
</script>

<style scoped></style>
