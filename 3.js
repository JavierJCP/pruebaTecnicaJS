/*
O 3, Estimación Perdida 

Diego esun lider de proyectos, que muy Juicioso llevó el control de las estimaciones de las tareas asignadas a los diferentes equipos y a personas en un Excel, pero por desgracia el archivo quedó corrupto y no pudo ser rescatado.

Sin embargo, Diego tenía un resumen que entregaba a su jefe cada semana, donde le contaba por equipo, la cantidad de tareas que dicho equipo tenía, el promedio aritmético de las estimaciones de tareas definidas en horas, y la duración de la tarea con menor valor estimado 

Diego necesita saber para una presentación hoy con el cliente, ¿Cuál es la máxima duración que puede tener una de las tareas? Y te ha pedido ayuda para resolver el problema.

- Función descriptiva
Completa la fucntion que recibe la lista de equipos con 3 valores (N, R, T), y debe devolver una lista que representa la duración máxima de las tareas de cada equipo.

* equipo[i][o] = (N) El número de tareas asignadas en el equipo 
* equipo[i][1]=(T) El número de horas promedio de las tareas en el equipo
* equipo[i][2) =(R) La duración en horas de la tarea más pequeña en el equipo i

*/
// *******************SOLUCION****************************** */
// const teams = [[2,2,1], [3,2,1]]

// El equipo 0 tienen 2 tareas
// de promedio tarda en realizar cada tarea 2 horas
// la tarea mas pequeña tarda 1 hora
// si tenemos 2 tareas y de promedio tarda en realizar cada tarea 2 horas => en total serian 4 horas
// ¿Cuanto tarda la otra tarea? => 3 horas

// el equipo 1 tiene 3 tareas
// de promedio tarda en realizar cada tarea 2 horas
// la tarea mas pequeña tarda 1 hora
// tenemos 3 tares, de promedio cada tarea tarda 2 horas, tiempo total = 6 horas
// las otras 2 tareas tardarian 6-1=5 horas
// ¿Cuanto tarda la tarea maxima?
// como piden la maxima, podriamos decir que en el peor de los casos todas la tareas tardan 1 hora menos una que seria la mas grande
// la tara maxima seria: total horas - (total de tareas - 1)*(promedio horas por tarea)=> 6 - 2*1= 4
export function maxTaskDuration(teams) {
  return teams.map((team) => {
    const [N, T, R] = team;
    // calculamos el total de horas
    const ToalHours = N * T;
    // calculamos el total de horas de las tareas - la tarea maxima
    const shortestTasksTotal = R * (N - 1);

    return ToalHours - shortestTasksTotal;
  });
}
