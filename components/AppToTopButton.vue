<template>
  <Transition name="slide-up">
    <div
      v-if="show"
      class="fixed bottom-5 right-5 z-20"
    >
      <button
        class="block size-14 bg-black/40 backdrop-blur-sm text-white border border-white rounded-full hover:bg-white hover:text-gray-900 duration-300"
        @click.prevent="onClick()"
      >
        <Icon name="mdi:arrow-collapse-up"></Icon>
      </button>
    </div>
  </Transition>
</template>

<script lang="ts" setup>
const show = ref(false);

const { y, directions } = useScroll(document, {
  onScroll() {
    show.value = y.value > 200 && directions.bottom;
  },
});

function onClick() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
</script>

<style></style>
