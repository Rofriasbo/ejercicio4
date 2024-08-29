// 4. Ordenamiento de un arreglo
function ordenarArreglo(arr) {
    // Ordenar el arreglo en orden ascendente y descendente
    return {
        ascendente: arr.slice().sort((a, b) => a - b),
        descendente: arr.slice().sort((a, b) => b - a)
    };
}
console.log(ordenarArreglo([5, 2, 9, 1, 5, 6 ,3,11,15,25,0,13])); 
// Salida: { ascendente: [0, 1,3,2, 5, 5, 6, 9, 11, 13, 15, 25], descendente: [25, 15,13,9, 6, 5, 5,3, 2, 1,0] }