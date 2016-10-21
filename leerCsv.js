/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var fichero;
var coleccion = require('./coleccion');
var fs = require ('fs');
var fichero = process.argv[2];
if (!fichero){
    console.log('No existe fichero');
    process.exit(1);
}
fs.readFile(fichero,'UTF-8',function(err,data){
    if(err) throw err;
    var lineas = data.trim().split('\n');
    //console.log(lineas);
    var coleccionPersonas = [];
    for (var i=1;i<lineas.length-1;i++){
        var linea = lineas[i].split(',');
        var persona = {
            'nombre' : linea[0],
            'apellido': linea[1],
            'email' : linea[2],
            'sexo' : linea[3],
            'edad' : linea[4]
            };
            coleccionPersonas.push(persona);
        }
        //console.log(persona);
        console.log(coleccion(coleccionPersonas).edadesLimite());
        
    });
    
console.log('final de programa')


