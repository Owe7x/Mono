console.log('file 1');
const modalOppen = document.querySelector('.header__inner-burger')
const modalClose = document.querySelector('.burger-close')
const modal = document.querySelector('.modal-header')

modalOppen.addEventListener('click', () => {
    if(modal.classList.contains('block')) {
      modal.classList.add('none')
      modal.classList.remove('block')
    } else {
      modal.classList.add('block')
      modal.classList.remove('none')
    }
})
modalClose.addEventListener('click', () => {
    modal.style.display = "none"
})
