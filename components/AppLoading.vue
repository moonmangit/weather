<template>
  <div
    class="flex flex-col items-center justify-center min-h-[calc(100dvh-3rem)] bg-white"
  >
    <div
      class="aspect-square rounded-full bg-orange-500 text-white flex items-center justify-center relative"
    >
      <AppBanner variant="center" />
      <div
        id="earth"
        class="absolute -inset-10 border-[1px] border-gray-300 flex items-center rounded-full animate-spin"
        :style="{
          animationDuration: '10s',
        }"
      >
        <span
          class="block bg-gray-600 size-5 absolute -left-[11px] rounded-full"
        ></span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
