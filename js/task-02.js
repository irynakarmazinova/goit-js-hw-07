// добавление коллекции элементов через JS. в осн делается через функцию-вар.3

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ulEl = document.getElementById('ingredients');
const newArr = [];

ingredients.forEach(item => {
  const createLiEl = document.createElement('li');

  createLiEl.textContent = item;
  newArr.push(createLiEl);
});

ulEl.append(...newArr); //мы берем массив этих элементов, которые создали и распыляем  отдельными аргументами вызов аппенда-спред
// ------------------------------------------------------------------------
// второй вариант решения - создаю массив кнопок с помощью map
// const ulEl = document.getElementById('ingredients');

// const ingredientsItems = ingredients.map(item => {
//   const createLiEl = document.createElement('li');

//   createLiEl.textContent = item;
//   return createLiEl;
// });

// ulEl.append(...ingredientsItems);
// ------------------------------------------------------------------------
// третий вариант решения - с помощью функции и map
// const ulEl = document.getElementById('ingredients');

// const makeIngridientsFunction = items => {
//   return items.map(item => {
//     const createLiEl = document.createElement('li');

//     createLiEl.textContent = item;
//     return createLiEl;
//   });
// };

// const elements = makeIngridientsFunction(ingredients);
// ulEl.append(...elements);
// ------------------------------------------------------------------------
// четвертый вариант - с помощью функции и перебора forEach
// const listContainer = document.querySelector('#ingredients');

// const insertListItems = () => {
//   let array = [];

//   ingredients.forEach(element => {
//     let unit = document.createElement(`li`);

//     unit.textContent = element;
//     array.push(unit);
//   });
//   return array;
// };

// const allUnits = insertListItems(ingredients);
// listContainer.append(...allUnits);
// ------------------------------------------------------------------------
// пятый вариант - с помощью map
// const listContainer = document.querySelector('ul#ingredients');

// const insertListItems = items => {
//   const unit = document.createElement(`li`);
//   unit.textContent = items;
//   return unit;
// };
// const allUnits = ingredients.map(items => insertListItems(items));
// listContainer.append(...allUnits);
// ------------------------------------------------------------------------
// добавление лишек в дом поштучно
// const a = document.getElementById('ingredients');

// ingredients.forEach(item => {
//   const c = document.createElement('li');

//   c.textContent = item;
//   a.append(c);
//   console.log(c);
// });
