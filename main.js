const toggleBtn = document.querySelector('.icon');
const menu = document.querySelector('.menu')

toggleBtn.addEventListener('click', ()=> {
    menu.classList.toggle('active');
});