import * as rls from "readline-sync";
let base: number = rls.questionInt('ingrese base: ');
let exponente: number = rls.questionInt('ingrese exponente: ');

function calcularPotencia(base: number,exponente:number){
   return base**exponente;
}
let potencia: number = calcularPotencia(base,exponente);

console.log('la potencia del num ',base,'y de exponente num ',exponente, 'es ',potencia);



