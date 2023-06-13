/*
Números diferentes
Atuequipo de desarrollo el cliente les ha pedido realizar un algoritmo de indexación y optimización de almacenamiento en el proceso de inventario.

Sin embargoel equipo tiene problemas con un método que no saben como realizar de forma óptima y te han pedido ayuda para resolverlo. 

Siguiendo el Principio de responsabilidad única (SRP), vas a construir una función que tiene como única responsabilidad calcular la cantidad de números diferentes dentro de una lista dada. 

Función descriptiva
La función recibe la lista de tareas, y debe devolver la cantidad de valores únicos que existen.
*/

// *****************SOLUCION*******************

export function countUniqueNumbers(numbers) {
  const uniqueNumbers = new Set(numbers);

  return uniqueNumbers.size;
}

export function countUniqueNumbersFor(numbers) {
  const uniqueNumbers = {};

  for (let number of numbers) {
    uniqueNumbers[number] = true;
  }

  return Object.keys(uniqueNumbers).length;
}

export function countUniqueNumbersForEach(numbers) {
  const uniqueNumbers = {};
  return numbers.forEach((number) => {
    uniqueNumbers[number] = true;
    return uniqueNumbers;
  });
}
