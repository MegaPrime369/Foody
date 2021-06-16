const ToggleButton = document.getElementsByClassName('icon')[0]
const right = document.getElementsByClassName('right')[0]
const left = document.getElementsByClassName('items')[0]


ToggleButton.addEventListener('click', ()=>{
    left.classList.toggle('active')
    right.classList.toggle('active')
})