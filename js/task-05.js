const a = document.getElementById('name-input');
const b = document.getElementById('name-output');
let c = 'незнакомец';

const onChange = e => {
  //   c = a.target.value;
  c = a.value || 'незнакомец';
  b.textContent = c;
  console.log(e);
};

a.addEventListener('change', onChange);

// а мы тут за один раз всю гроздь добавляем??
