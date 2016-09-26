/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function persona(nombre,apellidos){
    var _nombre = nombre;
    var _apellidos = apellidos;
    return {
        nombrar:        function()  {return _nombre + _apellidos;},
        nombrarOficial: function()  {return _apellidos + "," + _nombre;}
    };
    var a = persona("Pepe", "Perez Rodriguez");
    console.log(a.nombrar());
    console.log(a.nombrarOficial());
}

