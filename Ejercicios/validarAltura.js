"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var alturaPermitida = 130;
var alturaPersona = rls.questionInt("para ingresar a la montaña rusa debe medir:");
if (alturaPermitida >= 130) {
    console.log("ustede puede ingresar al juego");
}
else {
    console.log("usted no puede ingresar porque no llega a la altura permitida");
}
