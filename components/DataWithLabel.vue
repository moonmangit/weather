<template>
  <div>
    <p class="text-xs">{{ content.label }}</p>
    <section class="flex items-center gap-1">
      <Icon :name="content.iconName"></Icon>
      <div>
        {{ content.value }}
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  content: {
    label: string;
    iconName: string;
    value: string;
  };
}>();
</script>

<style></style>
