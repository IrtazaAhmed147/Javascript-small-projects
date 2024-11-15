let openBtn = document.querySelector('#Bars')
let close = document.querySelector('#close')
let resNav = document.querySelector('.resNav')


openBtn.addEventListener('click', function() {
    
    resNav.classList.toggle('isRes')
    
})

close.addEventListener('click', function(){
    resNav.classList.toggle('isRes')
})

window.addEventListener('resize', function () {
    if (window.innerWidth > 700) {
      if (!resNav.classList.contains('isRes')) {
        resNav.classList.add('isRes');
      }
    }
  });