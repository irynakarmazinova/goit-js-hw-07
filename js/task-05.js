const refs = {
  inputEl: document.getElementById('name-input'), //input
  spanEl: document.getElementById('name-output'), //span
};

// onInputChange - функция обработчик события
const onInputChange = inputName => {
  let textInput = 'незнакомец';

  textInput = refs.inputEl.value || 'незнакомец';
  refs.spanEl.textContent = textInput;

  // inputEl.value === ''
  //   ? (spanEl.textContent = 'незнакомец')
  //   : (spanEl.textContent = inputName.target.value);

  return inputName;
};

refs.inputEl.addEventListener('input', onInputChange);
// inputEl.addEventListener('change', onInputChange);
// ------------------------------------------------------------------
// inputEl.value === inputName.target.value
// ------------------------------------------------------------------
// const refs = {
//   input: document.querySelector('#name-input'),
//   output: document.querySelector('#name-output'),
// };

// const onInput = () => {
//   refs.output.textContent = refs.input.value ? refs.input.value : 'незнакомец';
// };
// refs.input.addEventListener('input', onInput);
