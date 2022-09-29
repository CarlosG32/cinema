export function pintarSillas(asientos){
    
    let cinema = document.getElementById("salaCinema")

// recorrer los asientos y aplicar traversing
asientos.forEach(function(hilera){

    let fila = document.createElement("div")
    fila.classList.add("row")

    hilera.forEach(function(asiento){
        
        let colomna = document.createElement("div")
        colomna.classList.add("col-3")

        let fotoSilla = document.createElement("img")
        fotoSilla.classList.add("img-fluid", "w-100")
        fotoSilla.setAttribute("id",asiento.id)

        if(asiento.estado==0){
            fotoSilla.src="../../assets/img/seat.png"
        }else if (asiento.estado==2){
            fotoSilla.src="../../assets/img/seat roja.png"
        }
            

        

        // padres e hijos
        colomna.appendChild(fotoSilla)
        fila.appendChild(colomna)


    })

    cinema.appendChild(fila)

})

}