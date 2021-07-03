const inputEl = document.getElementById('font-size-control');
const spanEl = document.getElementById('text');

const onInputChange = () => {
  spanEl.style.fontSize = `${inputEl.value}px`;
};

inputEl.addEventListener('change', onInputChange);
