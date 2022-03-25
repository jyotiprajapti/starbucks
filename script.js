const btn = document.getElementById('menu-btn')

const nsv = document.getElementById('menu')

function navToggle(){
    btn.classList.toggle('open')
    navToggle.classList.toggle('hidden')
    document.body.classList.toggle('no-scrol')
}

btn.addEventListener('click', navToggle)