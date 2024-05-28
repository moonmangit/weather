<template>
  <div>
    <p class="text-xs animate__animated animate__fadeIn">
      {{ content.label }}
    </p>
    <section
      class="flex items-center gap-1 animate__animated animate__fadeInDown"
      :style="{
        animationDelay: '0.3s',
      }"
    >
      <IconValue
        :content="{
          value: content.value,
          iconName: content.iconName,
        }"
      />
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
