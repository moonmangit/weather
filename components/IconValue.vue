<template>
  <span class="flex w-fit items-center gap-x-3">
    <Icon
      :name="content.iconName"
      class="animate__animated animate__fadeInRight"
      :style="{ animationDelay: '0.5s' }"
    ></Icon>
    <div
      class="animate__animated animate__fadeInDown"
      :style="{
        animationDelay: '0.5s',
      }"
    >
      {{ content.value }}
    </div>
  </span>
</template>

<script lang="ts" setup>
defineProps<{
  content: {
    value: string;
    iconName: string;
  };
}>();
</script>
