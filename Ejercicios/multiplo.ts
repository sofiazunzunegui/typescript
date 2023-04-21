import * as rls from "readline-sync";
let num1:number =rls.questionInt ('ingrese el primer n ');
let num2:number =rls.questionInt ('ingrese el segundo n ');

function esMultiplo(num1:number, num2:number){
    let esMultiplo: boolean = (num1 % num2) == 0
    return esMultiplo
}
console.log(esMultiplo(num1, num2));
