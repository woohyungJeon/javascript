const toggleBtn = document.querySelector('.navBar_toggleBtn');
const menu = document.querySelector('.navBar_menu');
const icons = document.querySelector('.navBar_icons');

toggleBtn.addEventListener('click', () =>{
    menu.classList.toggle('active');
    icons.classList.toggle('active');
})  