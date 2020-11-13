const disp = (vm, str, pro = {}) => {
  return vm.$store.dispatch(str, pro);
};

export default disp;
