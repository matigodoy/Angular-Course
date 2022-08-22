let mipromesa = new Promise( function(resolve:any, reject:any) {
    //resolve();
    reject();
});

mipromesa.then(function() {
    console.log('la operación de la promesa finalizó con éxito');
}, function() {
    console.log('la operación de la promesa finalizó con error');
});