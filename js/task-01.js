const a = document.getElementById('categories');

const b = document.querySelectorAll('.item');
console.log(`В списке ${b.length} категории.`);

b.forEach(element => {
  console.log(`Категория: ${element.firstElementChild.textContent} `);
  console.log(`Категория: ${element.lastElementChild.children.length}`);
});
