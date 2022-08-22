function prueba(p1: string, p2: string = "hola mundo",p3?: string){
    console.log("cadena 1: " + p1);
    console.log("cadena 2: " + p2);
    console.log("cadena 3: " + p3);

}

prueba("Matias");
prueba("Hola", "Mati", "Godoy");