export const useTogglable = (setupState: boolean) => {
  const value = ref(setupState);
  const toggle = () => {
    value.value = !value.value;
  };
  const setTrue = () => {
    value.value = true;
  };
  const setFalse = () => {
    value.value = false;
  };
  return { value: computed(() => value.value), toggle, setTrue, setFalse };
};
