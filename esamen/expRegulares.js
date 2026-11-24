console.log("----------Crear una expresión regular----------");

console.log(">Literal");
// /patrón/flags : forma habitual, se escribe entre barras
let re1 = /hola/i;
console.log(re1);

console.log(">Constructor RegExp");
// new RegExp("patrón", "flags") : útil cuando el patrón viene de una variable.
// Las barras invertidas hay que duplicarlas dentro del string ("\\d" en vez de "\d")
let re2 = new RegExp("\\d+", "g");
console.log(re2);

console.log("----------Métodos----------");

console.log(">test");
// regex.test(texto) devuelve true si el texto contiene alguna coincidencia, si no false
console.log(/mundo/.test("hola mundo"));
console.log(/adios/.test("hola mundo"));

console.log(">exec");
// regex.exec(texto) devuelve un array con la primera coincidencia (y sus grupos),
// además de index (posición) e input. Si no hay coincidencia devuelve null
console.log(/mu(n)do/.exec("hola mundo"));
console.log(/xyz/.exec("hola mundo"));

console.log(">match sin flag g");
// texto.match(regex) sin g devuelve lo mismo que exec: primera coincidencia con detalles
console.log("Tengo 3 gatos y 12 perros".match(/\d+/));

console.log(">match con flag g");
// texto.match(regex) con g devuelve un array con TODAS las coincidencias (sin detalles).
// Si no hay ninguna devuelve null
console.log("Tengo 3 gatos y 12 perros".match(/\d+/g));

console.log(">matchAll");
// texto.matchAll(regex) devuelve todas las coincidencias CON detalles (grupos, index).
// Obliga a usar la flag g. Se convierte a array con [...]
console.log([..."a1 b22 c333".matchAll(/[a-z](\d+)/g)]);

console.log(">search");
// texto.search(regex) devuelve la posición de la primera coincidencia, o -1 si no hay
console.log("hola mundo".search(/mundo/));
console.log("hola mundo".search(/adios/));

console.log(">replace");
// texto.replace(regex, nuevo) sustituye la primera coincidencia (o todas si lleva flag g)
console.log("a-b-c".replace(/-/, "+"));
console.log("a-b-c".replace(/-/g, "+"));

console.log(">replaceAll");
// texto.replaceAll(regex, nuevo) sustituye todas las coincidencias. La regex DEBE llevar g
console.log("a-b-c".replaceAll(/-/g, "+"));

console.log(">split");
// texto.split(regex) divide el texto en un array usando la regex como separador
console.log("uno, dos;tres,   cuatro".split(/[,;]\s*/));

console.log(">lastIndex y flag g con test (cuidado)");
// Con la flag g, test() recuerda la posición donde terminó la última búsqueda (lastIndex),
// así que llamadas seguidas con la misma regex pueden dar resultados distintos
let reG = /a/g;
console.log(reG.test("aa")); //true
console.log(reG.test("aa")); //true
console.log(reG.test("aa")); //false (ya no quedan más a), y lastIndex vuelve a 0

console.log("----------Anclas----------");

console.log(">^ inicio del texto");
// ^ la coincidencia debe estar al principio del texto
console.log(/^hello/.test("hola mundo")); //empieza por hello
console.log(/^hola/.test("hola mundo")); //empieza por hola

console.log(">$ final del texto");
// $ la coincidencia debe estar al final del texto
console.log(/world$/.test("hola mundo")); //acaba por world
console.log(/mundo$/.test("hola mundo")); //acaba por mundo

console.log(">^ y $ juntos");
// Con ^...$ el texto ENTERO debe cumplir el patrón (así se validan campos)
console.log(/^hola$/.test("hola")); //true
console.log(/^hola$/.test("hola mundo")); //false

console.log(">\\b límite de palabra");
// \b marca el borde entre una letra/número y otro carácter (espacio, signo, inicio o fin)
console.log(/\bmundo\b/.test("hola mundo")); //true, es una palabra completa
console.log(/\bmun\b/.test("hola mundo")); //false, mun es solo parte de una palabra

console.log("----------Comodín y clases de caracteres----------");

