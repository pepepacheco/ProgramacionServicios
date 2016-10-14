/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var EjercicioClase = require("./EjercicioClase");
var numeros = [0,1,2,32,4,5,6,7,8,9];
var EjercicioClase = new EjercicioClase(numeros);
console.log(EjercicioClase.length());
console.log(EjercicioClase.maxValue());
console.log(EjercicioClase.minValue());
console.log(EjercicioClase.sort());
console.log(EjercicioClase.reps(1));
console.log(EjercicioClase.media());
console.log(numeros)
