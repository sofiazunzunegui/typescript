/*
Desarrolle un algoritmo que dados tres
números determine cuál es el mayor de los
tres
*/
import * as rls from "readline-sync";

let n1: number = rls.questionFloat('ingresar el primer numero: ');
let n2: number = rls.questionFloat('ingresar el segundo numero: ');
let n3: number = rls.questionFloat('ingresar el tercer numero: ');
let mayor = n1;
if (n2 > mayor) {
    mayor = n2;
}
if (n3 > mayor) {
    mayor = n3;
}
console.log('El numero mayor es', mayor)
