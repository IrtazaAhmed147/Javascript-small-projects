let openBtn = document.querySelector('#Bars')
let close = document.querySelector('#close')
let main = document.querySelector('main')
let resNav = document.querySelector('.resNav')
let backgroundforModal = document.querySelector('.backgroundforModal')


openBtn.addEventListener('click', function () {

  resNav.classList.toggle('isRes')
  main.classList.toggle('mainActive')
  backgroundforModal.classList.toggle('backgroundforModalActive')


})

close.addEventListener('click', function () {
  resNav.classList.toggle('isRes')
  main.classList.toggle('mainActive')
  backgroundforModal.classList.toggle('backgroundforModalActive')
})

window.addEventListener('resize', function () {
  if (window.innerWidth > 700) {
    if (!resNav.classList.contains('isRes')) {
      resNav.classList.add('isRes');
      backgroundforModal.classList.add('backgroundforModalActive')
      main.classList.remove('mainActive')
    }
  }
});