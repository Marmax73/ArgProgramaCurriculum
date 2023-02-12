const d = document

export default function boton(boton) {
 d.addEventListener('click', e => {
    if(e.target.matches(boton)){
     // document.body.style.background = "#f3f7f5"
     let div = document.createElement('div')
     div.innerHTML = `<h3>Desde el div</h3>`

     div.style.background = "yellow"
     div.style.width = "80%"
     div.style.border = "solid dark-gray"
     document.body.insertAdjacentElement('beforeend',div)
    }
 })
}

d.addEventListener('DOMContentLoaded', e => {
   boton('button')

})