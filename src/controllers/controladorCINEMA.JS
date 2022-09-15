//declarando arreglos en js
// UN ARREGLO ES UNA VARIABLE ESPECIAL QUE ME PERMITE ALMACENAR
//MULTIPLES DATOS EN UNA SOLA VARIABLE


/*let numeros=[5,8,12,10] //todos los datos que van en un arreglo se separa con ,
console.log(numeros[0]) //un arreglo es un conjunto de elementos

let nombres=Array("juan","sara", "carlos", "laura")
console.log(nombres[2])

let PersonaConViruelaDelMono=[true,true,false,false]

// un objeto es una variable especial
// que permite que yo almacene multiples datos
// en una sola variable
let persona={
    nombre:"juan",
    profesion:"ingeniero",
    edad:33,
    hinchaDelMejor:true,
    materiasDictadas:["web2","avanzadas","nuevas tecnologias"],
    equiposFavoritos: ["nacional","liverpool"],
    comida:{
        nombre:"bandeja paisa",
        precio:25000
    }
}
console.log(persona)
console.log(persona.equiposFavoritos[2])
console.log(persona.comida[0])
*/

import {peliculas} from '../helper/baseDatos.js'


import {pintarPeliculas} from '../helper/pintarPeliculas.js'


//RECORRIENDO UN ARREGLO EN JS

 let fila=document.getElementById("fila")

//llamo a la funcion pintar peliculas
pintarPeliculas(peliculas)


//DETECTANDO SELECCION DE UNA PELICULA
let peliculaselecionada={}
fila.addEventListener("click", function(evento){
 
   
peliculaselecionada.poster=evento.target.parentElement.querySelector('img').src //imagen
peliculaselecionada.nombre=evento.target.parentElement.querySelector('h3').textContent //nombre
peliculaselecionada.genero=evento.target.parentElement.querySelector('h5').textContent //genero
peliculaselecionada.idioma=evento.target.parentElement.querySelector('h6').textContent //idioma
peliculaselecionada.sinopsis=evento.target.parentElement.querySelector('p').textContent //sinopsis

console.log(peliculaselecionada)

//llamando a la memoria del navegador

localStorage.setItem("peliculaSeleccionada",JSON.stringify(peliculaselecionada))


window.location.href="./src/views/ampliarinfoPelicula.html"

})
