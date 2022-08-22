var Persona = /** @class */ (function () {
    function Persona(howManyKm) {
        this.km = howManyKm;
    }
    Persona.prototype.caminar = function () {
        console.log('estoy caminando' + this.km);
    };
    return Persona;
}());
var objectPerson = new Persona(33);
objectPerson.caminar();
