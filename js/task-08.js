const refs = {
  inputEl: document.querySelector('#controls input'),
  btnRenderEl: document.querySelector("[data-action='render']"),
  btnDestroyEl: document.querySelector("[data-action='destroy']"),
  divBoxesEl: document.getElementById('boxes'),
};

refs.btnRenderEl.addEventListener('click', createBoxes);
refs.btnDestroyEl.addEventListener('click', destroyBoxes);

// добавить по клику
function createBoxes(amount) {
  let size = 30;
  const newArr = [];

  amount = +refs.inputEl.value;

  for (let i = 0; i < amount; i += 1) {
    // size = inputValue * 10 + 30;
    size += 10;

    const createDivEl = document.createElement('div');
    createDivEl.style.backgroundColor = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
    createDivEl.style.width = `${size}px`;
    createDivEl.style.height = `${size}px`;
    newArr.push(createDivEl);
  }

  refs.divBoxesEl.append(...newArr);
}

// очистить по клику
function destroyBoxes() {
  refs.divBoxesEl.innerHTML = '';
}

// генерация рандомного числа
function randomNumber() {
  return Math.round(Math.random() * (100 - 0) + 0);
}

// console.log('Получаешь введенное значение: ', refs.inputEl.value);
// Я, создал функцию для создания дива с заданными параметрами.В этой функции создаётся массив длиной значения инпута, в массив пушится сам созданный див(бокс) с заданными параметрами.На клик по кнопке в слушателе в колбеке создал функцию в которой через append добавил дивы.
// const boxes = createBoxes(amount);
//   boxesWrapper.append(...boxes);

// Передать введенное количество в колбек функцию при клике на кнопку "создать" можно так:
// btnRender.addEventListener("click", event => createBoxes(amount));
// ------------------------------------------------------------------------
// const a = document.getElementById('boxes');
// const c = document.querySelector('[data-action="render"]');
// const d = document.querySelector('[data-action="destroy"]');
// const f = document.querySelector('[type="number"]');

// let counts = 0;
// const b = a.children;
// let size = 30;

// const createElement = id => {
//   const f = document.createElement('div');
//   f.style.width = `${size}px`;
//   f.style.height = `${size}px`;
//   f.style.backgroundColor = `rgb(${randomInteger()}, ${randomInteger()}, ${randomInteger()})`;
//   f.id = `box-${id}`;
//   a.appendChild(f);
//   size += 10;
// };

// const saveAmount = amount => {
//   f.value = amount;
//   counts = amount;
// };

// const createBoxes = amount => {
//   if (!amount) {
//     a.innerHTML = '';
//     size = 30;
//   } else {
//     createElement(amount);
//   }
//   saveAmount(amount);
// };

// const create = () => createBoxes(counts + 1);
// c.addEventListener('click', create);

// const clearEl = () => createBoxes(0);
// d.addEventListener('click', clearEl);

// const onChange = () => {
//   const inputValue = +f.value;
//   const { length } = a.children;

//   if (length < inputValue) {
//     const arr = new Array(inputValue);
//     arr.fill(' ');
//     arr.forEach((_, index) => {
//       if (index > length - 1) {
//         createElement(index);
//       }
//     });

//     console.log(arr);
//   } else {
//     const arr = new Array(length);
//     arr.fill(' ');
//     arr.forEach((_, index) => {
//       if (index + 1 > inputValue) {
//         a.removeChild(b[index]);
//       }
//     });
//   }

//   size = inputValue * 10 + 30;
//   counts = inputValue;
// };
// f.addEventListener('change', onChange);

// const randomInteger = () => {
//   return Math.round(-0.5 + Math.random() * 256);
// };