console.log(">. cualquier carácter");
// . representa un carácter cualquiera (excepto salto de línea)
console.log(/h.la/.test("hola")); //true
console.log(/h.la/.test("hla")); //false, falta el carácter del medio

console.log(">[abc] uno de los caracteres indicados");
// [aeiou] coincide con UN carácter que sea cualquiera de los que hay entre corchetes
console.log(/[aeiou]/.test("rhythm")); //false, no tiene vocales
console.log(/[aeiou]/.test("hola")); //true

console.log(">[a-z] rangos");
// [0-9] cualquier dígito, [a-z] letra minúscula, [A-Z] mayúscula.
// Ojo: [0-9] busca un número EN CUALQUIER POSICIÓN, no solo al principio (para eso ^[0-9])
console.log(/[0-9]/.test("hola mundo")); //false, no hay ningún número
console.log(/[0-9]/.test("hola 2 mundos")); //true, hay un número en medio
console.log(/^[0-9]/.test("hola 2 mundos")); //false, no EMPIEZA por número
console.log(/[u-v]/.test("hola mundo")); //true, tiene u (letra entre u y v)

console.log(">[^abc] negación");
// ^ DENTRO de corchetes significa "cualquier carácter que NO sea estos"
console.log(/[^0-9]/.test("12345")); //false, todo son números
console.log(/[^0-9]/.test("123a45")); //true, hay un carácter que no es número

console.log(">\\d \\w \\s y sus opuestos");
// \d dígito (= [0-9])           \D cualquier cosa que NO sea dígito
// \w letra, número o _          \W cualquier cosa que NO sea \w
// \s espacio, tabulador o salto \S cualquier cosa que NO sea espacio
console.log(/\d/.test("abc1")); //true
console.log(/\w/.test("!!!")); //false
console.log(/\s/.test("hola mundo")); //true, hay un espacio
console.log(/\S/.test("   ")); //false, solo hay espacios

console.log(">Escapar caracteres especiales");
// Los símbolos . * + ? ^ $ ( ) [ ] { } | \ / tienen significado propio.
// Para buscarlos tal cual hay que poner \ delante
console.log(/3.14/.test("3x14")); //true, el . es un comodín
console.log(/3\.14/.test("3x14")); //false, ahora busca un punto de verdad
console.log(/3\.14/.test("3.14")); //true

console.log("----------Cuantificadores----------");

console.log(">* cero o más");
// x* el carácter anterior puede aparecer 0 o más veces
console.log(/^ab*c$/.test("ac")); //true, 0 veces la b
console.log(/^ab*c$/.test("abbbc")); //true, 3 veces la b

console.log(">+ una o más");
// x+ el carácter anterior debe aparecer al menos 1 vez
console.log(/^ab+c$/.test("ac")); //false
console.log(/^ab+c$/.test("abbbc")); //true

console.log(">? cero o una (opcional)");
// x? el carácter anterior es opcional (aparece 0 o 1 vez)
console.log(/^colou?r$/.test("color")); //true
console.log(/^colou?r$/.test("colour")); //true

console.log(">{n} {n,} {n,m} repeticiones exactas");
// x{3} exactamente 3 veces   x{3,} 3 o más veces   x{3,5} entre 3 y 5 veces
console.log(/^\d{3}$/.test("123")); //true
console.log(/^\d{3}$/.test("1234")); //false
console.log(/^\d{3,}$/.test("123456")); //true
console.log(/^\d{2,4}$/.test("12345")); //false, son 5

console.log(">Voraz (por defecto) y perezoso (?)");
// Por defecto * y + cogen todo lo que pueden (voraz). Añadiendo ? cogen lo mínimo (perezoso)
console.log("<b>uno</b> y <b>dos</b>".match(/<b>.*<\/b>/)[0]); //coge hasta el último </b>
console.log("<b>uno</b> y <b>dos</b>".match(/<b>.*?<\/b>/)[0]); //coge hasta el primer </b>

console.log("----------Grupos y alternativas----------");

