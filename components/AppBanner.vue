<template>
  <h1 class="p-5 relative text-lg">
    Veather
    <p
      v-if="!noBy"
      class="absolute text-2xs bottom-1"
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
