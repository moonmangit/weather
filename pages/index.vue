<template>
  <div class="w-screen flex flex-col">
    <template v-if="!pending && !error">
      <CurrentWeatherSection :content="data.current" />
      <ForecastWeatherSection :content="data.forecast" />
      <!-- Cover -->
      <div
        class="fixed inset-0 z-[-1] saturate-50 brightness-50 scale-110 duration-300"
      >
        <img
          :src="coverImage"
          alt=""
          class="w-full h-full object-cover"
        />
      </div>
    </template>
    <!-- Loading -->
    <AppLoading v-else />
  </div>
</template>

<script lang="ts" setup>
import { weatherApi } from "~/assets/src/api";
import { getCoverFromIconFile } from "~/assets/src/cover";
import type { DefaultLayoutProvide } from "~/layouts/default.vue";

const injected = inject<DefaultLayoutProvide>("layout:default")!;
onMounted(() => {
  injected.footerActive.setFalse();
});

const { data, pending, error } = useAsyncData<any>(async () => {
  const current = await weatherApi.getCurrent();
  const forecast = await weatherApi.getForecast(8);
  return {
    current,
    forecast,
  };
});

const coverImage = computed(() => {
  const defaultCover = "/images/night-clear.jpg";
  if (!data.value) return defaultCover;
  return (
    getCoverFromIconFile((data.value.current as any).weather[0].icon) ||
    defaultCover
  );
});
</script>

<style scoped></style>
