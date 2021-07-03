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

// а так ? так мы не за один раз добавляем всю гроздь ?

// const a = document.getElementById('gallery');
// a.classList.add('img-list');

// images.forEach(item => {
//   const b = document.createElement('img');
//   b.classList.add('img-item');
//   b.src = item.url;
//   b.alt = item.alt;

//   a.appendChild(b);
//   console.log(b);
// });
