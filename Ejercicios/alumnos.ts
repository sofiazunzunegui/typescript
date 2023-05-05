
// Desarrolle un algoritmo que
// permita cargar alumnos y sus
// notas en los tres trimestres
// • Se debe permitir obtener el
// promedio anual (es decir, de sus
// tres notas) de un alumno
// (ingresado por el usuario)
// • Luego de resolverlo, pensar en
// aprovechar métodos y discutir
// cómo representar la información

import * as rls from "readline-sync";



// Pedimos al usuario la cantidad de alumnos
const cantidadAlumnos = rls.questionInt('¿Cuántos alumnos desea ingresar? ');
type Alumno = [string, number, number, number];

// Creamos un array vacío para almacenar los nombres y las notas
const alumnos :Alumno[] = [];

// Pedimos al usuario el nombre y las notas de cada alumno
for (let i = 0; i < cantidadAlumnos; i++) {
  const nombre = rls.question(`Ingresa el nombre del alumno ${i + 1}: `);
  const notaTrimestre1 = rls.questionInt(`Ingresa la nota del primer trimestre del alumno ${nombre}: `);
  const notaTrimestre2 = rls.questionInt(`Ingresa la nota del segundo trimestre del alumno ${nombre}: `);
  const notaTrimestre3 = rls.questionInt(`Ingresa la nota del tercer trimestre del alumno ${nombre}: `);

  // Agrego el alumno al array
  alumnos.push([nombre, notaTrimestre1, notaTrimestre2, notaTrimestre3]);
}

// Pedimos al usuario el nombre del alumno del cual quiere calcular el promedio anual
const nombreAlumno = rls.question('Ingresa el nombre del alumno del cual desea conocer el promedio anual: ');



//esta funcion recibe un arreglo de alumnos y un nombre y retorna el promedio de ese alumno si es que existe
function  retornarPromedioAlumno(alumnos:Alumno[],nombre:string){
    for (let index = 0; index < alumnos.length; index++) {
        if (alumnos[index][0] === nombre){
            const promedio = calcularPromedio(alumnos[index][1],alumnos[index][2],alumnos[index][3]);
            return console.log('El promedio del año de ',nombre,' es',promedio);
        }
    }
    return console.log('Ese alumno no fue cargado anteriormente!');

}

//esta funciona recibe las 3 notas y calcula el promedio
function calcularPromedio(nota1:number,nota2:number,nota3:number){
    const promedio = (nota1 + nota2 + nota3) / 3;
    return promedio;
}


//llamos a la funcion retornar promedio alumno con el arreglo de alumnos que cargamos al principio
retornarPromedioAlumno(alumnos,nombreAlumno);