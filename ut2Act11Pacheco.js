/**
 * Simula una partida de ajedrez en consola controlando los turnos y mostrando mensajes informativos.
 * @returns {void}
 */
// Comentario Pacheco: Esta función ejecuta una partida con un número limitado de turnos, alternando entre blancas y negras.
function iniciarPartida() {
    let turnoActual = 1;                 // bermejoDEV: Variable que guarda el número del turno actual
                                         // Comentario Pacheco: Se inicializa en 1 para comenzar la partida desde el primer turno.

    const turnosMaximos = 10;            // bermejoDEV: Límite máximo de turnos antes de finalizar la partida
                                         // Comentario Pacheco: La partida termina automáticamente al llegar a 10 turnos.

    let movimientosValidos = 0;          // bermejoDEV: Contador de movimientos válidos realizados por las negras
                                         // Comentario Pacheco: Solo se incrementa cuando juegan las piezas negras.

    // bermejoDEV: El bucle se ejecuta mientras no se superen los turnos máximos
    // Comentario Pacheco: Controla el flujo de turnos hasta que se alcance el límite establecido.
    while (turnoActual <= turnosMaximos) {

        // bermejoDEV: Comprueba si el turno actual pertenece a las blancas o las negras
        // Comentario Pacheco: Llama a la función esTurnoBlancas() para determinar quién mueve.
        if (esTurnoBlancas(turnoActual)) {
            console.log(`Turno ${turnoActual} -> Mueven las ♟ negras`);
            // Comentario Pacheco: Aquí parece haber una confusión; debería mostrar “♙ blancas” si el turno es impar.
        } else {
            console.log(`Turno ${turnoActual} -> Mueven las ♙ blancas`);
            // Comentario Pacheco: Y este mensaje debería corresponder a las negras (posible inversión de lógica).
        }

        // bermejoDEV: Si el turno es par (turno de las negras), suma un movimiento válido
        // Comentario Pacheco: Se usa un operador ternario para incrementar solo en los turnos pares.
        movimientosValidos += turnoActual % 2 === 0 ? 1 : 0;

        // bermejoDEV: Cada 3 turnos, se muestra un recordatorio en consola
        // Comentario Pacheco: Buen detalle para simular notificaciones o alertas de tiempo.
        if (turnoActual % 3 === 0) {
            console.log("Recordatorio: revisa el reloj de juego.");
        }

        turnoActual++; // bermejoDEV: Incrementa el contador para pasar al siguiente turno
                       // Comentario Pacheco: Actualiza la variable para continuar la simulación.
    }

    // bermejoDEV: Mensajes finales al acabar la partida
    // Comentario Pacheco: Informa en consola del fin de la partida y muestra estadísticas.
    console.log("Se alcanzó el número máximo de turnos; Partida finalizada");
    console.log("Movimientos válidos de las negras: " + movimientosValidos);
}

/**
 * Determina si el turno actual pertenece a las piezas blancas.
 * @param {number} turno - Número del turno actual.
 * @returns {boolean} Devuelve true si el turno pertenece a las blancas (impar), false si es de las negras (par).
 */
// Comentario Pacheco: Esta función devuelve true para turnos impares, que se asocian a las blancas.
function esTurnoBlancas(turno) {
    // bermejoDEV: Devuelve true si el número de turno es impar (turno de las blancas)
    // Comentario Pacheco: Uso correcto del operador módulo para determinar la paridad del turno.
    return turno % 2 !== 0;
}

/**
 * Punto de entrada del programa: inicia la simulación de la partida de ajedrez.
 * @returns {void}
 */
// bermejoDEV: Llamada a la función principal para iniciar la simulación de la partida
// Comentario Pacheco: Se ejecuta automáticamente al cargar el script.
iniciarPartida();
