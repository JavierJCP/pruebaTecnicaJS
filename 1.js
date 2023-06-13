/*
La NASA nos ha contratado y como empresa llevaremos a cabo nuestro primer robot a Marte. 
Nuestro robot se mueve 1 metro en cada dirección con el comando izquierda(L) Derecha (R) Arriba (U) Abajo (D). 
La NASA prepara una lista de indicaciones para el movimiento del robot desde la base de carga en el ejemplo marcado como punto 0

Sin embargo están preocupados porque en caso de una emergencia el robot puede regresar a tiempo a la base de carga y quieren que evaluemos el número de movimientos en un simulador, y les digamos la cantidad de instrucciones máximas que deberíamos enviar al robot cuando se encuentre en su punto mas lejano para que pueda regresar a la base. 

Calcule el número de instrucciones máximo que deberia enviarse al robot para que en algún punto del recorrido regrese a la base.

Función descriptiva
Complete la función abajo para completar la tarea requerida, la función tendrá una lista de planes a ejecutar, evalúe cada uno y retorne una lista con el número máximo de instrucciones

Restricciones
len(instruccion) <= 10000
*/
// *************************************************

// const ListOfMovements = ['L', 'R', 'U', 'D'];

// export function maxInstruccions(movements) {
//   let x = 0;
//   let y = 0;
//   let max = 0;

//   movements.forEach((mov) => {
//     if (mov === 'L') x--;
//     if (mov === 'R') x++;
//     if (mov === 'U') y++;
//     if (mov === 'D') y--;

//     const current = Math.abs(x) + Math.abs(y);
//     if (current > max) max = current;
//   });
//   return max;
// }

export function maxInstruccions(movements) {
  let distance = 0;
  let max = 0;

  movements.forEach((mov) => {
    if (mov === 'R' || mov === 'U') distance++;
    else distance--;

    const current = Math.abs(distance);
    if (current > max) max = current;
  });
  return max;
}
