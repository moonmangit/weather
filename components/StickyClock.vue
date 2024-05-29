<template>
  <section
    ref=""
    class="hidden lg:flex items-center fixed right-0 text-3xl duration-700"
    :class="{
      'text-gray-800 top-[calc(100dvh-270px)]': inverted,
      'text-white top-[calc(50dvh-15px)]': !inverted,
    }"
  >
    <p class="capitalize lg:p-5">
      {{ timeString }}
    </p>
    <hr
      class="flex-1 w-[100px] duration-300"
      :class="{
        'border-gray-800': inverted,
        'border-white': !inverted,
      }"
    />
  </section>
</template>

<script lang="ts" setup>
const { timeString } = useClock();

const inverted = ref(false);
onMounted(() => {
  const { y } = useScroll(document, {
    onScroll() {
      const vh = window.innerHeight;
      inverted.value = y.value > vh / 2 - 75;
    },
  });
});
</script>

<style></style>