console.log(">| alternativa (o)");
// a|b coincide con a o con b
console.log(/^(perro|gato)$/.test("gato")); //true
console.log(/^(perro|gato)$/.test("pez")); //false

console.log(">(...) grupo de captura");
// Los paréntesis agrupan y además guardan lo que han encontrado (posiciones 1, 2, ...)
let resultado = /(\d{2})\/(\d{2})\/(\d{4})/.exec("Nací el 02/03/2000");
console.log(resultado[0]); //toda la coincidencia
console.log(resultado[1]); //primer grupo: día
console.log(resultado[2]); //segundo grupo: mes
console.log(resultado[3]); //tercer grupo: año

console.log(">(?<nombre>...) grupo con nombre");
// Igual que el anterior pero accediendo por nombre en lugar de por número
let fecha = /(?<dia>\d{2})\/(?<mes>\d{2})\/(?<anio>\d{4})/.exec("02/03/2000");
console.log(fecha.groups.dia);
console.log(fecha.groups.mes);
console.log(fecha.groups.anio);

console.log(">(?:...) grupo sin captura");
// Agrupa pero NO guarda el resultado (más limpio cuando solo se necesita agrupar)
console.log(/(?:ab)+/.exec("ababab")); //un solo resultado, sin grupos

console.log(">\\1 referencia a un grupo anterior");
// \1 repite exactamente lo que capturó el grupo 1 (sirve para detectar repeticiones)
console.log(/(\w)\1/.test("hola")); //false, no hay letras dobles
console.log(/(\w)\1/.test("hoola")); //true, la o está repetida

console.log(">$1, $2 en replace");
// En replace, $1 $2... insertan lo capturado por cada grupo. Aquí se pasa dd/mm/aaaa a aaaa-mm-dd
console.log("02/03/2000".replace(/(\d{2})\/(\d{2})\/(\d{4})/, "$3-$2-$1"));

console.log("----------Flags (modificadores)----------");

console.log(">i ignorar mayúsculas y minúsculas");
console.log(/hola/.test("HOLA")); //false
console.log(/hola/i.test("HOLA")); //true

console.log(">g global (todas las coincidencias)");
console.log("a1b2c3".match(/\d/)); //solo la primera
console.log("a1b2c3".match(/\d/g)); //todas

console.log(">m multilínea");
// Con m, ^ y $ marcan el inicio y fin de CADA LÍNEA, no solo del texto entero
console.log("uno\ndos".match(/^\w+$/g)); //null
console.log("uno\ndos".match(/^\w+$/gm)); //["uno", "dos"]

console.log(">s el punto también coge saltos de línea");
console.log(/a.b/.test("a\nb")); //false
console.log(/a.b/s.test("a\nb")); //true

console.log(">Combinar flags");
console.log("Hola HOLA hola".match(/hola/gi));

console.log("----------Lookahead (mirar hacia delante)----------");

console.log(">(?=...) debe ir seguido de");
// x(?=y) coincide con x solo si va seguido de y (y no se incluye en el resultado)
console.log("100€ 200$ 300€".match(/\d+(?=€)/g)); //números seguidos de €

console.log(">(?!...) NO debe ir seguido de");
// x(?!y) coincide con x solo si NO va seguido de y
console.log("100€ 200$ 300€".match(/\d+(?!\d|€)/g)); //números que no son euros

console.log("----------Usos habituales con texto----------");

console.log(">Quitar espacios repetidos");
console.log("hola     mundo   JS".replace(/\s+/g, " "));

console.log(">Quitar espacios del principio y del final (trim)");
console.log("   hola mundo   ".replace(/^\s+|\s+$/g, ""));

console.log(">Quedarse solo con los números");
console.log("Tel: 612-345-678".replace(/\D/g, ""));

console.log(">Extraer todos los números de un texto");
console.log("Tengo 3 gatos, 12 perros y 1 pez".match(/\d+/g));

console.log(">Contar palabras");
console.log("hola mundo desde javascript".match(/\w+/g).length);

console.log(">Poner la primera letra de cada palabra en mayúscula");
console.log("hola mundo".replace(/\b\w/g, (letra) => letra.toUpperCase()));

