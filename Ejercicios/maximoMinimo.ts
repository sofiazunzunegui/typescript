/* Diseñar un algoritmo que
lea números enteros hasta
teclear 0
• Determinar y mostrar el
máximo, el mínimo y la
media de todos los
números ingresados
• Pensar cuidadosamente
cómo debemos inicializar
las variables*/
import * as rls from "readline-sync";
let numero: number = rls.questionInt(
    "Introduzca un numero: "
  );
  let maximo: number = numero;
  let minimo: number = numero;
  let sumaDeNumerosIngresados: number = 0;
  let cantidadNumerosIngresados = 0;
  while (numero !== 0) {
    if (numero > maximo) {
      maximo = numero;
    }
    if (numero < minimo) {
      minimo = numero;
    }
    sumaDeNumerosIngresados = sumaDeNumerosIngresados + numero;
    cantidadNumerosIngresados++;
    numero = rls.questionInt("Introduzca un numero: ");
  }
  console.log("La media es: ",sumaDeNumerosIngresados/cantidadNumerosIngresados); //5
  console.log("El maximo es: ",maximo); //13
  console.log("El minimo es: ",minimo); //-5