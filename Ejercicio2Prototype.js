/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function Ejercicio2(cadena){
    this.cadena = cadena;
};
    Ejercicio2.prototype = {
        esValido: function(){return /^\d{8}[A-Z]?$/.test(this.cadena);},
        tipoDocumento: function(){
            if ((/^\d{8}[A-Z]$/).test(this.cadena)){
                return "NIF";
            }else if ((/^\d{8}$/).test(this.cadena)){
                return "DNI";
            }else{
                return "ERROR";
            }
        },
        getLetra: function(){
            if ((/^\d{8}[A-Z]$/).test(this.cadena)){
                return this.cadena.charAt(8);
            }else{
                return "No es un NIF"
            }
        },
        calculaLetra: function(){
            if ((/^\d{8}$/).test(this.cadena)){
                letras="TRWAGMYFPDXBNJZSQVHLCKET";
                posicion = parseInt(this.cadena) % 23;
                letra = letras.substring(posicion,posicion+1);
                return letra; 
            }else{
                return "No es DNI"
            }
        }
        
    }
var prueba = new Ejercicio2("77368241");
console.log(prueba.esValido());
console.log(prueba.tipoDocumento());
console.log(prueba.getLetra());
console.log(prueba.calculaLetra());

