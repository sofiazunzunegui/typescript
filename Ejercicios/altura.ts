/*•Volvamos a implementar el proceso que calcula
el área de un rectángulo pero para cualquier
base o altura
• El usuario debe ingresar la base y altura por teclado
• El área debe guardarse en una variable
• El resultado debe ser mostrado por pantalla*/
import * as rls from "readline-sync";
let altura: number = rls.questionInt("ingrese altura");
let base: number = rls.questionInt("ingrese base");
let area: number = base * altura;
console.log('el area es: ',area);

