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

ulEl.prepend(...newArr);

// а так? так мы тоже за один раз добавляем гроздь?

// const a = document.getElementById('ingredients');
// ingredients.forEach(el => {
//   const c = document.createElement('li');
//   c.textContent = el;
//   a.appendChild(c);
//   console.log(c);
// });
