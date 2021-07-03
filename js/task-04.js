const refs = {
  spanEl: document.getElementById('value'),
  btnDecEl: document.querySelector("[data-action='decrement']"),
  btnIncEl: document.querySelector("[data-action='increment']"),
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

refs.btnDecEl.addEventListener('click', decrement);
refs.btnIncEl.addEventListener('click', incremet);
