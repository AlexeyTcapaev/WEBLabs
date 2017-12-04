import './form2.styl'

let button = document.querySelector('.button')

button.addEventListener('click', () => {
  let value = document.querySelector('input.text').value

  if (value == '' || !value)
    return alert('Нет данных')

  value = +value
  if (!value && value != 0)
    return alert('Введите число')

  alert('Температура воздуха – ' + value + ' градусов')
})