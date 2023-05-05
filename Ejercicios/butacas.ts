
// Diseñar un algoritmo que recorra las
// butacas de una sala de cine y determine
// cuántas butacas desocupadas hay
// • Suponga que para modelar este
// problema, se utiliza un arreglo con
// valores lógicos
// • La presencia de un valor verdadero (true) en
// el arreglo indica que la butaca está ocupada
// • La presencia de un valor falso (false) en el
// arreglo indica que la butaca está desocupada


//declaro un arreglo boolean de 15 posiciones para el ejemplo,
// en este arreglo hay 6 lugares libres teniendo en cuenta que el false indica que no esta ocupado
const butacasArreglo:boolean[] = [true,false,true,true,false,true,true,true,false,true,false,false,false,true,true];

//declaro esta funcion en donde recibo un arreglo booleano para poder evaluar los lugares disponibles del mismo
function obtenerButacasLibres(arregloButacasActual:boolean[]){
    // declaro una variable del tipo number llamada libres que se incrementara solo si el arreglo en la posicion que estoy consultando es false
    //ya que si es false es que esta libre
    let libres:number = 0;
    for (let index = 0; index < arregloButacasActual.length; index++) {
         if (!arregloButacasActual[index]) //pregunto si es false el arreglo en la posicion
            libres ++; //sumo una libre
        
    }
    return libres;
}

const butacasLibres:number = obtenerButacasLibres(butacasArreglo);
console.log('En esta fila de asientos existen', butacasLibres, 'libres para ser ocupadas!');