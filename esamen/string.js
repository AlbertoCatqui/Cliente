
let texto = "Hola Mundo";
console.log(">Template literals");
// `...${expresión}...` inserta el valor de la variable o expresión dentro del texto
let nombre = "Ana";
let edad = 25;
console.log(`Me llamo ${nombre} y tengo ${edad} años. El año que viene tendré ${edad + 1}.`);

console.log(">Caracteres de escape");
// \n salto de línea, \t tabulador, \" comilla doble, \\ barra invertida
console.log("Línea 1\nLínea 2");
console.log("Col1\tCol2");
console.log("Dijo \"hola\"");
console.log("C:\\carpeta\\archivo");


console.log("----------Propiedades y acceso a caracteres----------");

console.log(">length");
// length devuelve el número de caracteres (no es una función, no lleva paréntesis)
console.log(texto.length); // → 10

console.log(">[posición]");
// texto[i] devuelve el carácter en esa posición (empieza en 0). Fuera de rango da undefined
console.log(texto[0]); // → H
console.log(texto[texto.length - 1]); // → o (último carácter)
console.log(texto[50]); // → undefined

console.log(">charAt");
// charAt(i) igual que [i], pero fuera de rango devuelve "" en lugar de undefined
console.log(texto.charAt(0)); // → H
console.log(texto.charAt(50)); // → (cadena vacía)

console.log(">at");
// at(i) igual que [i], pero admite números negativos para contar desde el final
console.log(texto.at(0)); // → H
console.log(texto.at(-1)); // → o (último carácter)
console.log(texto.at(-2)); // → d (penúltimo)

console.log(">charCodeAt");
// charCodeAt(i) devuelve el código numérico (Unicode) del carácter en esa posición
console.log("A".charCodeAt(0)); // → 65
console.log("a".charCodeAt(0)); // → 97

console.log(">codePointAt");
// codePointAt(i) igual que charCodeAt pero también funciona con emojis y caracteres raros
console.log("😀".codePointAt(0)); // → 128512

console.log(">String.fromCharCode");
// String.fromCharCode(códigos...) hace lo contrario: convierte códigos en texto
console.log(String.fromCharCode(72, 111, 108, 97)); // → Hola

console.log(">String.fromCodePoint");
// Igual que el anterior pero admite emojis
console.log(String.fromCodePoint(128512)); // → 😀

console.log("----------Buscar----------");

console.log(">indexOf");
// indexOf(texto, desde) devuelve la posición de la PRIMERA aparición, o -1 si no existe.
// Distingue mayúsculas de minúsculas
console.log("hola mundo hola".indexOf("hola")); // → 0
console.log("hola mundo hola".indexOf("hola", 1)); // → 11 (busca a partir de la posición 1)
console.log("hola mundo hola".indexOf("adios")); // → -1
console.log("hola mundo hola".indexOf("HOLA")); // → -1 (distingue mayúsculas)

console.log(">lastIndexOf");
// lastIndexOf(texto) devuelve la posición de la ÚLTIMA aparición, o -1 si no existe
console.log("hola mundo hola".lastIndexOf("hola")); // → 11

console.log(">includes");
// includes(texto) devuelve true si el texto contiene lo buscado, si no false
console.log("hola mundo".includes("mundo")); // → true
console.log("hola mundo".includes("adios")); // → false

console.log(">startsWith");
// startsWith(texto) devuelve true si el string empieza por lo indicado
console.log("hola mundo".startsWith("hola")); // → true
console.log("hola mundo".startsWith("mundo")); // → false
console.log("hola mundo".startsWith("mundo", 5)); // → true (empezando a mirar desde la posición 5)

console.log(">endsWith");
// endsWith(texto) devuelve true si el string acaba en lo indicado
console.log("hola mundo".endsWith("mundo")); // → true
console.log("hola mundo".endsWith("hola")); // → false

console.log(">search");
// search(regex) devuelve la posición de la primera coincidencia con una regex, o -1
console.log("hola 2 mundos".search(/\d/)); // → 5

console.log(">match");
// match(regex) devuelve las coincidencias con una regex (o null si no hay)
console.log("Tengo 3 gatos y 12 perros".match(/\d+/g)); // → [ '3', '12' ]

