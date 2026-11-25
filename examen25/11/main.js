import { Ciudad } from "./Ciudad.js";
import { Carrera } from "./Carrera.js";
import { Piloto } from "./Piloto.js";
import { Equipo } from "./Equipo.js";

let ciudad1 = new Ciudad("Vice City");
let carrera1 = new Carrera("Gran Premio del Puerto", "Puerto", "30/01/2027");

ciudad1.aniadirCarrera(carrera1);

let piloto1 = new Piloto("maya", "cruz soto", "velocidad");
let piloto2 = new Piloto("leo", "vargas", "derrape");
let piloto3 = new Piloto("pepito", "sil ocaña", "velocidad");
let piloto4 = new Piloto("Benito", "ortiz", "derrape");
let piloto5 = new Piloto("Rick", "grimes", "velocidad");
let piloto6 = new Piloto("Frank", "Ghallager", "derrape");
let piloto7 = new Piloto("Mikey", "Milkovitch", "mecánica");
let piloto8 = new Piloto("Pancracio", "Gomez", "mecánica");

let equipo1 = new Equipo(piloto1, piloto2, "Nadie nos para en Vice City");
let equipo2 = new Equipo(piloto3, piloto4, "A quien lo le va a gustar");
let equipo3 = new Equipo(piloto5, piloto6, "Estos dos no pegan ni con cola");
let equipo4 = new Equipo(piloto7, piloto8, "Velocidad a tope");

console.log("-----------------------------------------------");
equipo1.aniadirInfraccion("exceso de velodidad");
equipo1.aniadirInfraccion("huir de la policía");
equipo1.aniadirInfraccion("conducción temeraria");
equipo1.aniadirPremio(1000);
equipo1.aniadirPremio(6000);
console.log("-----------------------------------------------");

console.log("INSCRIBIR EQUIPO 1");
carrera1.inscribirEquipo(equipo1);
console.log("INSCRIBIR EQUIPO 2");
carrera1.inscribirEquipo(equipo2);
console.log("INSCRIBIR EQUIPO 3");
carrera1.inscribirEquipo(equipo3);
console.log("INSCRIBIR EQUIPO 4");
carrera1.inscribirEquipo(equipo4);
