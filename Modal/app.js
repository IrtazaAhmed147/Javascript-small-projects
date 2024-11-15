let modalBtn = document.getElementById('modalBtn')
let closeBtn = document.getElementById('closeBtn')
let background = document.querySelector('.background')

modalBtn.addEventListener('click', function() {
    background.classList.toggle('isActive')
})
closeBtn.addEventListener('click', function() {
    background.classList.toggle('isActive')
})