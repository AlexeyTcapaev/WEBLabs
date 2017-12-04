import './form3.styl'

let button = document.querySelector('.button')
let result = document.querySelector('.result')


button.addEventListener('click', () => {
  let value = document.querySelector('input.text').value
  let resultValue = 0
  if (value == '' || !value)
    return alert('Не введена фамилия')

  let radioButtons = [...document.querySelectorAll('.first-answer input')]
  let firstAnswer = ""
  radioButtons.forEach(e => {
    if(e.checked)
      firstAnswer = e.value
  })
  if(firstAnswer == "4")
    resultValue+=50


  radioButtons = [...document.querySelectorAll('.second-answer input')]
  let secondAnswer = ""
  radioButtons.forEach(e => {
    if(e.checked)
      secondAnswer = e.value
  })
  if(secondAnswer == "7")
    resultValue+=50

  result.innerHTML = "<h1>Здравствуйте "+value +"!</h1><h2>Ваш рейтинг:</h2><p>"+resultValue+"</p>"
})