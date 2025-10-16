// bermejoDEV: Programa que simula el control de turnos en una partida de ajedrez
function iniciarPartida() {
    let turnoActual = 1;               // bermejoDEV: Contador que indica el número de turno actual
    const turnosMaximos = 10;          // bermejoDEV: Límite máximo de turnos de la partida

    // bermejoDEV: Mientras no se alcance el número máximo de turnos, el juego continúa
    while (turnoActual <= turnosMaximos) {
        // bermejoDEV: Si el turno corresponde a las blancas, se muestra su movimiento
        if (esTurnoBlancas(turnoActual)) {
            console.log(`Turno ${turnoActual} -> Mueven las ♟ negras`);
        } else {
            // bermejoDEV: En caso contrario, mueven las negras
            console.log(`Turno ${turnoActual} -> Mueven las ♙ blancas`);
        }
        turnoActual++; // bermejoDEV: Avanza al siguiente turno
    }

    // bermejoDEV: Mensaje final cuando se alcanza el número máximo de turnos
    console.log("Se alcanzó el número máximo de turnos; partida finalizada");
}

// bermejoDEV: Función que determina si el turno actual corresponde a las piezas blancas
function esTurnoBlancas(turno) {
    // bermejoDEV: Si el turno es impar, juegan las blancas
    return turno % 2 !== 0;
}

// bermejoDEV: Inicio del programa; se llama a la función principal para empezar la partida
iniciarPartida();
