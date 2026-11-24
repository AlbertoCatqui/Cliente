// A la derecha de cada console.log, el comentario "// →" indica lo que se muestra por consola
console.log("----------Crear arrays----------");

console.log(">Literal []");
// [a, b, c] es la forma habitual de crear un array
let numeros = [1, 2, 3];
console.log(numeros); // → [ 1, 2, 3 ]
console.log([]); // → [] (array vacío)
console.log([1, "hola", true, null]); // → [ 1, 'hola', true, null ] (admite tipos mezclados)

console.log(">new Array");
// new Array(n) con UN número crea un array con n huecos vacíos
// new Array(a, b, c) con varios valores crea un array con esos valores
console.log(new Array(3)); // → [ <3 empty items> ]
console.log(new Array(1, 2, 3)); // → [ 1, 2, 3 ]

console.log(">fill");
// fill(valor, desde, hasta) rellena el array con un valor (modifica el original)
console.log(new Array(3).fill(0)); // → [ 0, 0, 0 ]
console.log([1, 2, 3, 4, 5].fill(0, 1, 3)); // → [ 1, 0, 0, 4, 5 ] (de la posición 1 a la 3, sin incluir la 3)

console.log(">Operador spread ...");
// [...algo] copia o expande los elementos en un array nuevo
console.log([...Array(3).keys()]); // → [ 0, 1, 2 ]
console.log([..."hola"]); // → [ 'h', 'o', 'l', 'a' ]

console.log(">Array.isArray");
// Array.isArray(valor) devuelve true si el valor es un array (typeof devuelve "object")
console.log(Array.isArray([1, 2])); // → true
console.log(Array.isArray("hola")); // → false
console.log(typeof [1, 2]); // → object

console.log("----------Acceso y tamaño----------");
let frutas = ["manzana", "pera", "uva"];

console.log(">at");
// at(i) igual que [i] pero admite negativos para contar desde el final
console.log(frutas.at(-1)); // → uva
console.log(frutas.at(-2)); // → pera

console.log(">length");
// length devuelve el número de elementos (no es una función, no lleva paréntesis)
console.log(frutas.length); // → 3

console.log(">Modificar length");
// Si se reduce length, el array se recorta y se pierden los elementos sobrantes
let recortar = [1, 2, 3, 4, 5];
recortar.length = 2;
console.log(recortar); // → [ 1, 2 ]

console.log("----------Añadir y quitar elementos (modifican el array)----------");

console.log(">push");
// push(elementos...) añade al FINAL y devuelve la nueva longitud
let a = [1, 2, 3];
console.log(a.push(4, 5)); // → 5
console.log(a); // → [ 1, 2, 3, 4, 5 ]

console.log(">pop");
// pop() quita el ÚLTIMO elemento y lo devuelve
console.log(a.pop()); // → 5
console.log(a); // → [ 1, 2, 3, 4 ]

console.log(">unshift");
// unshift(elementos...) añade al PRINCIPIO y devuelve la nueva longitud
console.log(a.unshift(0)); // → 5
console.log(a); // → [ 0, 1, 2, 3, 4 ]

console.log(">shift");
// shift() quita el PRIMER elemento y lo devuelve
console.log(a.shift()); // → 0
console.log(a); // → [ 1, 2, 3, 4 ]

console.log(">splice: quitar");
// splice(posición, cuántos, nuevos...) quita, inserta o reemplaza elementos en cualquier posición.
// Devuelve un array con lo que ha quitado
let s = ["a", "b", "c", "d", "e"];
console.log(s.splice(1, 2)); // → [ 'b', 'c' ] (quita 2 elementos desde la posición 1)
console.log(s); // → [ 'a', 'd', 'e' ]

console.log(">splice: insertar");
s = ["a", "b", "c"];
s.splice(1, 0, "X", "Y"); // quita 0 elementos e inserta X e Y en la posición 1
console.log(s); // → [ 'a', 'X', 'Y', 'b', 'c' ]

console.log(">splice: reemplazar");
s = ["a", "b", "c"];
s.splice(1, 1, "Z"); // quita 1 elemento en la posición 1 y pone Z
console.log(s); // → [ 'a', 'Z', 'c' ]

console.log("----------Buscar----------");
let n = [10, 20, 30, 20];

console.log(">indexOf");
// indexOf(valor) devuelve la posición de la primera aparición, o -1 si no está
console.log(n.indexOf(20)); // → 1
console.log(n.indexOf(99)); // → -1

