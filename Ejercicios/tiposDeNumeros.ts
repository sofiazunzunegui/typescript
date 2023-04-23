import * as rls from "readline-sync";
import { TLSSocket } from "tls";
// Almacene en un arreglo de dimensión N números (la
//   cantidad es ingresada por el usuario)
//  • Muestre cuántos números son positivos, cuántos son
//   negativos y cuántos ceros hay

//   Ejemplo:
//   v = 0, -7, -9, 1, 0, 0
//   La salida es: 1 positivos, 2 negativos y 3 ceros

let positivo: number = 0;
let negativo: number = 0;
let cero: number = 0

let dimensionDeseada: number = rls.questionInt('ingrese la dimension que desea ');
let arreglo: number[] = new Array(dimensionDeseada);
for (let i: number = 0; i < arreglo.length; i++) {
    let num: number = rls.questionInt('ingrese el numero que desea ');
    arreglo[i] = num

    if (num < 0) {
        negativo++
    }
    else if (num > 0) {
        positivo++
    } else {
        cero++
    }

}
console.log('la cantidad de num positivos son ',positivo,'los num negativos son ',negativo,'y los ceros son ',cero);
