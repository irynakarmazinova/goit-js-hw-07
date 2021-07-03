let counts = 0;
const a = document.getElementById('boxes');
const b = a.children;
let size = 30;
const red = 255;
const green = 0;
const blue = 0;

const f = document.querySelector('[type="number"]');

const randomInteger = () => {
  return Math.round(-0.5 + Math.random() * 256);
};

const createElement = id => {
  const f = document.createElement('div');
  f.style.width = `${size}px`;
  f.style.height = `${size}px`;
  f.style.backgroundColor = `rgb(${randomInteger()}, ${randomInteger()}, ${randomInteger()})`;
  f.id = `box-${id}`;
  a.appendChild(f);
  size += 10;
  console.log(a);
};

const saveAmount = amount => {
  f.value = amount;
  counts = amount;
};

const createBoxes = amount => {
  if (!amount) {
    a.innerHTML = '';
    size = 30;
  } else {
    createElement(amount);
  }
  saveAmount(amount);
};

const create = () => createBoxes(counts + 1);

const clearEl = () => createBoxes(0);

const c = document.querySelector('[data-action="render"]');
const d = document.querySelector('[data-action="destroy"]');

c.addEventListener('click', create);
d.addEventListener('click', clearEl);

const onChange = () => {
  const inputValue = +f.value;
  const { length } = a.children;

  if (length < inputValue) {
    const arr = new Array(inputValue);
    arr.fill(' ');
    arr.forEach((_, index) => {
      if (index > length - 1) {
        createElement(index);
      }
    });

    console.log(arr);
  } else {
    const arr = new Array(length);
    arr.fill(' ');
    arr.forEach((_, index) => {
      if (index + 1 > inputValue) {
        a.removeChild(b[index]);
      }
    });
  }

  size = inputValue * 10 + 30;
  counts = inputValue;
};

f.addEventListener('change', onChange);
