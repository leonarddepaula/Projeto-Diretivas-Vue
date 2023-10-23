export default {
  created(el, binding) {
    console.log(el, binding.arg, binding.value);

    const posicaoPossiveis = ["relative", "fixed", "absolute"];

    if (posicaoPossiveis.includes(binding.arg)) {
      el.style.position = binding.arg;
      el.style.top = `${binding.value}px`;
    }
  },
};
