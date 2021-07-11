const refs = {
  inputEl: document.querySelector('#controls input'),
  btnRenderEl: document.querySelector("[data-action='render']"),
  btnDestroyEl: document.querySelector("[data-action='destroy']"),
  divBoxesEl: document.getElementById('boxes'),
};

// глобальные переменные
let amount = 0;

// добавить по клику
function createOneBoxes() {
  refs.inputEl.value = +refs.inputEl.value + 1;
  createBoxes();
}
refs.btnRenderEl.addEventListener('click', createOneBoxes);

// добавить по клику
function createBoxes() {
  let size = 30;
  const newArr = [];

  let children = refs.divBoxesEl.children;
  const childrenLength = children.length;

  amount = +refs.inputEl.value;

  const createNewArray = new Array(amount);
  createNewArray.fill('');

  // добавить див и каждый последующий + 10px
  // _ - заглушка
  // i - index
  createNewArray.forEach((_, i) => {
    size += 10;

    // добавить дивы
    if (i > childrenLength - 1) {
      const createDivEl = document.createElement('div');
      createDivEl.style.backgroundColor = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
      createDivEl.style.width = `${size}px`;
      createDivEl.style.height = `${size}px`;
      newArr.push(createDivEl);
    }
  });

  // удалить число в инпуте
  if (amount < childrenLength) {
    const newArray = new Array(childrenLength);
    newArray.fill('');

    newArray.forEach((_, index) => {
      if (index > amount - 1) {
        refs.divBoxesEl.removeChild(children[index]);
      }
    });
  }

  refs.divBoxesEl.append(...newArr);
}
refs.inputEl.addEventListener('change', createBoxes);

// очистить по клику
function destroyBoxes() {
  refs.divBoxesEl.innerHTML = '';
  refs.inputEl.value = '';
}
refs.btnDestroyEl.addEventListener('click', destroyBoxes);

// генерация рандомного числа
function randomNumber() {
  return Math.round(Math.random() * (100 - 0) + 0);
}

// ------------------------------------------------------------------------
// console.log('Получаешь введенное значение: ', refs.inputEl.value);
// ------------------------------------------------------------------------
// от ментора

// Нужно проверять есть ли уже нарисованные кубики или нет. Если есть, то увеличиваем размер amount на их количество

// refs.divBoxesEl.childNodes.length !== 0
//   ? (amount = refs.divBoxesEl.childNodes.length + amount)
//   : amount;
// ------------------------------------------------------------------------
// -Я создал функцию для создания дива с заданными параметрами.
// -В этой функции создаётся массив длиной значения инпута.
// -В массив пушится сам созданный див(бокс) с заданными параметрами.
// -На клик по кнопке в слушателе в колбеке создал функцию в которой через append добавил дивы.
// const boxes = createBoxes(amount);
//   boxesWrapper.append(...boxes);
// ------------------------------------------------------------------------
// Передать введенное количество в колбек функцию при клике на кнопку "создать" можно так:
// btnRender.addEventListener("click", event => createBoxes(amount));
// ------------------------------------------------------------------------
// второй вариант решения - более запутанный

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
// ------------------------------------------------------------------------
// третий вариант решения - от Дмитрия ментора
// const [input, createBtn, destroyBtn] =
//   document.querySelector("#controls").children;
// console.log(input);
// console.log(createBtn);
// console.log(destroyBtn);
// let size = 30;

// const divListRef = document.querySelector("#boxes");

// createBtn.addEventListener("click", () => createBoxes(input.value));
// destroyBtn.addEventListener("click", destroyBoxes);

// function createBoxes(amount) {
//   const newArr = [];
//   for (let i = 0; i < amount; i += 1) {
//     const newDiv = document.createElement("div");
//     newDiv.style.backgroundColor = createRandom();
//     newDiv.style.width = size + "px";
//     newDiv.style.height = size + "px";
//     size += 10;
//     newArr.push(newDiv);
//   }
//   divListRef.append(...newArr);
// }

// function destroyBoxes() {
//   divListRef.innerHTML = "";
//   size = 30;
// }

// function createRandom() {
//   return `rgb(${(Math.random() * 255) << 0}, ${(Math.random() * 255) << 0}, ${
//     (Math.random() * 255) << 0
//   })`;
// }
