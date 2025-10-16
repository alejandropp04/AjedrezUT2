// Programa que simula el control de turnos en una partida de ajedrez
function iniciarPartida() {
    let turnoActual = 1;               // Contador que indica el número de turno actual
    const turnosMaximos = 10;          // Límite máximo de turnos de la partida

    // Mientras no se alcance el número máximo de turnos, el juego continúa
    while (turnoActual <= turnosMaximos) {
        // Si el turno corresponde a las blancas, se muestra su movimiento
        if (esTurnoBlancas(turnoActual)) {
            console.log(`Turno ${turnoActual} -> Mueven las ♟ negras`);
        } else {
            // En caso contrario, mueven las negras
            console.log(`Turno ${turnoActual} -> Mueven las ♙ blancas`);
        }
        turnoActual++; // Avanza al siguiente turno
    }

    // Mensaje final cuando se alcanza el número máximo de turnos
    console.log("Se alcanzó el número máximo de turnos; partida finalizada");
}

// Función que determina si el turno actual corresponde a las piezas blancas
function esTurnoBlancas(turno) {
    // Si el turno es impar, juegan las blancas
    return turno % 2 !== 0;
}

// Inicio del programa: se llama a la función principal para empezar la partida
iniciarPartida();
