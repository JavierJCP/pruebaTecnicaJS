/*
2. El programador perfeccionista

Ricardo es miembro de nuestro equipo, y aunque suele ser muy productivo, sufre de un impulso que le lleva a perfeccionar y reescribir una parte del trabajo que hace cada día.

Cada día es capaz de escribir F cantidad de funciones nueves, pero su impulso lo lleva el mismo día a borrar R cantidad de las funciones, y así cada día, increíblemente cuando termina su trabajo no vuelve a
refactorizar ninguna función, sino que envía el pull solicitar una revisión.

Todos aman el trabajo de Ricardo, pero el arquitecto del equipo está preocupado por el plazo (fecha de entrega) de las historias que le asigna a Ricardo, y te pide ayuda con un programa que determine si
Ricardo podrá cumplir con su presupuesto.

Para ello el arquitecto te entregará un número D correspondiente al número de días del plazo de entrega, T la cantidad de funciones totales que espera el cliente que realice Ricardo, F la cantidad de
funciones nuevas que escribirá Ricardo por día, R la cantidad de funciones que borrará Ricardo cada día al finalizar su trabajo.

Calcule si Ricardo puede o no cumplir con las tareas indicadas.

cierto Lo logrará
false No lo logrará

Función descriptiva 
Complete la función, que recibirá un arreglo de casos a evaluar por el arquitecto
*/

// ***************************************

// F cantidad de funciones nuevas que escribe Ricardo por dia
// R cantidad de funciones que borrar Ricardo cada dia al finalizar su trabajo
// D numero de dias del plazo de entrega
// T cantidad de funciones totales que espera el cliente que realice Ricardo

export function willRicardoSucceed(D, T, F, R) {
  const functionsPerDay = F - R;
  const functionsDone = functionsPerDay * D;
  return functionsDone >= T;
}
