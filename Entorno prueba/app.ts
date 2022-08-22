class Persona {
    nombre: string;
    apellido: string;
    edad: number;
    km: number;

    caminar() {
        console.log('estoy caminando' + this.km);
    }

    constructor(howManyKm: number){
        this.km = howManyKm;
    }
}

let objectPerson = new Persona(33);
objectPerson.caminar();