/*Calcular las calificaciones de un grupo de alumnos, donde la nota
final de cada alumno se calcula según el siguiente criterio:
• la parte práctica vale el 10%
• la parte de problemas vale el 50%
• la parte teórica el 40%

Se debe ingresar el nombre del alumno y sus tres notas, se
escribirá el resultado y se volverá a pedir los datos del siguiente
alumno hasta que el nombre sea una cadena vacía

Las notas deben estar entre 0 y 10 (si no lo están, no imprimirá las
notas, mostrará un mensaje de error y continuará con otro alumno)*/
import * as rls from "readline-sync";
let nombreAlumno: string = rls.question('ingrese el nombre del alumno: ');
let notaPartePractica: number = 0;
let notaParteProblemas: number = 0;
let notaParteTeorica: number = 0;
let notaFinal: number = 0;
while (nombreAlumno != ''){
    notaPartePractica = rls.questionInt('ingrese nota parte practica: ');
    notaParteProblemas = rls.questionInt('ingrese nota parte problemas: ');
    notaParteTeorica = rls.questionInt('ingrese nota parte teorica: ');
    if((notaPartePractica >10 || notaPartePractica <0) ||
     (notaParteProblemas >10 || notaParteProblemas <0) ||
     (notaParteTeorica >10 || notaParteTeorica <0)){
        console.log('error al ingresar nota');
    }else{
        notaFinal= notaPartePractica*0.1 + notaParteProblemas*0.5 + notaParteTeorica*0.4
        console.log('nota final: ',notaFinal);
    }   
    nombreAlumno = rls.question('ingrese el nombre del alumno: ');
    
}
