

// Página inicial
  import CvPresentacion from "./cv_presentacion"
   export default function Home(){

   const bienvenida = document.createElement("div")
           // const homeContainer = d.createElement('div')
          bienvenida.innerHTML = `
          <col-md-4>
              <a href="https://img.freepik.com/foto-gratis/joven-confiado_1098-20868.jpg"></a>
            </col-md-4>
              <col-md-4></col-md-4>
          ` 
       
        document.body.appendChild(bienvenida)
   }

   

    

