const inputEl = document.getElementById('name-input'); //input
const spanEl = document.getElementById('name-output'); //span

const onInputChange = inputName => {
  let textInput = 'незнакомец';

  textInput = inputEl.value || 'незнакомец';
  spanEl.textContent = textInput;

  return inputName;

  // inputName.target.value === ''
  //   ? (spanEl.textContent = 'незнакомец')
  //   : (spanEl.textContent = inputName.target.value);
};

inputEl.addEventListener('change', onInputChange);

// const a = inputName.currentTarget.elements;
// console.dir(a);

// // const b = a.mail.value;
// // console.log(b);
