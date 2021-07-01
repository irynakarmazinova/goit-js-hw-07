// const a = document.querySelector('#categories');
const a = document.getElementById('categories');

// const b = a.getElementsByClassName('item');
// b.forEach(el => console.log(el));
// console.dir(b); //в прото нет метода форич

const b = document.querySelectorAll('.item');
console.log(`В списке ${b.length} категории.`);

b.forEach(element => {
  console.log(`Категория: ${element.firstElementChild.textContent} `);
  console.log(`Категория: ${element.lastElementChild.children.length}`);
  //   return element;
});

// firstElementChild, lastElementChild.children - тяжело понять эти констуркции
