'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) {
    return array; // Caso base: si el array tiene 0 o 1 elemento, ya está ordenado.
  }

  const pivot = array[0]; // Elegimos el primer elemento como pivote.
  const lesser = []; // Array para elementos menores al pivote.
  const greater = []; // Array para elementos mayores al pivote.

  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      lesser.push(array[i]);
    } else {
      greater.push(array[i]);
    }
  }

  return [...quickSort(lesser), pivot, ...quickSort(greater)];
}



function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  //okey probemos ahora
  if (array.length <= 1) {
    return array; // Caso base: si el array tiene 0 o 1 elemento, ya está ordenado.
  }

  const middle = Math.floor(array.length / 2); // Encontramos el índice medio del array.
  const left = array.slice(0, middle); // Dividimos el array en dos mitades.
  const right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

// Función auxiliar para combinar dos arrays ordenados.
function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
