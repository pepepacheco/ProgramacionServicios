/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function Ejercicio2(cadena){
    var _cadena = cadena;
    return{
        esValido: function(){
            if ((/[0-9]{8}[A-Z]?$/).test(_cadena)){
                return true;
            }else {
                return false;
            }
        },
        tipoDocumento: function(){
            if ((/[0-9]{8}[A-Z]$/).test(_cadena)){
                return "NIF";
            }else if ((/[0-9]{8}$/).test(_cadena)){
                return "DNI";
            }else{
                return "ERROR";
            }
        },
        getLetra: function(){
            if ((/[0-9]{8}[A-Z]$/).test(_cadena)){
                return _cadena.charAt(8);
            }else{
                return "No es un NIF"
            }
        },
        calculaLetra: function(){
            if ((/[0-9]{8}$/).test(_cadena)){
                letras="TRWAGMYFPDXBNJZSQVHLCKET";
                posicion = parseInt(_cadena) % 23;
                letra = letras.substring(posicion,posicion+1);
                return letra; 
            }else{
                return "No es DNI"
            }
        }
        
    }
}
var prueba = Ejercicio2("77368241J");
console.log(prueba.esValido());
console.log(prueba.tipoDocumento());
console.log(prueba.getLetra());
console.log(prueba.calculaLetra());


