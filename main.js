var menu_icon = document.querySelector(".menu_icon")
var slider = document.querySelector(".slider")
var container = document.querySelector(".container")
menu_icon.onclick = function(){
    slider.classList.toggle("small-slider")
    container.classList.toggle("larg_container")
}