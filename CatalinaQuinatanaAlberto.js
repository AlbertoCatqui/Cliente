//Una funcion f4 que devuelve un string similar al original, pero sin espacios en "camelcase"
//Una funcion f5 que devuelve la longitud media de las palabras de la frase.
//Una funcion f6 que devuelve un array con la longitud de cada una de las palabras que contenga la letra "a"

let texto = "en un lugar de la mancha";

let f4 = (frase) => frase.split(" ").join("");

console.log(f4(texto));
