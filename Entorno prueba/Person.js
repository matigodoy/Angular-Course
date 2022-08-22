"use strict";
exports.__esModule = true;
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(howManyKm) {
        this.km = howManyKm;
    }
    Persona.prototype.caminar = function () {
        console.log('estoy caminando' + this.km);
    };
    return Persona;
}());
exports.Persona = Persona;
