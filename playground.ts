import * as rls from "readline-sync";


const vuelta1: number = rls.questionFloat("ingrese el tiempo vuelta 1: ");
const vuelta2: number = rls.questionFloat("ingrese el tiempo vuelta 2: ");
const vuelta3: number = rls.questionFloat("ingrese el tiempo vuelta 3: ");
const vuelta4: number = rls.questionFloat("ingrese el tiempo vuelta 4: ");
const sumaVueltas: number = vuelta1+vuelta2+vuelta3+vuelta4;
console.log("tiempo total:",sumaVueltas);
console.log("promedio de vuelta:",sumaVueltas/4);


