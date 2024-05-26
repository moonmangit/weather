export const useClock = () => {
  const time = ref(new Date());
  setInterval(() => {
    time.value = new Date();
  }, 1000);
  const timeString = computed(() => {
    return time.value.toLocaleTimeString();
  });
  return {
    time,
    timeString,
  };
};
