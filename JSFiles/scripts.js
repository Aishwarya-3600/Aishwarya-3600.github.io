$(document).ready(function(){
var tB = document.getElementsByClassName('toggle-button')[0]
var nL = document.getElementsByClassName('navbar-links')[0]
console.log('hello')
console.log('2')
tB.addEventListener('click',() => {
  nL.classList.toggle('active')
  console.log('1')
})
})