console.log(">matchAll");
// matchAll(regex) devuelve todas las coincidencias con detalle (la regex debe llevar g)
console.log([..."a1 b2".matchAll(/[a-z](\d)/g)].map((m) => m[1])); // → [ '1', '2' ]

console.log("----------Extraer partes----------");
texto = "Hola Mundo";

console.log(">slice");
// slice(inicio, fin) devuelve el trozo entre inicio (incluido) y fin (NO incluido).
// Admite negativos para contar desde el final
console.log(texto.slice(0, 4)); // → Hola
console.log(texto.slice(5)); // → Mundo (desde la posición 5 hasta el final)
console.log(texto.slice(-5)); // → Mundo (los 5 últimos caracteres)
console.log(texto.slice(2, -2)); // → la Mun (quita 2 por delante y 2 por detrás)

console.log(">substring");
// substring(inicio, fin) parecido a slice pero NO admite negativos (los toma como 0)
// y si inicio es mayor que fin los intercambia
console.log(texto.substring(0, 4)); // → Hola
console.log(texto.substring(4, 0)); // → Hola (los intercambia: igual que (0, 4))
console.log(texto.substring(-3, 4)); // → Hola (-3 se toma como 0)

console.log(">substr (obsoleta)");
// substr(inicio, cantidad) devuelve un número de caracteres desde la posición indicada.
// Está obsoleta: mejor usar slice
console.log(texto.substr(5, 3)); // → Mun

console.log(">split");
// split(separador, límite) divide el texto en un array usando el separador
console.log("a,b,c".split(",")); // → [ 'a', 'b', 'c' ]
console.log("hola mundo desde JS".split(" ")); // → [ 'hola', 'mundo', 'desde', 'JS' ]
console.log("a,b,c,d".split(",", 2)); // → [ 'a', 'b' ] (máximo 2 elementos)
console.log("hola".split("")); // → [ 'h', 'o', 'l', 'a' ] (cada carácter por separado)

console.log("----------Modificar (devuelven un string nuevo)----------");
// Los strings no se pueden modificar: todas estas funciones devuelven un string NUEVO
// y el original queda igual

console.log(">toUpperCase / toLowerCase");
// toUpperCase() pasa a mayúsculas, toLowerCase() pasa a minúsculas
console.log(texto.toUpperCase()); // → HOLA MUNDO
console.log(texto.toLowerCase()); // → hola mundo
console.log(texto); // → Hola Mundo (el original no cambia)

console.log(">trim / trimStart / trimEnd");
// trim() quita los espacios (y tabuladores, saltos) del principio y del final.
// trimStart() solo del principio, trimEnd() solo del final
let conEspacios = "   hola   ";
console.log("[" + conEspacios.trim() + "]"); // → [hola]
console.log("[" + conEspacios.trimStart() + "]"); // → [hola   ]
console.log("[" + conEspacios.trimEnd() + "]"); // → [   hola]

console.log(">padStart");
// padStart(longitud, relleno) añade relleno por la IZQUIERDA hasta alcanzar la longitud
console.log("5".padStart(3, "0")); // → 005
console.log("42".padStart(5, "*")); // → ***42

console.log(">padEnd");
// padEnd(longitud, relleno) añade relleno por la DERECHA hasta alcanzar la longitud
console.log("5".padEnd(3, "0")); // → 500
console.log("Ana".padEnd(8, ".") + "25"); // → Ana.....25

console.log(">repeat");
// repeat(n) repite el texto n veces
console.log("ab".repeat(3)); // → ababab
console.log("-".repeat(20)); // → --------------------

console.log(">concat");
// concat(textos...) une strings. Es más cómodo usar + o los template literals
console.log("Hola".concat(" ", "Mundo", "!")); // → Hola Mundo!
console.log("Hola" + " " + "Mundo" + "!"); // → Hola Mundo!

console.log(">replace");
// replace(buscar, nuevo) cambia SOLO la primera aparición
console.log("a-b-c".replace("-", "+")); // → a+b-c

console.log(">replaceAll");
// replaceAll(buscar, nuevo) cambia TODAS las apariciones
console.log("a-b-c".replaceAll("-", "+")); // → a+b+c

console.log(">replace con función");
// replace admite una función que recibe lo encontrado y devuelve el reemplazo
console.log("hola mundo".replace(/\b\w/g, (letra) => letra.toUpperCase())); // → Hola Mundo

