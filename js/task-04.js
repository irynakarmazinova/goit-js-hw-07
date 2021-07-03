const spanEl = document.getElementById('value'); //span
const btnDecEl = document.querySelector("[data-action='decrement']");
const btnIncEl = document.querySelector("[data-action='increment']");
let counterValue = 0;

const decrement = () => {
  counterValue -= 1;
  spanEl.textContent = counterValue;
  // counterValueRef.textContent = counterValue -= 1;
};
const incremet = () => {
  counterValue += 1;
  spanEl.textContent = counterValue;
  // counterValueRef.textContent = counterValue += 1;
};

btnDecEl.addEventListener('click', decrement);
btnIncEl.addEventListener('click', incremet);
