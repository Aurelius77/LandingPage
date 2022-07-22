
/*

<div class="attribution">
  Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
  Coded by <a href="#">Your Name Here</a>.
</div>

*/
const clearBtn = document.querySelectorAll('#feature-arrow-up')
const clearBtnTwo = document.querySelectorAll('#company-arrow-up')
const dropBtn = document.querySelectorAll('#feature-arrow-down')
const dropBtnTwo = document.querySelectorAll('#company-arrow-down')
const featureLinks = document.querySelector('#dropdown-feature')
const companyLinks = document.querySelector('#dropdown-company')



dropBtn.addEventListener('click', function(){
    featureLinks.style.display  = 'block'
    dropBtn.style.display = 'none'
    clearBtn.style.display = 'inline-block'
  
})


clearBtn.addEventListener('click', function(){
    featureLinks.style.display  = 'none'
    dropBtn.style.display = 'inline-block'
    clearBtn.style.display = 'none'
  
})


dropBtnTwo.addEventListener('click', function(){
    companyLinks.style.display  = 'block'
    dropBtnTwo.style.display = 'none'
    clearBtnTwo.style.display = 'inline-block'
  
})

clearBtnTwo.addEventListener('click', function(){
    companyLinks.style.display  = 'none'
    dropBtnTwo.style.display = 'inline-block'
    clearBtnTwo.style.display = 'none'
  
})


//Mobile side
const menu = document.getElementById('mobile-menu')

function closeBtn(){
  menu.style.display = 'block'
  
}



