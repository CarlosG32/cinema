import { pintarSillas } from "../helper/pintarSillas.js"

let asientos = [
    [{id:"a1", estado:2},{id:"a2", estado:2},{id:"a3", estado:0},{id:"a4", estado:0}],
    [{id:"b1", estado:0},{id:"b2", estado:0},{id:"b3", estado:0},{id:"b4", estado:0}],
    [{id:"c1", estado:0},{id:"c2", estado:0},{id:"c3", estado:0},{id:"c4", estado:0}]
]

// Pintar desde Js la sala de cine
let cinema = document.getElementById("salaCinema")

// recorrer los asientos y aplicar traversing
pintarSillas(asientos, cinema)

// evento de clic en la sala cinema
cinema.addEventListener("clic",function(evento){
    if(evento.target.tagName=="IMG"){
        let idAsientoSeleccionado=evento.target.id
        

        asientos.forEach(function(hilera){
            
            hilera.forEach(function(asieto){
                
                if(asieto.id==idAsientoSeleccionado){
                   
                    //encontré el asiento donde el usuario se quiere sentar
                    if(asieto.estado==0){
                        asieto.estado=1
                        evento.target.src="../../assets/img/seat verde.png"
                    }else if(asieto.estado==2){
                        asieto.estado==0
                        evento.target.src="../../assets/img/seat.png"
                    }

                }


            
            })
        })
    }
})
    