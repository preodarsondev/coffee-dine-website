// pre-loader
window.addEventListener('load', function () {
    document.querySelector('.pre-loader').style.display = "none";
})
//nav
document.querySelector('.navbtn').addEventListener('click', function () {
    document.querySelector('.nav-item').classList.toggle('nav-show')
})