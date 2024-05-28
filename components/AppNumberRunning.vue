<template>
  <span>{{ value.toFixed(2) }} </span>
</template>

<script lang="ts" setup>
const props = defineProps<{
  target: number;
  start: number;
  perTick: number;
  durationMs: number;
}>();

const value = ref(props.start);
const tickMs = computed(() => {
  const howManyTicks = (props.target - props.start) / props.perTick;
  return props.durationMs / howManyTicks;
});

onMounted(() => {
  const timer = setInterval(() => {
    value.value += props.perTick;
    if (value.value >= props.target) {
      clearInterval(timer);
      value.value = props.target;
    }
  }, tickMs.value);
});
</script>

<style></style>
