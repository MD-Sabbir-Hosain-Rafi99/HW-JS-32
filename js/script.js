let body = document.querySelector('body')
let oneDiv = document.querySelector('.one')
let twoDiv = document.querySelector('.two')
let threeDiv = document.querySelector('.three')
let fourDiv = document.querySelector('.four')
let fiveDiv = document.querySelector('.five')
let heading = document.querySelector('h1')
let heading2 = document.querySelector('h2')
oneDiv.addEventListener("click", function () {
    body.style.backgroundColor = "#686de0";
    oneDiv.style.border = "2px solid rgb(255, 255, 255)"
    heading.style.color = "white"
    heading2.innerText = "This is Purple Color"
    heading2.style.textAlign = "center"
    heading2.style.color = "white"
    heading2.style.fontSize = "80px"
})
twoDiv.addEventListener("click", function () {
    body.style.backgroundColor = "#be2edd";
    twoDiv.style.border = "2px solid rgb(255, 255, 255)"
    heading2.innerText = "This is LIGHT PINK Color"
    heading2.style.textAlign = "center"
    heading2.style.color = "white"
    heading2.style.fontSize = "80px"
})
threeDiv.addEventListener("click", function () {
    body.style.backgroundColor = "#badc58";
    threeDiv.style.border = "2px solid rgb(255, 255, 255)"
    heading2.innerText = "This is NEON Color"
    heading2.style.textAlign = "center"
    heading2.style.color = "white"
    heading2.style.fontSize = "80px"
})
fourDiv.addEventListener("click", function () {
    body.style.backgroundColor = "#22a6b3";
    fourDiv.style.border = "2px solid rgb(255, 255, 255)"
    heading2.innerText = "This is TEAL Color"
    heading2.style.textAlign = "center"
    heading2.style.color = "white"
    heading2.style.fontSize = "80px"
})
fiveDiv.addEventListener("click", function () {
    body.style.backgroundColor = "#f9ca24";
    fiveDiv.style.border = "2px solid rgb(255, 255, 255)"
    heading2.innerText = "This is YELLOW Color"
    heading2.style.textAlign = "center"
    heading2.style.color = "white"
    heading2.style.fontSize = "80px"
})

