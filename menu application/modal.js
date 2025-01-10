let modalBtn = document.querySelectorAll('.modalBtn')
let closeBtn = document.getElementById('closeBtn')
let background = document.querySelector('.background')
let mainBackground = document.querySelector('main')

modalBtn.forEach((btn)=> {
  btn.addEventListener('click', function() {
    background.classList.toggle('isActive')
    mainBackground.classList.toggle('mainActive')

})  
})
closeBtn.addEventListener('click', function() {
    background.classList.toggle('isActive')
    mainBackground.classList.toggle('mainActive')
})