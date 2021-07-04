const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const ulEl = document.getElementById('gallery');
ulEl.classList.add('img-list');

const createImages = images.reduce((acc, item) => {
  return (acc = `${acc} <img class = "img-item" alt="${item.alt}" src="${item.url}"> `);
}, '');

ulEl.insertAdjacentHTML('beforeend', createImages);
// -----------------------------------------------------------------------
// второй вариант решения - создаю массив изображений с помощью map
// const a = document.getElementById('gallery');
// a.classList.add('img-list');

// const createImages = images.map(item => {
//   const b = document.createElement('img');
//   b.classList.add('img-item');
//   b.src = item.url;
//   b.alt = item.alt;

//   return b;
// });

// a.append(...createImages);
// ------------------------------------------------------------------------
// третий вариант решения - с помощью функции
// const a = document.getElementById('gallery');
// a.classList.add('img-list');

// const createImagesFunction = items => {
//   return items.map(item => {
//     const b = document.createElement('img');

//     b.classList.add('img-item');
//     b.src = item.url;
//     b.alt = item.alt;

//     return b;
//   });
// };

// const elements = createImagesFunction(images);
// a.append(...elements);
