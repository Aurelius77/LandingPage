
const clearBtn = document.getElementById('feature-arrow-up')
const clearBtnTwo = document.getElementById('company-arrow-up')
const dropBtn = document.getElementById('feature-arrow-down')
const dropBtnTwo = document.getElementById('company-arrow-down')
const featureLinks = document.getElementById('dropdown-feature')
const companyLinks = document.getElementById('dropdown-company')



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




const modal = document.getElementById('modal')
const openBtn = document.getElementById('menu')
const closeBtn = document.getElementById('cancel-btn')

openBtn.addEventListener('click', function(){
  modal.style.width = '50%'
})

closeBtn.addEventListener('click', function(){
  modal.style.width = '0'
})
