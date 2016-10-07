/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function Ejercicio2(cadena){
    var _cadena = cadena;
    return{
        esValido: function(){
            if ((/^[0-9]{8}[A-Z]?$/).test(_cadena)){
                return true;
            }else {
                return false;
            }
        },
        tipoDocumento: function(){
            if ((/^[0-9]{8}[A-Z]$/).test(_cadena)){
                return "NIF";
            }else if ((/^[0-9]{8}$/).test(_cadena)){
                return "DNI";
            }else{
                return "ERROR";
            }
        },
        getLetra: function(){
            if (this.tipoDocumento()==='NIF'){
                return _cadena.charAt(8);
            }else if(this.tipoDocumento()==='DNI'){
                return "TRWAGMYFPDXBNJZSQVHLCKET".substring(_cadena % 23,(_cadena % 23)+1); 
            }else {
                return 'cadena erronea';
            }
        },
        validarNIF: function(){
          if (this.tipoDocumento()==='NIF'){
              return (_cadena.charAt(8)===this.getLetra());
          }
          else 
              return false;
        }
    }
}
var prueba = Ejercicio2("77368241");
console.log(prueba.esValido());
console.log(prueba.tipoDocumento());
console.log(prueba.getLetra());
console.log(prueba.validarNIF());


