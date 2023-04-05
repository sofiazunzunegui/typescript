import * as rls from "readline-sync";

const loginUser: string = 'juan';
const loginPassword: string = 'claveJuan';

const enterUser: string = rls.question("ingrese su nombre de usuario:");
const enterPassword: string = rls.question("ingrese su password:");

if (enterUser == loginUser && enterPassword == loginPassword) {
    console.log("bienvenido al sistema!!!");
}
else {
    if (enterUser != loginUser) {
        console.log("Usuario incorrecto");
    }
    else {
        console.log("La contraseña es incorrecta");
    }
}