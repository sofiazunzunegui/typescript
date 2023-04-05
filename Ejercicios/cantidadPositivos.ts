/*
• Leer valores del usuario hasta que introduzca un 0
• El usuario puede introducir valores numéricos, tanto
positivos como negativos
• Contar la cantidad de valores introducidos que sean
mayores a 0 y el porcentaje de positivos respecto del total
*/
import * as rls from "readline-sync";
let cantidadPositivos = 0;
let cantidadTotalNumeros = 0; //almacenamos la cantidad total de numeros
let numero: number = rls.questionInt("Introduzca un numero positivo o negativo: ");
while (numero !== 0) {
   cantidadTotalNumeros++;
    if (numero > 0) {
    cantidadPositivos++;
    }
    numero = rls.questionInt("Introduzca un numero positivo o negativo: ");
  }
  
  console.log("El porcentaje de numeros positivos es:",(cantidadPositivos * 100)/cantidadTotalNumeros,"%", "Y la cantidad de positivos ingresados es:",
    cantidadPositivos );