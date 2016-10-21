/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function coleccion(datos){
    _datos = datos;
    return {
        edadesLimite : function(callback){
            var objeto;
            var minima = parseInt(datos[0].edad);
            var maxima = parseInt(datos[0].edad);
            for (var i = 1; i < _datos.length; i++) {
                if (minima > parseInt(_datos[i].edad))
                    minima = datos[i].edad;
                if (maxima < parseInt(_datos[i].edad))
                    maxima = datos[i].edad;
            }
            objeto =  {'maxima': maxima,'minima': minima};
            return objeto;
        }
    };
}
module.exports = coleccion;