console.log(">lastIndexOf");
// lastIndexOf(valor) devuelve la posición de la última aparición, o -1 si no está
console.log(n.lastIndexOf(20)); // → 3

console.log(">includes");
// includes(valor) devuelve true si el array contiene el valor, si no false
console.log(n.includes(30)); // → true
console.log(n.includes(99)); // → false

console.log(">find");
// find(función) devuelve el PRIMER elemento que cumple la condición, o undefined si ninguno
console.log(n.find((x) => x > 15)); // → 20
console.log(n.find((x) => x > 100)); // → undefined

console.log(">findIndex");
// findIndex(función) devuelve la POSICIÓN del primer elemento que cumple, o -1
console.log(n.findIndex((x) => x > 15)); // → 1
console.log(n.findIndex((x) => x > 100)); // → -1

console.log(">findLast / findLastIndex");
// Igual que find y findIndex pero empezando a buscar por el final
console.log(n.findLast((x) => x < 25)); // → 20
console.log(n.findLastIndex((x) => x < 25)); // → 3

console.log("----------Recorrer----------");
let colores = ["rojo", "verde", "azul"];

console.log(">for con índice");
for (let i = 0; i < colores.length; i++) {
    console.log(i, colores[i]); // → 0 rojo / 1 verde / 2 azul (una línea por vuelta)
}

console.log(">for...of");
// for...of recorre los valores directamente
for (const color of colores) {
    console.log(color); // → rojo / verde / azul (una línea por vuelta)
}

console.log(">forEach");
// forEach(función) ejecuta la función con cada elemento (valor, posición, array).
// No devuelve nada y no se puede interrumpir con break
colores.forEach((color, i) => {
    console.log(i, color); // → 0 rojo / 1 verde / 2 azul (una línea por vuelta)
});

console.log(">for...in");
// for...in recorre las POSICIONES (como texto). Mejor evitarlo en arrays
for (const i in colores) {
    console.log(i); // → 0 / 1 / 2 (una línea por vuelta)
}


console.log(">keys / values");
// keys() devuelve las posiciones y values() los valores
console.log([...colores.keys()]); // → [ 0, 1, 2 ]
console.log([...colores.values()]); // → [ 'rojo', 'verde', 'azul' ]

console.log("----------Transformar (devuelven un array nuevo)----------");
let nums = [1, 2, 3, 4, 5];

console.log(">map");
// map(función) devuelve un array con el resultado de aplicar la función a cada elemento
console.log(nums.map((x) => x * 2)); // → [ 2, 4, 6, 8, 10 ]
console.log(["a", "b"].map((x, i) => x + i)); // → [ 'a0', 'b1' ] (la función recibe también la posición)

console.log(">filter");
// filter(función) devuelve un array solo con los elementos que cumplen la condición
console.log(nums.filter((x) => x % 2 === 0)); // → [ 2, 4 ]
console.log(nums.filter((x) => x > 10)); // → [] (ninguno cumple)

console.log(">reduce");
// reduce(función(acumulado, elemento), valorInicial) reduce el array a un único valor
console.log(nums.reduce((acc, x) => acc + x, 0)); // → 15 (suma)
console.log(nums.reduce((acc, x) => acc * x, 1)); // → 120 (producto)
console.log(nums.reduce((max, x) => (x > max ? x : max))); // → 5 (sin valor inicial usa el primer elemento)

console.log(">Encadenar funciones");
// Como devuelven arrays, se pueden encadenar una detrás de otra
console.log(nums.filter((x) => x % 2 === 1).map((x) => x * 10)); // → [ 10, 30, 50 ]

console.log("----------Comprobar condiciones----------");

console.log(">some");
// some(función) devuelve true si AL MENOS UN elemento cumple la condición
console.log(nums.some((x) => x > 4)); // → true
console.log(nums.some((x) => x > 5)); // → false
console.log([].some((x) => x > 0)); // → false (array vacío)

console.log(">every");
// every(función) devuelve true si TODOS los elementos cumplen la condición
console.log(nums.every((x) => x > 0)); // → true
console.log(nums.every((x) => x > 1)); // → false
console.log([].every((x) => x > 0)); // → true (array vacío: no hay ninguno que falle)

console.log("----------Ordenar----------");

