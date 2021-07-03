const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const a = document.querySelector('#ingredients');

ingredients.forEach(el => {
  const c = document.createElement('li');
  c.textContent = el;
  a.appendChild(c);
  console.log(c);
});

// а мы тут за один раз всю гроздь добавляем??
