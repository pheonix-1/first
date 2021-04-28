const useList = document.querySelector('.use')
const downBtn = document.querySelector('.down')

downBtn.addEventListener('click', () => {
    useList.classList.toggle('active');
});