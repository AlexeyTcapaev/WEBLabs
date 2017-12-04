import "./bom_name.styl"

window.status = "\u041D\u0430\u0447\u0430\u043B\u043E \u0440\u0430\u0431\u043E\u0442\u044B"

let header = document.querySelector('header')

header.innerHTML = `
    <h1>Произвольный загаловок</h1>
    <h2>Документ изменялся последний раз: ${document.lastModified}</h2>
`
document.querySelector('#window').addEventListener('click', () => {
  alert(window.status)
  window.status = window.status.split("").reverse().join("")
})

document.querySelector('#navigator').addEventListener('click', () => {
  alert(navigator.userAgent)
})

document.querySelector('#location').addEventListener('click', () => {
  let res = prompt("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043C\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F", "\u0412\u0430\u0441\u044F")
  if(res){
    alert(res + ", \u0430\u0434\u0440\u0435\u0441: " + window.location)
  }else {
    alert("\u0410\u0434\u0440\u0435\u0441: " + window.location)
  }
})

document.querySelector('#screen').addEventListener('click', () => {
  let str = "height: " + window.innerHeight + " width: " + window.innerWidth
  if(confirm(str)){
    alert(str)
  }
})

document.querySelector("h1").addEventListener('mouseover',() => {
  window.status = "\u0427\u0438\u0442\u0430\u0439 \u0442\u0435\u043A\u0441\u0442!"
})

document.querySelector("h1").addEventListener('mouseout',() => {
  window.status = "\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0435\u043D\u0438\u0435 \u0440\u0430\u0431\u043E\u0442\u044B"
})