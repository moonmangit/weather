<template>
  <section
    class="min-h-[calc(50dvh)] bg-white from-20% relative py-8 flex flex-col gap-5 text-gray-800"
  >
    <div class="container mx-auto space-y-8 z-10">
      <h1 class="text-4xl text-center">Next 24 Hours</h1>
      <div class="flex flex-col text-center w-[min(40ch,80dvw)] mx-auto">
        <q>
          The most reliable way to forecast the future is to try to understand
          the present - John Naisbitt
        </q>
      </div>
      <hr class="border-gray-500 max-w-[200px] mx-auto" />
      <ul class="flex flex-col gap-4 px-0 lg:px-8 lg:max-w-[700px] lg:mx-auto">
        <li
          v-for="dat in content.list"
          :key="dat.dt"
        >
          <ForecastCard :content="dat" />
        </li>
      </ul>
    </div>

    <div
      class="absolute bottom-[calc(100%-1px)] h-[50px] lg:h-[150px] bg-white inset-x-0 clip-path-polygon-[0_100%,_0_0,_50%_97%,_100%_0,_100%_100%] lg:clip-path-polygon-[0_100%,_0_0,_50%_90%,_100%_0,_100%_100%] duration-300"
    />
  </section>
</template>

<script lang="ts" setup>
defineProps<{
  content: any;
}>();

const active = ref(false);
onMounted(() => {
  const { y } = useScroll(document, {
    onScroll() {
      active.value = y.value > window.innerHeight * 0.5;
    },
  });
});
</script>

<style></style>
