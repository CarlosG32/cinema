// preguntando por un dato que está almacenado en memoria

let datosPeliculaSeleccionada = JSON.parse(localStorage.getItem("peliculaSeleccionada"))

console.log(datosPeliculaSeleccionada)

let poster = datosPeliculaSeleccionada.poster
let nombre = datosPeliculaSeleccionada.nombre
let genero = datosPeliculaSeleccionada.genero
let idioma = datosPeliculaSeleccionada.idioma
let sinopsis = datosPeliculaSeleccionada.sinopsis
let clasificacion = datosPeliculaSeleccionada.clasificacion


//cargando datos
let foto = document.getElementById("foto")
foto.src=poster 

let titulo = document.getElementById("titulo")
titulo.textContent = nombre

let generoPelicula = document.getElementById("genero")
generoPelicula.textContent = genero

let idiomaPelicula = document.getElementById("idioma")
idiomaPelicula.textContent = idioma

let sinopsisPelicula = document.getElementById("sinopsis")
sinopsisPelicula.textContent = sinopsis

let clasificacionPelicula = document.getElementById("clasificacion")
clasificacionPelicula.textContent = clasificacion