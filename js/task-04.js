let counterValue = 0;

const c = document.getElementById('value');

const decrement = () => {
  counterValue -= 1;
  c.textContent = counterValue;
};
const incremet = () => {
  counterValue += 1;
  c.textContent = counterValue;
};

const a = document.querySelector("[data-action='decrement']");
const b = document.querySelector("[data-action='increment']");
a.addEventListener('click', decrement);
b.addEventListener('click', incremet);

// а мы тут за один раз всю гроздь добавляем??
