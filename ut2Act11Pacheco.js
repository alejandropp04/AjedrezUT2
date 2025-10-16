// bermejoDEV: Programa que controla los turnos de una partida de ajedrez simulada en consola
function iniciarPartida() {
    let turnoActual = 1;                 // bermejoDEV: Variable que guarda el número del turno actual
    const turnosMaximos = 10;            // bermejoDEV: Límite máximo de turnos antes de finalizar la partida
    let movimientosValidos = 0;          // bermejoDEV: Contador de movimientos válidos realizados por las negras

    // bermejoDEV: El bucle se ejecuta mientras no se superen los turnos máximos
    while (turnoActual <= turnosMaximos) {
        // bermejoDEV: Comprueba si el turno actual pertenece a las blancas o las negras
        if (esTurnoBlancas(turnoActual)) {
            console.log(`Turno ${turnoActual} -> Mueven las ♟ negras`);
        } else {
            console.log(`Turno ${turnoActual} -> Mueven las ♙ blancas`);
        }

        // bermejoDEV: Si el turno es par (turno de las negras), suma un movimiento válido
        movimientosValidos += turnoActual % 2 === 0 ? 1 : 0;

        // bermejoDEV: Cada 3 turnos, se muestra un recordatorio en consola
        if (turnoActual % 3 === 0) {
            console.log("Recordatorio: revisa el reloj de juego.");
        }

        turnoActual++; // bermejoDEV: Incrementa el contador para pasar al siguiente turno
    }

    // bermejoDEV: Mensajes finales al acabar la partida
    console.log("Se alcanzó el número máximo de turnos; Partida finalizada");
    console.log("Movimientos válidos de las negras: " + movimientosValidos);
}

// bermejoDEV: Función que determina si el turno actual pertenece a las piezas blancas
function esTurnoBlancas(turno) {
    // bermejoDEV: Devuelve true si el número de turno es impar (turno de las blancas)
    return turno % 2 !== 0;
}

// bermejoDEV: Llamada a la función principal para iniciar la simulación de la partida
iniciarPartida();