console.log(">Extraer los correos de un texto");
console.log(
    "Escribe a ana@mail.com o a luis.perez@empresa.es".match(/[\w.+-]+@[\w-]+(\.[\w-]+)+/g)
);

console.log(">Ocultar los dígitos de una tarjeta menos los 4 últimos");
// \d(?=.*\d{4}) selecciona cada dígito que tiene detrás, más adelante, otros 4 dígitos seguidos.
// Así solo se salvan los 4 últimos, y todos los demás se sustituyen por *
console.log("1234 5678 9012 3456".replace(/\d(?=.*\d{4})/g, "*"));

console.log("----------Casos reales: validar formularios----------");
// En todos se usa ^ y $ para que TODO el texto cumpla el patrón.
// Las regex se guardan en una constante para que se lean mejor

console.log(">Nombre");
// Empieza por mayúscula, solo letras (con tildes y ñ). Admite nombres compuestos: "María José"
const reNombre = /^[A-ZÁÉÍÓÚÑ][a-záéíóúñü]+( [A-ZÁÉÍÓÚÑ][a-záéíóúñü]+)*$/;
console.log(reNombre.test("Ana")); //true
console.log(reNombre.test("María José")); //true
console.log(reNombre.test("ana")); //false, sin mayúscula inicial
console.log(reNombre.test("An4")); //false, tiene un número

console.log(">Apellidos");
// Igual que el nombre pero admite también guion: "Pérez-Reverte"
const reApellido = /^[A-ZÁÉÍÓÚÑ][a-záéíóúñü]+([ -][A-ZÁÉÍÓÚÑ][a-záéíóúñü]+)*$/;
console.log(reApellido.test("García López")); //true
console.log(reApellido.test("Pérez-Reverte")); //true
console.log(reApellido.test("garcía")); //false
console.log(reApellido.test("García_López")); //false, el _ no se permite

console.log(">Fecha dd/mm/aaaa");
// Día 01-31, mes 01-12, año de 4 cifras.
// OJO: solo comprueba el formato, aceptaría 31/02/2000 (para eso hay que usar Date)
const reFecha = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
console.log(reFecha.test("02/03/2000")); //true
console.log(reFecha.test("31/12/1999")); //true
console.log(reFecha.test("32/01/2000")); //false, día 32
console.log(reFecha.test("10/13/2000")); //false, mes 13
console.log(reFecha.test("2/3/2000")); //false, faltan los ceros
console.log(reFecha.test("31/02/2000")); //true (formato válido aunque la fecha no exista)

console.log(">Fecha aaaa-mm-dd (ISO)");
const reFechaISO = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
console.log(reFechaISO.test("2000-03-02")); //true
console.log(reFechaISO.test("2000-3-2")); //false

console.log(">Hora hh:mm (24 horas)");
// Hora 00-23, minutos 00-59
const reHora = /^([01]\d|2[0-3]):[0-5]\d$/;
console.log(reHora.test("16:06")); //true
console.log(reHora.test("24:00")); //false
console.log(reHora.test("12:60")); //false

console.log(">DNI");
// 8 números y una letra. Las letras I, O y U no se usan nunca. Con i admite minúsculas
const reDNI = /^\d{8}[A-HJ-NP-TV-Z]$/i;
console.log(reDNI.test("12345678Z")); //true
console.log(reDNI.test("12345678z")); //true, gracias a la flag i
console.log(reDNI.test("12345678U")); //false, la U no existe en DNI
console.log(reDNI.test("1234567Z")); //false, faltan números

console.log(">NIE");
// Empieza por X, Y o Z, 7 números y una letra
const reNIE = /^[XYZ]\d{7}[A-Z]$/i;
console.log(reNIE.test("X1234567L")); //true
console.log(reNIE.test("A1234567L")); //false

