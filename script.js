const menuToggle = document.querySelector('.toggle');
const mainContent = document.querySelector('.main-content');

menuToggle.addEventListener('click', () =>{
    menuToggle.classList.toggle('active');
    mainContent.classList.toggle('active');
})