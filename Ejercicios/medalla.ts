/*
Desarrolle un algoritmo que dados tres
números determine cuál es el mayor de los
tres
*/
import * as rls from "readline-sync";

let n1: number = rls.questionFloat('ingresar el primer numero: ');
let n2: number = rls.questionFloat('ingresar el segundo numero: ');
let n3: number = rls.questionFloat('ingresar el tercer numero: ');

if(n1 > n2 && n1 >n3) {
    console.log('El numero mayor es', n1)
}
else if(n2 > n1 && n2 > n3) {
    console.log('el numero mayor es', n2)
}
else if(n3 > n1 && n3 > 2) {
    console.log('el numero mayor es', n3)
}