console.log(">Correo electrónico");
// usuario (letras, números, . _ + -) + @ + dominio + . + extensión de 2 o más letras
const reEmail = /^[\w.+-]+@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}$/;
console.log(reEmail.test("usuario@correo.com")); //true
console.log(reEmail.test("nombre.apellido@empresa.co.uk")); //true
console.log(reEmail.test("usuario@correo")); //false, sin extensión
console.log(reEmail.test("usuario@.com")); //false, dominio vacío
console.log(reEmail.test("usuario correo@mail.com")); //false, espacio
console.log(reEmail.test("@correo.com")); //false, sin usuario

console.log(">Teléfono móvil o fijo español");
// Opcional +34, empieza por 6, 7, 8 o 9 y tiene 9 cifras (con espacios opcionales)
const reTelefono = /^(\+34 ?)?[6789]\d{2}( ?\d{3}){2}$/;
console.log(reTelefono.test("612345678")); //true
console.log(reTelefono.test("612 345 678")); //true
console.log(reTelefono.test("+34 612345678")); //true
console.log(reTelefono.test("512345678")); //false, no empieza por 6-9
console.log(reTelefono.test("61234567")); //false, faltan cifras

console.log(">Código postal español");
// 5 cifras; los dos primeros dígitos son la provincia (01 a 52)
const reCP = /^(0[1-9]|[1-4]\d|5[0-2])\d{3}$/;
console.log(reCP.test("03001")); //true
console.log(reCP.test("28080")); //true
console.log(reCP.test("53000")); //false, no existe la provincia 53
console.log(reCP.test("00100")); //false

console.log(">Contraseña segura");
// Mínimo 8 caracteres, con al menos una minúscula, una mayúscula, un número y un símbolo.
// Cada (?=.*...) comprueba una condición sin consumir texto
const rePassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/;
console.log(rePassword.test("Abcdef1!")); //true
console.log(rePassword.test("abcdef1!")); //false, sin mayúscula
console.log(rePassword.test("Abcdefg!")); //false, sin número
console.log(rePassword.test("Ab1!")); //false, muy corta

console.log(">Nombre de usuario");
// Empieza por letra, después letras, números o _ y entre 4 y 16 caracteres en total
const reUsuario = /^[a-zA-Z]\w{3,15}$/;
console.log(reUsuario.test("juan_23")); //true
console.log(reUsuario.test("1juan")); //false, empieza por número
console.log(reUsuario.test("jua")); //false, muy corto
console.log(reUsuario.test("juan perez")); //false, espacio

console.log(">URL");
// http o https (la s es opcional), dominio y ruta opcional
const reURL = /^https?:\/\/[\w-]+(\.[\w-]+)+(\/[\w\-./?%&=]*)?$/;
console.log(reURL.test("https://www.ejemplo.com")); //true
console.log(reURL.test("http://ejemplo.com/pagina?id=3")); //true
console.log(reURL.test("ftp://ejemplo.com")); //false
console.log(reURL.test("https://ejemplo")); //false, sin extensión

console.log(">Dirección IP v4");
// 4 números separados por puntos, cada uno de 0 a 255
const reIP = /^((25[0-5]|2[0-4]\d|1?\d?\d)\.){3}(25[0-5]|2[0-4]\d|1?\d?\d)$/;
console.log(reIP.test("192.168.1.1")); //true
console.log(reIP.test("255.255.255.0")); //true
console.log(reIP.test("256.1.1.1")); //false, 256 se pasa de 255
console.log(reIP.test("192.168.1")); //false, faltan números

console.log(">Matrícula española");
// 4 números y 3 consonantes (no se usan vocales ni Ñ ni Q), con espacio o guion opcional
const reMatricula = /^\d{4}[ -]?[BCDFGHJKLMNPRSTVWXYZ]{3}$/;
console.log(reMatricula.test("1234 BCD")); //true
console.log(reMatricula.test("1234BCD")); //true
console.log(reMatricula.test("1234 AEI")); //false, vocales

console.log(">Color hexadecimal");
// # seguido de 3 o 6 caracteres hexadecimales (0-9 y a-f)
const reColor = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i;
console.log(reColor.test("#fff")); //true
console.log(reColor.test("#1A2b3C")); //true
console.log(reColor.test("#12345")); //false, 5 caracteres
console.log(reColor.test("#ggg")); //false, la g no es hexadecimal