import * as rls from "readline-sync";

const alturaPermitida: number = 1.30;
const alturaPersona: number = rls.questionFloat("ingrese su altura:");

if (alturaPersona >= alturaPermitida) {
    console.log("usted puede ingresar al juego");
}
else {
    console.log("usted no puede ingresar porque no llega a la altura permitida");
}


