import * as rls from "readline-sync";
let num: number = rls.questionInt('ingrese un num ');

function cantidadDivisores(num:number){
    let cantidadDivisores: number = 0
    for (let i = 0; i <= num; i++){
        if(esMultiplo(num,i)){
        cantidadDivisores++
        }
    }
     return cantidadDivisores
}

function esMultiplo(num1:number, num2:number){
    let esMultiplo: boolean = (num1 % num2) == 0
    return esMultiplo
}
console.log('la cantidad de divisores del num ingresado es ',cantidadDivisores(num));
