const quantityСategoriesEl = document.querySelectorAll('#categories .item');
console.log(`В списке ${quantityСategoriesEl.length} категории.`);

quantityСategoriesEl.forEach(element => {
  console.log(`Категория: ${element.firstElementChild.textContent} `);
  console.log(`Категория: ${element.lastElementChild.children.length}`);
});
// ---------------------------------------------------------------------------
// quantityСategoriesEl.forEach(element => {
//   console.log(`Категория: ${element.firstElementChild.textContent}
// Количество элементов: ${element.lastElementChild.children.length}`);
// });
// ---------------------------------------------------------------------------
// quantityСategoriesEl.forEach(element => {
//   console.log('Категория:', element.querySelector('h2').textContent);
//   console.log('Количество элементов:', element.querySelectorAll('li').length);
// });
