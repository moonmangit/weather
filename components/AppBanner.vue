<template>
  <h1 class="p-5 relative text-lg">
    <span class="animate__animated animate__fadeInDown block"> Veather </span>
    <p
      v-if="!noBy"
      class="absolute text-2xs bottom-1 animate__animated animate__fadeInUp"
      :class="{
        'inset-x-0 text-center': variant === 'center',
        'right-0': variant === 'right',
      }"
    >
      by Moonman
    </p>
  </h1>
</template>

<script lang="ts" setup>
withDefaults(
  defineProps<{
    variant?: "right" | "center";
    noBy?: boolean;
  }>(),
  {
    variant: "right",
  },
);
</script>
