//паттерн объект ссылок
const refs = {
  spanEl: document.getElementById('value'),
  btnDecrementEl: document.querySelector("[data-action='decrement']"),
  btnIncremetEl: document.querySelector("[data-action='increment']"),
};

let counterValue = 0;

const decrement = () => {
  counterValue -= 1;
  refs.spanEl.textContent = counterValue;
  // counterValueRef.textContent = counterValue -= 1;
};
const incremet = () => {
  counterValue += 1;
  refs.spanEl.textContent = counterValue;
  // counterValueRef.textContent = counterValue += 1;
};

refs.btnDecrementEl.addEventListener('click', decrement);
refs.btnIncremetEl.addEventListener('click', incremet);
// ------------------------------------------------------------------------
// второй вариант решения - от Дмитрия ментора
// const refs = {
//   counterValue: document.getElementById('value'),
//   btnIncrement: document.querySelector('[data-action=increment]'),
//   btnDecrement: document.querySelector('[data-action=decrement]'),
// };

// const onIncrementBtnClick = () => {
//   refs.counterValue.textContent = +refs.counterValue.textContent + 1;
// };

// const onDecrementBtnClick = () => {
//   refs.counterValue.textContent = +refs.counterValue.textContent - 1;
// };

// refs.btnIncrement.addEventListener('click', onIncrementBtnClick);
// refs.btnDecrement.addEventListener('click', onDecrementBtnClick);
