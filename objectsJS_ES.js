//Nota:     Template = Modelo o Plantilla.


//OBJETOS
//Un objeto es una colección de datos y/o funcionalidades que se relacionan.
//Es una representacion abstracta de una cosa de la vida real.
//Los objetos se manejan con propiedades, y las propiedades son una combinacion de palabras clave y sus valores.
//Las llaves indican desde donde inicia y hasta donde termina el objeto. {...}
//Los números de funcionan como valor, se escriben y manejan como datos numéricos, no como string.
//Al igual que los números, los datos booleanos también se manejan como booleans, no como strings.

//SYNTAX:
//Están conformados por propiedades y su valor; siendo representados en el ejemplo, las *propiedades* como *palabraClave* y su valor.
var objeto = {
    palabraClave: "valor",
    palabraClave2: 40,
    palabraClave3: "valor 3"
};

//

//EXAMPLE:
let miAuto = {
    color: "Amarillo",
    puertas: 5,
    marca: "Jeep",
    annio: 2016
};

//Para utilizar las variables que se encuentran dentro del objeto:

miAuto.color; //Amarillo
miAuto.puertas; //5
miAuto.annio; //2016
console.log(miAuto.marca); //Jeep


//EXAMPLE2:
let objetoLula = {
    ser: "can",
    color: "sal y pimienta",
    nombre: "Lulú",
    edad: 9,
    peso: 11
};

console.log(`Tengo una ${objetoLula.ser} llamada ${objetoLula.nombre}, ella es de color ${objetoLula.color}, pesa ${objetoLula.peso} kilos y tiene ${objetoLula.edad} años de edad.`);
//Tengo una can llamada Lulú, ella es de color sal y pimienta, pesa 11 kilos y tiene 9 años de edad.


//

//Funciones en Objetos (o *Metodos* de Objeto)
//Las *propiedades que llevan una funcion como *valor* se le llaman *Metodos*.
//NOTA IMPORTANTE: Para acceder a un valor específico, primero se necesita escribir el 'nombre del objeto.'
//                 seguido del nombre de la propiedad o método. Ejemplo: objeto.propiedad;   /   objeto.metodo();

let objeto2 = {
    propiedadNormal: "valor x",
    metodo: function() {
        console.log(`Interpolación de ${this.propiedadNormal}Aqui se pone una tarea. Se está usando un console.log(), como ejemplo.`)
    } //No se necesita cerrar con 'punto y coma' (;)
}
//Para utilizar las propiedades que se encuentran dentro de los Metodos de Objeto:
objeto.metodo();



//this.
//Es una variable que hace referencia al 'objeto padre'. - Funciona solo estando dentro de una variable u objeto.

//EXAMPLE:
let miCarro = {
    color: "Amarillo",
    puertas: 5,
    marca: "Jeep",
    annio: 2016,
    detallesDelCarro: function() {
        console.log(`${this.marca} ${this.color}`)
    }
};

miCarro.detallesDelCarro();
//Jeep Amarillo


////


//funcion constructora:
//Es la manera de hacer objetos de forma automatica.
//Loop para hacer multi objetos de manera automatica.
//Generar objetos de forma automatica, menos manual.
//Para generar varios objetos de manera automatica

//SYNTAX:

//construir el objeto
var llamarFuncionXnombre = "x";
var nombreDescriptivo = new llamarFuncionXnombre("aqui van los parametros"); //new, operador que genera un *objeto* que deriva de otro objeto.


//EXAMPLE:
function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var autoNuevo = new auto("Tesla", "Model S", 2020);
var autoNuevo2 = new auto("Jeep", "Raptor", 2021);


//EXAMPLE2:
function anillo(metal, color, peso, annio) {
    this.metal = metal;
    this.color = color;
    this.peso = peso;
    this.annio = annio
}

var anillo1 = new anillo("oro", "dorado", 5.5, 2019);
var anillo2 = new anillo("plata", "plata", 5.3, 2018);

