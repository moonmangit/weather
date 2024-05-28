<template>
  <div
    class="flex flex-col items-center justify-center bg-white z-[999] fixed inset-0 animate__animated animate__fadeIn"
  >
    <div
      class="aspect-square rounded-full bg-orange-500 text-white flex items-center justify-center relative"
    >
      <AppBanner
        variant="center"
        class="animate__animated animate__fadeInUp"
      />
      <div
        id="earth"
        class="absolute -inset-10 border-[1px] border-gray-300 flex items-center rounded-full animate-spin animate__animated animate__fadeIn"
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
