export function pintarPeliculas(peliculas){

    let fila=document.getElementById("fila")

    peliculas.forEach(function(pelicula){
        
    
        //TRAVERSING (CREAR ETIQUETAS DE HTML EN JAVASCRIP)
    
        //1. creamos una columna para cada pelicula
        let columna=document.createElement("div")
        columna.classList.add("col")
    
         //2. creamos una targeta para cada pelicula
         let tarjeta = document.createElement("div")
         tarjeta.classList.add("card","h-100")
    
         //3. creamos una foto pára cada pelicula
         let poster=document.createElement("img")
         poster.classList.add("card-img-top")
         poster.src = pelicula.poster
    
         
    
         //4. creamos el nombre de la pelicula
         let nombre=document.createElement("h3")
         nombre.classList.add("text-center")
         nombre.classList.add("fw-bold")
         nombre.classList.add('card-title')
         nombre.textContent = pelicula.nombre
    
         //5, creamos el genero
         let genero=document.createElement("h5")
         genero.classList.add("text-start")
         genero.classList.add("fw-semibold")
         genero.textContent = "genero: " + pelicula.genero
    
         //6. creamos idioma
         let idioma=document.createElement("h6")
         idioma.classList.add("fw-semibold")
         idioma.textContent = "Idioma: " + pelicula.idioma
    
         //7. creamos la sipnosis
         let sipnosis=document.createElement("p")
         sipnosis.classList.add("d-none")
         sipnosis.textContent = pelicula.sipnosis

         //8. creamos la clasificacion
         let clasificacion=document.createElement("h7")
         clasificacion.classList.add("fst-italic")
         clasificacion.textContent = "clasificacion: " + pelicula.clasificacion
    
    
    
         //padres e hijos
         tarjeta.appendChild(poster)
         tarjeta.appendChild(nombre)
         tarjeta.appendChild(genero)
         tarjeta.appendChild(idioma)
         tarjeta.appendChild(sipnosis)
         tarjeta.appendChild(clasificacion)
        
         columna.appendChild(tarjeta)
         fila.appendChild(columna)
    
    
    
    
    
    })
    
}