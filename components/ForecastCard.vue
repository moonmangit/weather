<template>
  <div
    class="flex w-full divide-x-[1px] divide-white/50 p-4 whitespace-nowrap bg-gray-800/60 backdrop-blur-sm text-white relative group"
  >
    <section
      class="w-[min(150px,33.33%)] flex items-center justify-center relative"
    >
      <section class="flex flex-col items-center justify-center">
        <Icon
          class="text-5xl"
          :name="getWeatherIcon(content.weather[0].icon)"
        ></Icon>
        <h1 class="text-2xl">{{ content.main.temp }} °c</h1>
        <p class="text-2xs capitalize">
          {{ content.weather[0].description }}
        </p>
      </section>
      <p class="absolute top-0 left-0 text-xs">
        {{ $dayjs(thisDate).format("HH:MM A") }}
      </p>
    </section>
    <section class="py-2 pl-5 flex flex-col gap-2">
      <!-- Temp -->
      <div class="flex gap-3">
        <DataWithLabel
          :content="{
            label: 'Feels Like',
            value: content.main.feels_like + '°c',
            iconName: 'solar:facemask-circle-outline',
          }"
        />
        <DataWithLabel
          :content="{
            label: 'Range',
            value:
              content.main.feels_like +
              '°c ~ ' +
              content.main.feels_like +
              '°c',
            iconName: 'solar:spedometer-low-linear',
          }"
        />
      </div>
      <!-- Wind -->
      <DataWithLabel
        :content="{
          label: 'Wind',
          value: content.wind.speed + ' m/s',
          iconName: 'solar:spedometer-low-linear',
        }"
      />
      <!-- Humidity & Pressure -->
      <div class="flex items-center gap-x-4">
        <DataWithLabel
          :content="{
            label: 'Humidity',
            value: content.main.humidity + ' %',
            iconName: 'material-symbols:humidity-helper-outline-rounded',
          }"
        />
        <DataWithLabel
          :content="{
            label: 'Pressure',
            value: Intl.NumberFormat().format(content.main.sea_level) + ' hPa',
            iconName: 'streamline:beach',
          }"
        />
      </div>
    </section>
    <div
      v-if="coverImage"
      class="absolute inset-0 z-[-1] overflow-hidden"
    >
      <img
        :src="coverImage"
        class="w-full h-full object-cover brightness-[0.5] group-hover:scale-105 duration-300"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getWeatherIcon } from "~/assets/src/icon";
import { getCoverFromIconFile } from "~/assets/src/cover";

const props = defineProps<{
  content: any;
}>();

const coverImage = computed(() => {
  const defaultCover = "/images/night-clear.jpg";
  if (!props.content) return defaultCover;
  return (
    getCoverFromIconFile((props.content as any).weather[0].icon, "0.5") ||
    defaultCover
  );
});

const thisDate = computed(() => {
  return unixSecondsToDate(props.content.dt);
});
</script>

<style></style>
