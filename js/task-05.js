const inputEl = document.getElementById('name-input'); //input
const spanEl = document.getElementById('name-output'); //span

// onInputChange - функция обработчик события
const onInputChange = inputName => {
  let textInput = 'незнакомец';

  textInput = inputEl.value || 'незнакомец';
  spanEl.textContent = textInput;

  return inputName;

  // inputEl.value === ''
  //   ? (spanEl.textContent = 'незнакомец')
  //   : (spanEl.textContent = inputName.target.value);
};

inputEl.addEventListener('input', onInputChange);
// inputEl.addEventListener('change', onInputChange);
// ------------------------------------------------------------------
// inputEl.value === inputName.target.value
// ------------------------------------------------------------------
