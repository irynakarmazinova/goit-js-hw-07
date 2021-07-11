// const refs = {
//   inputEl: document.getElementById('name-input'), //input
//   spanEl: document.getElementById('name-output'), //span
// };

// // onInputChange - функция обработчик события
// const onInputChange = inputName => {
//   let textInput = 'незнакомец';

//   textInput = refs.inputEl.value || 'незнакомец';
//   refs.spanEl.textContent = textInput;

//   // inputEl.value === ''
//   //   ? (spanEl.textContent = 'незнакомец')
//   //   : (spanEl.textContent = inputName.target.value);

//   return inputName;
// };

// refs.inputEl.addEventListener('input', onInputChange);
// ------------------------------------------------------------------
// inputEl.value === inputName.target.value

// ------------------------------------------------------------
// второй вариант решения - от Дмитрия ментора
// const refs = {
//   inputEl: document.querySelector('#name-input'),
//   spanEl: document.querySelector('#name-output'),
// };

// const spanDefText = refs.spanEl.textContent;

// function onInputChange() {
//   refs.spanEl.textContent = refs.inputEl.value.trim()
//     ? refs.inputEl.value
//     : spanDefText;
// }
// refs.inputEl.addEventListener('input', onInputChange);
// ------------------------------------------------------------
// третий вариант решения - от Дмитрия ментора
// const refs = {
//   inputEl: document.querySelector('#name-input'),
//   spanEl: document.querySelector('#name-output'),
// };

// const onInputChange = ({ target: { value } }) =>
//   (refs.spanEl.textContent = value.trim() ? value : 'Незнакомец');

// refs.inputEl.addEventListener('input', onInputChange);
// ------------------------------------------------------------------
// четвертый вариант решения
// const refs = {
//   inputEl: document.querySelector('#name-input'),
//   spanEl: document.querySelector('#name-output'),
// };

// const onInput = () => {
//   refs.spanEl.textContent = refs.inputEl.value ? refs.inputEl.value : 'незнакомец';
// };
// refs.input.addEventListener('input', onInput);
