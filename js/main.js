var burgerBtn = document.querySelector(".menu__burger")
var menu = document.querySelector(".menu")


burgerBtn.addEventListener("click", (evt) => {
    menu.classList.toggle("menu--open")
}) 
