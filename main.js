console.log("Hola mundo");
//creo objeto
var objeto1 = {
    nombre: "pepe",
    edad: 16
};
var objeto2 = {};
objeto2.nombre = "María";
objeto2.edad = 45;
console.log(objeto1);
//borro propiedad del objeto
delete(objeto1.edad);
//denominacion de objetos o toString
console.log(objeto1);
console.log(isNaN("2"));
if (typeof(objeto1.nombre) === "string"){
    console.log(objeto1.nombre + " es cadena");
};