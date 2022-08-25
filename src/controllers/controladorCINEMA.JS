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

let peliculas=[
    {
        nombre:"avatar",
        genero:"ciencia ficcion",
        duracion:220,
        poster:"https://firebasestorage.googleapis.com/v0/b/storage-e6188.appspot.com/o/AVATAR.jpg?alt=media&token=8b4c49f4-f7cc-455d-9211-714c25134392", //a2qui va la foto de firebase
        sinopsis:"",//poner la descripcion
        clasificacion:"General",
        idioma:"Dob Esp"
    },

    {
        nombre:"Bohemian Rhapsody",
        genero:"Drama",
        duracion:105,
        poster:"https://firebasestorage.googleapis.com/v0/b/storage-e6188.appspot.com/o/Bohemian-Rhapsody-poster-2.jpg?alt=media&token=4c35139b-d9c1-4e4d-aeac-50325f4d58be", //a2qui va la foto de firebase
        sinopsis:"",//poner la descripcion
        clasificacion:"+18",
        idioma:"Ing Subtitulada"
    },

    {
        nombre:"Avengers: Engame",
        genero:"ciencia ficcion",
        duracion:125,
        poster:"https://firebasestorage.googleapis.com/v0/b/storage-e6188.appspot.com/o/81ai6zx6eXL._AC_SL1304_.jpg?alt=media&token=80c2e912-45c5-4825-9a68-193b0b1e69bb", //a2qui va la foto de firebase
        sinopsis:"",//poner la descripcion
        clasificacion:"General",
        idioma:"Dob Esp"
    },

    {
        nombre:"Código Enigma",
        genero:"Drama",
        duracion:90,
        poster:"https://firebasestorage.googleapis.com/v0/b/storage-e6188.appspot.com/o/3702_800x1182.jpg?alt=media&token=1c822035-7eac-4a33-8094-9ce7097b832b", //a2qui va la foto de firebase
        sinopsis:"",//poner la descripcion
        clasificacion:"+18",
        idioma:"Ing Subtitulada"
    },

    {
        nombre:"Depredador",
        genero:"ciencia ficcion",
        duracion:150,
        poster:"", //a2qui va la foto de firebase
        sinopsis:"https://firebasestorage.googleapis.com/v0/b/storage-e6188.appspot.com/o/beec628fc8f591064486849a369c6b47.jpg?alt=media&token=c93716b1-99e0-452e-adba-950ac86a5296",//poner la descripcion
        clasificacion:"General",
        idioma:"Dob Esp"
    },

    {
        nombre:"Interstelar",
        genero:"ciencia ficcion",
        duracion:135,
        poster:"https://firebasestorage.googleapis.com/v0/b/storage-e6188.appspot.com/o/111c5c9ad99661af2d80e38948cf29d8.jpg?alt=media&token=b97e01e7-29f4-49e8-8dfc-b9f2466d89ff", //a2qui va la foto de firebase
        sinopsis:"",//poner la descripcion
        clasificacion:"General",
        idioma:"Ing Subtitulada"
    },

    {
        nombre:"1917",
        genero:"Drama",
        duracion:120,
        poster:"", //a2qui va la foto de firebase
        sinopsis:"https://firebasestorage.googleapis.com/v0/b/storage-e6188.appspot.com/o/1917.jpg?alt=media&token=7adb521a-21d5-4e12-b1b7-04a331f117f7",//poner la descripcion
        clasificacion:"+18",
        idioma:"Ing Subtitulada"
    },

    {
        nombre:"Spiderman, sin camino a casa",
        genero:"ciencia ficcion",
        duracion:135,
        poster:"https://firebasestorage.googleapis.com/v0/b/storage-e6188.appspot.com/o/Faxjhu0XwAEg0Ju.jpg?alt=media&token=5551e3f5-2106-40f7-826b-e1e258f44cb1", //a2qui va la foto de firebase
        sinopsis:"",//poner la descripcion
        clasificacion:"General",
        idioma:"Esp"
    },

    {
        nombre:"Crossroads",
        genero:"Drama",
        duracion:75,
        poster:"https://firebasestorage.googleapis.com/v0/b/storage-e6188.appspot.com/o/MV5BMDg3MmVmNmUtMzI4NC00NDY1LTg5YTAtMDJiODJlNmM0MTAwXkEyXkFqcGdeQXVyNjc3MjQzNTI%40._V1_.jpg?alt=media&token=ce4e18f6-31cd-4c5c-a234-5bf80b8aca53", //a2qui va la foto de firebase
        sinopsis:"",//poner la descripcion
        clasificacion:"General",
        idioma:"Ing Subtitulada"
    },

    {
        nombre:"Pulp Fiction",
        genero:"Drama",
        duracion:95,
        poster:"https://firebasestorage.googleapis.com/v0/b/storage-e6188.appspot.com/o/a068310f5671db51c6f7e7cc70d889c4.jpg?alt=media&token=1593ce10-46cc-4aee-bdb4-7d30ec817200", //a2qui va la foto de firebase
        sinopsis:"",//poner la descripcion
        clasificacion:"+18",
        idioma:"Esp"
    }

    
]


//RECORRIENDO UN ARREGLO EN JS

peliculas.forEach(function(pelicula){
    console.log(pelicula)
    console.log(pelicula.nombre)
    console.log(pelicula.genero)
    console.log(pelicula.duracion)
    console.log(pelicula.poster)
    console.log(pelicula.sinopsis)
    console.log(pelicula.clasificacion)
    console.log(pelicula.idioma)
})

