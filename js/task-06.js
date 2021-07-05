const inputEl = document.getElementById('validation-input');

const onInputBlur = () => {
  const { value, dataset } = inputEl;

  //приведение к числу датасет (в датасет хранятся атрибуты data-...)
  if (value.length === +dataset.length) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
  }

  // inputEl.value.length === 6
  //   ? inputEl.classList.toggle('valid')
  //   : inputEl.classList.toggle('invalid');
};

inputEl.addEventListener('blur', onInputBlur);
// ------------------------------------------------------------------------
// const form = document.querySelector('#validation-input');

// form.addEventListener('blur', onCheckForm);

// function onCheckForm(e) {
//   console.log('Нужно ввести: ', +e.target.dataset.length);
//   console.log('Ты ввел: ', e.target.value.length);

//   if (e.target.value.length === +e.target.dataset.length) {
//     form.className = 'valid';
//   } else {
//     form.className = 'invalid';
//   }
// }
// ------------------------------------------------------------------------
// const inputEl = document.getElementById('validation-input');

// inputEl.addEventListener('blur', onFormInput);

// function onFormInput(e) {
//   if (e.currentTarget.value.length === +inputEl.getAttribute('data-length')) {
//     inputEl.classList.add('valid');
//     inputEl.classList.remove('invalid');
//   } else {
//     inputEl.classList.add('invalid');
//     inputEl.classList.remove('valid');
//   }
// }
// ------------------------------------------------------------------------
// const datasetLength = parseInt(inputRef.dataset.length);
