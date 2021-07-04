const inputEl = document.getElementById('validation-input');

const onInputBlur = () => {
  const { value, dataset } = inputEl;
  const isValid = value.length === +dataset.length; //приведение к числу датасет (в датасет хранятся атрибуты data-...)

  if (isValid) {
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
