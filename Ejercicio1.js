/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function Ejercicio1(cadena){
    var _cadena = cadena;
    return {
        esCadena:   function(){
            if (typeof(_cadena) === "string"){
                return true;
            }else {
                    return false;
            }
    },
        delReves: function(){
            for (var i = _cadena.length; i>0 ;i--){
                var palabra;
                palabra = palabra + _cadena.charAt(i);
            }
        }
    };
}
var a = Ejercicio1("Saludos");
console.log(a.esCadena());
console.log(a.delReves());