console.log(">sort numérico");
// sort(función(a, b)): si devuelve negativo a va antes, si positivo b va antes
console.log([10, 9, 1, 100].sort((a, b) => a - b)); // → [ 1, 9, 10, 100 ] (ascendente)
console.log([10, 9, 1, 100].sort((a, b) => b - a)); // → [ 100, 10, 9, 1 ] (descendente)

console.log(">sort de textos");
// Para textos con tildes o ñ hay que usar localeCompare
console.log(["z", "á", "a", "ñ", "n"].sort((x, y) => x.localeCompare(y, "es"))); // → [ 'a', 'á', 'n', 'ñ', 'z' ]

console.log(">sort de objetos por una propiedad");
let personas = [
    { nombre: "Ana", edad: 30 },
    { nombre: "Luis", edad: 25 },
    { nombre: "Eva", edad: 35 },
];
// [...personas] hace una copia para no modificar el original
console.log([...personas].sort((a, b) => a.edad - b.edad).map((p) => p.nombre)); // → [ 'Luis', 'Ana', 'Eva' ]
console.log([...personas].sort((a, b) => a.nombre.localeCompare(b.nombre)).map((p) => p.nombre)); // → [ 'Ana', 'Eva', 'Luis' ]

console.log(">reverse");
// reverse() invierte el orden (modifica el original)
console.log([1, 2, 3].reverse()); // → [ 3, 2, 1 ]

console.log("----------Copiar y unir----------");

console.log(">slice");
// slice(desde, hasta) devuelve un trozo del array (hasta NO incluido). No modifica el original
let datos = [10, 20, 30, 40, 50];
console.log(datos.slice(1, 3)); // → [ 20, 30 ]
console.log(datos.slice(-2)); // → [ 40, 50 ] (los 2 últimos)
console.log(datos.slice()); // → [ 10, 20, 30, 40, 50 ] (copia completa)

console.log(">concat");
// concat(arrays...) une arrays y devuelve uno nuevo
console.log([1, 2].concat([3, 4], [5])); // → [ 1, 2, 3, 4, 5 ]
console.log([...[1, 2], ...[3, 4]]); // → [ 1, 2, 3, 4 ] (lo mismo con spread)

console.log(">Copia y referencia");
// Con = NO se copia el array, solo se crea otro nombre para el MISMO array
let original = [1, 2];
let referencia = original;
referencia.push(3);
console.log(original); // → [ 1, 2, 3 ] (también cambió el original)
let copia = [...original];
copia.push(4);
console.log(original); // → [ 1, 2, 3 ] (la copia no afecta al original)
console.log(copia); // → [ 1, 2, 3, 4 ]

console.log("----------Convertir----------");

console.log(">join");
// join(separador) une los elementos en un string (por defecto con comas)
console.log([1, 2, 3].join("-")); // → 1-2-3
console.log([1, 2, 3].join()); // → 1,2,3
console.log([1, 2, 3].join("")); // → 123

console.log(">toString");
// toString() equivale a join(",")
console.log([1, 2, 3].toString()); // → 1,2,3

console.log("----------Casos habituales----------");

console.log(">Sumar, media, máximo y mínimo");
let notas = [4, 8, 15];
let suma = notas.reduce((a, b) => a + b, 0);
console.log(suma); // → 27
console.log(suma / notas.length); // → 9
console.log(Math.max(...notas)); // → 15
console.log(Math.min(...notas)); // → 4

console.log(">Quitar duplicados con filter");
console.log([1, 2, 2, 3, 3, 3].filter((x, i, arr) => arr.indexOf(x) === i)); // → [ 1, 2, 3 ]

console.log(">Contar apariciones");
console.log(
    ["a", "b", "a", "c", "a"].reduce((cont, x) => {
        cont[x] = (cont[x] || 0) + 1;
        return cont;
    }, {})
); // → { a: 3, b: 1, c: 1 }

console.log(">Eliminar un elemento por valor");
console.log([1, 2, 3, 4].filter((x) => x !== 3)); // → [ 1, 2, 4 ]

console.log(">Eliminar valores vacíos (0, '', null, undefined, false, NaN)");
console.log([0, 1, "", null, "a", undefined, false, 2].filter(Boolean)); // → [ 1, 'a', 2 ]

console.log(">Crear un rango de números");
console.log(Array.from({ length: 5 }, (_, i) => i + 1)); // → [ 1, 2, 3, 4, 5 ]
