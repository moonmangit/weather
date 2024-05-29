<template>
  <div class="w-screen flex flex-col">
    <template v-if="!pending">
      <CurrentWeatherSection :content="data.current" />
      <ForecastWeatherSection
        :content="data.forecast"
        class="pb-[100px]"
      />
      <StickyClock />
      <div class="fixed inset-0 z-[-1] saturate-50 brightness-50">
        <img
          class="w-full h-full object-cover"
          :src="coverImage"
          :style="{
            ...coverStyle,
          }"
        />
      </div>
    </template>
    <!-- Loading -->
    <AppLoading v-if="pending" />
  </div>
</template>

<script lang="ts" setup>
import { breakpointsTailwind } from "@vueuse/core";
import { weatherApi } from "~/assets/src/api";
import { getCoverFromIconFile } from "~/assets/src/cover";
import type { DefaultLayoutProvide } from "~/layouts/default.vue";

const injected = inject<DefaultLayoutProvide>("layout:default")!;
onMounted(() => {
  injected.footerActive.setFalse();
});

const { data, pending } = useAsyncData<any>(async () => {
  injected.navActive.setFalse();
  const current = await weatherApi.getCurrent();
  const forecast = await weatherApi.getForecast(8);
  injected.navActive.setTrue();
  return {
    current,
    forecast,
  };
});

const { greaterOrEqual } = useBreakpoints(breakpointsTailwind);

// Cover
const coverStyle = ref({
  transform: "translateY(0px)",
  filter: "blur(0px)",
});
onMounted(() => {
  const { y } = useScroll(document, {
    onScroll() {
      if (!greaterOrEqual("lg").value) return;
      coverStyle.value = {
        transform: `
          translateY(${y.value * 0.1}px) 
          scale(${1 + y.value * 0.001}) 
          rotate(${y.value * 0.005}deg)
        `,
        filter: `
          blur(${y.value * 0.01}px) 
          brightness(${1 - y.value * 0.001})
        `,
      };
    },
  });
});

const coverImage = computed(() => {
  const defaultCover = "/images/day-clear.jpg";
  if (!data.value) return defaultCover;
  return (
    getCoverFromIconFile((data.value.current as any).weather[0].icon) ||
    defaultCover
  );
});
</script>

<style scoped></style>
