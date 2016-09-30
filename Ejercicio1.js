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
        delReves:   function(){
                var palabra="";
                palabra = _cadena.split("").reverse().join("");
                return palabra;
        },
      numeroCaracteres: function(){
          return _cadena.length;
      },
      cadenaMayuscula: function(){
          return _cadena.toUpperCase();
      },
      esPalindromo: function(){
          return (_cadena.split("").reverse().join("")===_cadena);
      }
      
    };
}
var a = Ejercicio1("Hola");
console.log(a.esCadena());
console.log(a.delReves());
console.log(a.numeroCaracteres());
console.log(a.cadenaMayuscula());
console.log(a.esPalindromo());