console.log(">normalize");
// normalize("NFD") separa las letras de sus tildes. Sirve para quitar acentos
console.log("canción".normalize("NFD").replace(/[\u0300-\u036f]/g, "")); // → cancion

console.log("----------Comparar----------");

console.log(">== y ===");
// Los strings se comparan por su contenido, distinguiendo mayúsculas de minúsculas
console.log("hola" === "hola"); // → true
console.log("hola" === "Hola"); // → false
console.log("hola".toLowerCase() === "Hola".toLowerCase()); // → true (ignorando mayúsculas)

console.log(">< y >");
// < y > comparan por el código de los caracteres (orden alfabético básico)
console.log("a" < "b"); // → true
console.log("B" < "a"); // → true (las mayúsculas tienen código menor que las minúsculas)

console.log("----------Recorrer un string----------");

console.log(">for con índice");
for (let i = 0; i < "Hola".length; i++) {
    console.log(i, "Hola"[i]); // → 0 H / 1 o / 2 l / 3 a (una línea por vuelta)
}

console.log(">for...of");
// for...of recorre los caracteres directamente
for (const letra of "Hola") {
    console.log(letra); // → H / o / l / a (una línea por vuelta)
}

console.log(">Convertir a array");
// [...texto] o Array.from(texto) separa el string en un array de caracteres
console.log([..."Hola"]); // → [ 'H', 'o', 'l', 'a' ]
console.log(Array.from("Hola")); // → [ 'H', 'o', 'l', 'a' ]

console.log(">Unir un array en un string (join)");
// array.join(separador) hace lo contrario que split
console.log(["a", "b", "c"].join("-")); // → a-b-c

console.log("----------Casos habituales----------");

console.log(">Primera letra en mayúscula");
let palabra = "javascript";
console.log(palabra.charAt(0).toUpperCase() + palabra.slice(1)); // → Javascript

console.log(">Primera letra de cada palabra en mayúscula");
console.log(
    "hola mundo desde js"
        .split(" ")
        .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
        .join(" ")
); // → Hola Mundo Desde Js

console.log(">Invertir un texto");
console.log("hola".split("").reverse().join("")); // → aloh

console.log(">Comprobar si es un palíndromo");
// Se pasa a minúsculas, se quitan espacios y se compara con su inversa
let frase = "Anita lava la tina".toLowerCase().replaceAll(" ", "");
console.log(frase === frase.split("").reverse().join("")); // → true

console.log(">Contar las veces que aparece un carácter");
console.log("banana".split("a").length - 1); // → 3

console.log(">Contar vocales");
console.log(("murciélago".match(/[aeiouáéíóú]/gi) || []).length); // → 5

console.log(">Contar palabras");
console.log("  hola   mundo desde JS  ".trim().split(/\s+/).length); // → 4

console.log(">Crear un slug para una URL");
// Pasa a minúsculas, quita tildes, cambia lo que no sea letra o número por guiones
console.log(
    "¡Cómo aprender JavaScript en 10 días!"
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "")
); // → como-aprender-javascript-en-10-dias

console.log(">Acortar un texto largo");
let largo = "Este es un texto bastante largo para mostrar";
console.log(largo.length > 20 ? largo.slice(0, 20) + "..." : largo); // → Este es un texto bas...

console.log(">Ocultar parte de un texto");
// Deja visibles los 4 últimos caracteres y rellena el resto con *
console.log("1234567890123456".slice(-4).padStart(16, "*")); // → ************3456

console.log(">Formatear números con ceros a la izquierda");
let hora = 7, minutos = 5;
console.log(`${String(hora).padStart(2, "0")}:${String(minutos).padStart(2, "0")}`); // → 07:05

console.log(">Comprobar si un string está vacío o solo tiene espacios");
console.log("   ".trim().length === 0); // → true
console.log("   ".trim() === ""); // → true

console.log(">Convertir texto a número");
console.log(Number("42") + 1); // → 43
console.log(parseInt("42px")); // → 42 (lee el número del principio e ignora el resto)
console.log(parseFloat("3.14abc")); // → 3.14
console.log(Number("42px")); // → NaN (Number no admite texto mezclado)