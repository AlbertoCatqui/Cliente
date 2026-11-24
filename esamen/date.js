console.log("----------Constructores----------");

console.log(">Constructor vacío");
// new Date() crea un objeto con la fecha y hora actuales del sistema
let fecha = new Date();
console.log(fecha);

console.log(">Constructor con string ISO (año-mes-dia)");
// new Date("AAAA-MM-DD") crea la fecha a partir de un texto en formato ISO.
// Usar siempre dos dígitos en mes y día, otros formatos dependen del navegador
console.log(new Date("2000-02-02"));

console.log(">Constructor con string y hora");
// new Date("AAAA-MM-DDTHH:MM:SS") igual que el anterior pero añadiendo la hora tras la "T"
console.log(new Date("2000-02-02T16:06:57"));

console.log(">Constructor año,mes,dia,...");
// new Date(año, mes, dia, horas, minutos, segundos, milisegundos)
// Solo año y mes son obligatorios; lo que no se indique vale 0 (el día vale 1)
console.log(new Date(2000, 2, 2)); //MES EMPIEZA EN 0!!!!!! (2 = marzo)
console.log(new Date(2000, 2, 2, 16, 6, 57));
console.log(new Date(2000, 2, 2, 16, 6, 57, 500));

console.log(">Constructor Milisegundos");
// new Date(ms) crea la fecha sumando esos milisegundos a 1/1/1970 00:00:00 UTC (época Unix)
console.log(new Date(0));
console.log(new Date(1));
console.log(new Date(750915325480));

console.log(">Constructor copia de otra fecha");
// new Date(otraFecha) crea un objeto nuevo e independiente con el mismo valor
console.log(new Date(fecha));

console.log(">Fecha inválida");
// Si el texto no se puede interpretar, se obtiene "Invalid Date"
console.log(new Date("hola"));
// isNaN sobre una fecha inválida devuelve true (su valor numérico es NaN)
console.log(isNaN(new Date("hola")));

console.log("----------Funciones estáticas----------");

console.log(">Date.now");
// Date.now() devuelve los milisegundos transcurridos desde 1/1/1970 hasta ahora.
// No necesita crear un objeto Date ni recibe parámetros
console.log(Date.now());

console.log(">Date.parse");
// Date.parse("texto") convierte un string de fecha a milisegundos desde 1/1/1970.
// Devuelve NaN si el texto no es válido
console.log(Date.parse("2006-07-04"));

console.log(">Date.UTC");
// Date.UTC(año, mes, dia, ...) igual que el constructor con números,
// pero interpreta los valores como hora UTC y devuelve milisegundos
console.log(Date.UTC(2000, 2, 2));

console.log("----------Get y Set----------");
fecha = new Date(2000, 2, 2, 16, 6, 57, 500);

console.log(">GetFullYear / SetFullYear");
// getFullYear() devuelve el año con 4 dígitos
console.log(fecha.getFullYear());
// setFullYear(año) cambia el año de la fecha
fecha.setFullYear(1995);
console.log(fecha.getFullYear());

console.log(">GetMonth / SetMonth");
// getMonth() devuelve el mes de 0 (Enero) a 11 (Diciembre)
console.log(fecha.getMonth());
// setMonth(mes) cambia el mes (0-11)
fecha.setMonth(7);
console.log(fecha.getMonth());

console.log(">GetDay");
// getDay() devuelve el día de la semana de 0 (Domingo) a 6 (Sábado). No tiene set
console.log(fecha.getDay());

console.log(">GetDate / SetDate");
// getDate() devuelve el día del mes (1-31)
console.log(fecha.getDate());
// setDate(dia) cambia el día del mes
fecha.setDate(6);
console.log(fecha.getDate());

console.log(">GetHours / SetHours");
// getHours() devuelve la hora (0-23)
console.log(fecha.getHours());
// setHours(horas) cambia la hora
fecha.setHours(13);
console.log(fecha.getHours());

console.log(">GetMinutes / SetMinutes");
// getMinutes() devuelve los minutos (0-59)
console.log(fecha.getMinutes());
// setMinutes(minutos) cambia los minutos
fecha.setMinutes(27);
console.log(fecha.getMinutes());

console.log(">GetSeconds / SetSeconds");
// getSeconds() devuelve los segundos (0-59)
console.log(fecha.getSeconds());
// setSeconds(segundos) cambia los segundos
fecha.setSeconds(45);
console.log(fecha.getSeconds());

console.log(">GetMilliseconds / SetMilliseconds");
// getMilliseconds() devuelve los milisegundos (0-999)
console.log(fecha.getMilliseconds());
// setMilliseconds(ms) cambia los milisegundos
fecha.setMilliseconds(750);
console.log(fecha.getMilliseconds());

console.log(">GetTime / SetTime");
// getTime() devuelve la fecha completa como milisegundos desde 1/1/1970
console.log(fecha.getTime());
// setTime(ms) cambia la fecha entera a partir de milisegundos
fecha.setTime(750915325480);
console.log(fecha.getTime());
console.log(fecha);

