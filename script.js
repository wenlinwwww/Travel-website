
document.addEventListener('DOMContentLoaded', function () {
    const menu = document.querySelector(".menu");
    const navigation = document.querySelector("header .navigation");


    menu.addEventListener('click', function () {
        menu.classList.toggle('active');
        navigation.classList.toggle('active');
    });
});
