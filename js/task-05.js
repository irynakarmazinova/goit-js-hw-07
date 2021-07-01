const a = document.getElementById('name-input');
const b = document.getElementById('name-output');
let c = 'незнакомец';

const onChange = e => {
  a.value || 'незнакомец';

  b.textContent = c;
  console.log(e);
};

a.addEventListener('change', onChange);
