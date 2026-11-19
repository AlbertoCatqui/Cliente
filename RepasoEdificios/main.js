import { Edificio } from "./Edificio.js";
import { Inmobiliaria } from "./Inmobiliaria.js";

let inm1 = new Inmobiliaria("TecnoEdificio");

let ed1 = new Edificio("Tal", 27, 47014);
ed1.agregaPlantasYPuertas(2, 5);
ed1.agregarPropietario("Ana", "M", 1, 0, 1);
ed1.agregarPropietario("Julian", "H", 2, 0, 2);
ed1.agregarPropietario("Pepito", "H", 4, 0, 3);
ed1.agregarPropietario("Anacleto", "H", 5, 0, 4);
ed1.agregarPropietario("Benito", "H", 1, 0, 5);
ed1.agregarPropietario("Pancracio", "H", 1, 1, 1);
ed1.agregarPropietario("Herminia", "M", 2, 1, 2);
ed1.agregarPropietario("Wenceslao", "H", 2, 1, 3);
ed1.agregarPropietario("Rumualdo", "M", 7, 1, 4);
ed1.agregarPropietario("Jovanni", "M", 98, 1, 5);

ed1.agregarPropietario("Joel", "M", 1, 0, 1);
ed1.agregarPropietario("Victor", "M", 1, 0, 2);

ed1.imprimePlantas();

let ed2 = new Edificio("Cual", 28, 47014);
let ed3 = new Edificio("Pascual", 29, 47014);

inm1.addEdificio(ed1);
inm1.addEdificio(ed2);
inm1.addEdificio(ed3);

console.log(inm1.getEdificio("Cual", 28));
console.log(inm1.getEdificio("Tal", 27));
console.log(inm1.getEdificio("Pascual", 29));
