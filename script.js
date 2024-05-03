const btnMobile = document.querySelector('.nav__menu__btn-mobile');

btnMobile.addEventListener('click', handleOpenMenu);

function handleOpenMenu() {
    const menuList = document.querySelector('.menu__list')
    btnMobile.classList.toggle('active');
    menuList.classList.toggle('active');
};