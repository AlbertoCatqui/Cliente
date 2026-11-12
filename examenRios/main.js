import { Rio } from "./examenRios.js";
document.open();
let rio1 = new Rio("Duero", "Atlántica", 27);
rio1.agregarPoblacion("poblacion1");
rio1.agregarPoblacion("poblacion2");
//console.log(rio1.imprimeRio());
document.write(rio1.imprimeRio());
document.close();
