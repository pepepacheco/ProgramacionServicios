console.log("Hola mundo");
//creo objeto
var objeto1 = {
    nombre: "pepe",
    edad: 16
};
console.log(objeto1);
//borro propiedad del objeto
delete(objeto1.edad);
console.log(objeto1);
console.log(isNaN("2"))
if (typeof(objeto1.nombre) == "string"){
    console.log("es cadena")
}