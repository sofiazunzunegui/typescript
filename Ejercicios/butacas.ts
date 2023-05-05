const butacasArreglo:boolean[] = [true,false,true,true,false,true,true,true,false,true,false,false,false,true,true];

function obtenerButacasLibres(arregloButacasActual:boolean[]){
    let libres:number = 0;
    for (let index = 0; index < arregloButacasActual.length; index++) {
         if (!arregloButacasActual[index]) 
            libres ++; 
        
    }
    return libres;
}

const butacasLibres:number = obtenerButacasLibres(butacasArreglo);
console.log('En esta fila de asientos existen', butacasLibres, 'libres para ser ocupadas!');