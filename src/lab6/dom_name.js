import "./dom_name.styl"

let papers = [...document.querySelectorAll(".papers p")]

papers[0].addEventListener("mouseover", () => {
  papers[0].classList.add("first")
})

papers[0].addEventListener("mouseout", () => {
  papers[0].classList.remove("first")
})

document.querySelector("#format").addEventListener("click", () => {
  papers[1].classList.add("second")
})

document.querySelector("#cancel").addEventListener("click", () => {
  papers[1].classList.remove("second")
})

papers[2].addEventListener("mouseover", () => {
  papers[2].classList.add("third")
})

papers[2].addEventListener("mouseout", () => {
  papers[2].classList.remove("third")
})

let cels = [...document.querySelectorAll("table td")]
cels.forEach(el => {
  el.addEventListener("mouseover", e => e.target.classList.toggle("gray"))
  el.addEventListener("mouseout", e => e.target.classList.toggle("gray"))
})

let images = [...document.querySelectorAll(".images img")]

document.querySelector("#invisible").addEventListener('click', () => {
  images[1].style.opacity = 0
})

document.querySelector("#visible").addEventListener('click', () => {
  images[1].style.opacity = 1
})

document.querySelector("#switch").addEventListener('click', () => {
  images[0].classList.toggle("first")
  images[0].classList.toggle("third")
  images[2].classList.toggle("first")
  images[2].classList.toggle("third")
})