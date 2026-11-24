const filas = 3;
const columnas = 4;

const matriz = [];
for (let i = 0; i < filas; i++) {
    matriz.push([]);
    for (let j = 0; j < columnas; j++) {
        matriz[i].push(i * columnas + j + 1);
    }
}

for (let i = 0; i < filas; i++) {
    for (let j = 0; j < columnas; j++) {
        console.log(matriz[i][j]);
    }
    console.log();
}