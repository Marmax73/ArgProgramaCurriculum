import CvPresentacion from './cv_presentacion.js'

const d = document




export default function boton(boton) {
    d.addEventListener('click', e => {
       if(e.target.matches(boton)){
            
        let home = import('./homePresentation.js')
        
        d.body.remove(home)
        let cVPortada = new CvPresentacion()
         cVPortada.cvPortada()
        
        // document.body.style.background = "#f3f7f5"
        
      }
   })
}
        
        