console.log(">SetMonth con valores fuera de rango (se desborda)");
// Si un valor se sale de rango, JavaScript ajusta el resto de campos solo
fecha = new Date(2000, 0, 31);
fecha.setMonth(12); //Mes 12 = Enero del año siguiente
console.log(fecha);

console.log(">SetDate con valores fuera de rango");
// Truco habitual para sumar días: setDate(getDate() + n)
fecha = new Date(2000, 0, 31);
fecha.setDate(fecha.getDate() + 10);
console.log(fecha);

console.log("----------Versiones UTC----------");
// Todas las funciones get/set tienen una versión UTC que trabaja con la hora UTC
// en lugar de la hora local del navegador
fecha = new Date("2000-02-02T16:06:57Z");

console.log(">GetUTCFullYear, GetUTCMonth, GetUTCDate, GetUTCDay");
// Igual que getFullYear, getMonth, getDate y getDay pero en UTC
console.log(fecha.getUTCFullYear());
console.log(fecha.getUTCMonth());
console.log(fecha.getUTCDate());
console.log(fecha.getUTCDay());

console.log(">GetUTCHours, GetUTCMinutes, GetUTCSeconds, GetUTCMilliseconds");
// Igual que getHours, getMinutes, getSeconds y getMilliseconds pero en UTC
console.log(fecha.getUTCHours());
console.log(fecha.getUTCMinutes());
console.log(fecha.getUTCSeconds());
console.log(fecha.getUTCMilliseconds());

console.log(">SetUTCHours (también existen setUTCFullYear, setUTCMonth, etc.)");
// setUTCHours(horas) cambia la hora en UTC
fecha.setUTCHours(20);
console.log(fecha.getUTCHours());

console.log(">GetTimezoneOffset");
// getTimezoneOffset() devuelve la diferencia en minutos entre la hora local y UTC.
// En España es -60 en invierno y -120 en verano
console.log(fecha.getTimezoneOffset());

console.log("----------Conversión a texto----------");
fecha = new Date(2000, 2, 2, 16, 6, 57);

console.log(">ToString");
// toString() devuelve fecha y hora completas en texto, con zona horaria
console.log(fecha.toString());

console.log(">ToDateString");
// toDateString() devuelve solo la parte de la fecha en texto
console.log(fecha.toDateString());

console.log(">ToTimeString");
// toTimeString() devuelve solo la parte de la hora en texto, con zona horaria
console.log(fecha.toTimeString());

console.log(">ToISOString");
// toISOString() devuelve el texto en formato ISO 8601 y siempre en UTC (AAAA-MM-DDTHH:MM:SS.mmmZ)
console.log(fecha.toISOString());

console.log(">ToJSON");
// toJSON() devuelve lo mismo que toISOString; lo usa JSON.stringify
console.log(fecha.toJSON());

console.log(">ToUTCString");
// toUTCString() devuelve el texto de la fecha en UTC con formato de cabecera HTTP
console.log(fecha.toUTCString());

console.log(">ToLocaleDateString");
// toLocaleDateString(idioma, opciones) devuelve la fecha con el formato del idioma indicado
console.log(fecha.toLocaleDateString());
console.log(fecha.toLocaleDateString("es-ES"));
// El segundo parámetro permite elegir qué partes mostrar y cómo
console.log(
    fecha.toLocaleDateString("es-ES", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    })
);

console.log(">ToLocaleTimeString");
// toLocaleTimeString(idioma) devuelve solo la hora con el formato del idioma
console.log(fecha.toLocaleTimeString("es-ES"));

console.log(">ToLocaleString");
// toLocaleString(idioma) devuelve fecha y hora con el formato del idioma
console.log(fecha.toLocaleString("es-ES"));

console.log(">ValueOf");
// valueOf() devuelve los milisegundos desde 1/1/1970, igual que getTime()
console.log(fecha.valueOf());

console.log("----------Operaciones con fechas----------");
let inicio = new Date(2000, 0, 1);
let fin = new Date(2000, 0, 31);

console.log(">Comparar fechas");
// < y > funcionan directamente porque las fechas se convierten a milisegundos
console.log(inicio < fin);
console.log(inicio > fin);
// Para igualdad hay que comparar los milisegundos, porque === compara objetos, no valores
console.log(inicio.getTime() === fin.getTime());

console.log(">Restar fechas");
// Restar dos fechas da la diferencia en milisegundos
let diferencia = fin - inicio;
console.log(diferencia);
// Dividiendo entre ms por segundo, segundos por minuto, minutos por hora y horas por día se obtienen días
console.log(diferencia / (1000 * 60 * 60 * 24));

console.log(">Sumar días a una fecha");
// Se suma al día actual con getDate y se guarda con setDate
let mañana = new Date(2000, 0, 1);
mañana.setDate(mañana.getDate() + 1);
console.log(mañana);