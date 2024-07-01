document.addEventListener ("DOMContentLoaded", WaitDOM )
function WaitDOM() {
var box = document.getElementById("color-box")
var button = document.getElementById("change-color-btn")
let interval ="0123456789ABCDEF"
function getRandomColor() {
    var code ="#" 
for (let i=0 ; i<6 ; i++) {
code += interval[Math.floor(Math.random()*16)]
}
title.innerHTML = code
return code
}
button.addEventListener("click" , color)
function color() {
box.style.backgroundColor = getRandomColor();
}
title = document.querySelector('span')
}

