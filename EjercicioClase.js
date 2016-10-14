/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function EjercicioClase(numeros){
    var coleccion = numeros;
    return {
        length: function(){return coleccion.length;},
        maxValue: function(){return Math.max.apply(null,coleccion)},
        minValue: function(){return Math.min.apply(null,coleccion)},
        reps: function(numero){
            var reps=0;
            for (var i = 0; i < coleccion.length; i++) {
                if (coleccion[i]===numero){
                    reps+=1;
                }
            }
            return reps;
        },sort:function(){return coleccion.sort();},
        media: function(){
            var suma=0;
            for (var i = 0; i < coleccion.length; i++) {
                suma+= coleccion[i];
            }
            return suma/coleccion.length;
        }
    }
}
module.exports = EjercicioClase;
