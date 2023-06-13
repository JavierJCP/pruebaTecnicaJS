/*
La deuda
Una nueva aplicación de préstamos sin cuotas de manejo, ni Intereses, quiere probar una nueva modalidad de pagos en los préstamos, la misma consiste en que el primer día del préstamo la persona deba pagar solo 1 peso, y cada día que pasa deberá pagar el doble de lo que pagó el día anterior y así sucesivamente. El último día solo deberá pagar lo que le falte.

Los interesados en la aplicación quieren hacer un pequeño simulador, que permitan conocer la cantidad de días que se
requieren para pagar una deuda en totalidad con este sistema, dada la cantidad a prestar inicialmente.

Dado un número N deberás devolver un entero indicando la cantidad de días necesarios para resolverlo.

Función descriptiva 
Complete la función que recibe la lista de deudas, y debe devolver una lista que representa el número de días necesarios para pagar cada deuda.

*/

// ***************************SOLUCION***************************
// me presto 1 peso
// el primer dia pago 1 peso -> 1 dia

// me presto 2 pesos
// el primer dia pago 1 peso
// el segundo dia pagaria 2 pesos (pero solo pago 1)-> 2 dias

// me presto 3 pesos
// el primer dia pago 1 peso
// el sugno dia pago 2 pesos -> 2 dias

export function calaculateDaysToPayDebts(debs) {
  return debs.map((dev) => {
    let payment = 1; // peso
    let days = 0; // dias que han pasado
    let pendingDev = dev; // deuda pendiente

    while (pendingDev > 0) {
      days++;
      pendingDev -= payment;
      payment *= 2;
    }
    return days;
  });
}
