import * as rls from "readline-sync";
const cantidadAlumnos = rls.questionInt('¿Cuántos alumnos desea ingresar? ');
type Alumno = [string, number, number, number];

const alumnos :Alumno[] = [];

for (let i = 0; i < cantidadAlumnos; i++) {
  const nombre = rls.question(`Ingresa el nombre del alumno ${i + 1}: `);
  const notaTrimestre1 = rls.questionInt(`Ingresa la nota del primer trimestre del alumno ${nombre}: `);
  const notaTrimestre2 = rls.questionInt(`Ingresa la nota del segundo trimestre del alumno ${nombre}: `);
  const notaTrimestre3 = rls.questionInt(`Ingresa la nota del tercer trimestre del alumno ${nombre}: `);

  alumnos.push([nombre, notaTrimestre1, notaTrimestre2, notaTrimestre3]);
}

const nombreAlumno = rls.question('Ingresa el nombre del alumno del cual desea conocer el promedio anual: ');



function  retornarPromedioAlumno(alumnos:Alumno[],nombre:string){
    for (let index = 0; index < alumnos.length; index++) {
        if (alumnos[index][0] === nombre){
            const promedio = calcularPromedio(alumnos[index][1],alumnos[index][2],alumnos[index][3]);
            return console.log('El promedio del año de ',nombre,' es',promedio);
        }
    }
    return console.log('Ese alumno no fue cargado anteriormente!');

}

function calcularPromedio(nota1:number,nota2:number,nota3:number){
    const promedio = (nota1 + nota2 + nota3) / 3;
    return promedio;
}


retornarPromedioAlumno(alumnos,nombreAlumno);