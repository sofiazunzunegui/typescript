import * as rls from "readline-sync";

let llegoColectivo: string = rls.question('¿llego el colectivo?');

while(llegoColectivo == "N"){
    console.log("sigo esperando");
    llegoColectivo = rls.question('¿Ya llego el colectivo?');
}
console.log('llego!!');
