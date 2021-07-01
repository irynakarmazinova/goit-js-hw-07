// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories,
// то есть элементов li.item.Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента(тега h2) и количество элементов в категории(всех вложенных в него элементов li).

// Например для первой категории получится:
// Категория: Животные
// Количество элементов: 4

// const a = document.querySelector('#categories');
const a = document.getElementById('categories');
console.log(a);

// const b = a.getElementsByClassName('item');
// const w = b.forEach(el => console.log(el));
// console.dir(b); //в прото нет метода форич

const b = document.querySelectorAll('.item');
console.log(`В списке ${b.length} категории. `);
const f = b.forEach(element => {
  console.log(`Категория: ${element.firstElementChild.textContent}`);
  console.log(`Категория: ${element.lastElementChild.children.length}`);
  return element;
});

// firstElementChild, lastElementChild.children - тяжело понять эти констуркции
