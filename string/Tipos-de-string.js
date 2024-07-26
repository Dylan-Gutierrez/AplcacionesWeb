//String (es una cadena de caracteres)

let str_1 ="hola soy un texto con comillas";
let str_2 ='hola soy un texto con comillas simples';
let str_3 = "comillas dentro de la comillas \"Ejemplo\"";
let str_4 = 'comillas dentro de las comillas simples "Ejemplo"';
let str_5 = "comillas dentro de comillas 'Ejemplo'";

console.log(str_1);
console.log(str_2);
console.log(str_3);
console.log(str_4);
console.log(str_5);

//comillas invertidas (backticks) Alt gr + }} ``

let str_6 = `comillas invertidas o backticks`;
console.log(str_6);

let nombre = `Dylan`;
let saludar = `Hola, ${nombre} bienvenido`;

console.log(saludar);

let plantilla =`
<html>
    <h3>pagina web de ${nombre}</h3>
    <p>Esto es un parrafo</p>
</html>
`

console.log(plantilla);