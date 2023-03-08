


const boton = document.getElementById('boton--collapse')
const listShow = document.getElementsByClassName('list__show')


    boton.onclick = () =>{
      boton.classList.add('colorBg')
      let heigth = 0;
      let menu = boton.nextElementSibling
      if(menu.clientHeight == '0'){
          heigth=menu.scrollHeight      
      }

      let styles = `${heigth}`
      menu.toggleAttribute(styles)
      
    }

// const botonToggle = function(){
//     let heigth = 0;
//     let menu = boton.nextElementSibling
//     if(menu.clientHeight == '0'){
//         heigth=menu.scrollHeight      
//     }
//     menu.style.heigth = `${heigth}px`;
// }

// boton.addEventListener('click', function(){
//      botonToggle()
// })