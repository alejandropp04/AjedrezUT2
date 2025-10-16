// bermejoDEV: Programa que simula el control de turnos en una partida de ajedrez
// Comentario de Pacheco: Efectivamente, el programa controla los turnos alternando entre blancas y negras.
function iniciarPartida() {
    let turnoActual = 1;               // bermejoDEV: Contador que indica el número de turno actual
                                       // Comentario de Pacheco: Sirve para llevar la cuenta de en qué turno estamos.
    const turnosMaximos = 10;          // bermejoDEV: Límite máximo de turnos de la partida
                                       // Comentario de Pacheco: Límite que determina cuándo acaba la simulación.

    // bermejoDEV: Mientras no se alcance el número máximo de turnos, el juego continúa
    // Comentario de Pacheco: Se usa un bucle while porque el número de repeticiones depende del valor del contador.
    while (turnoActual <= turnosMaximos) {
        // bermejoDEV: Si el turno corresponde a las blancas, se muestra su movimiento
        // Comentario de Pacheco: Buen uso de una función auxiliar para decidir el turno. Aunque en este caso el texto de salida parece invertido (las blancas deberían mover ♙).
        if (esTurnoBlancas(turnoActual)) {
            console.log(`Turno ${turnoActual} -> Mueven las ♟ negras`);
        } else {
            // bermejoDEV: En caso contrario, mueven las negras
            // Comentario de Pacheco: Aquí debería ser el turno de las blancas para mantener la coherencia visual.
            console.log(`Turno ${turnoActual} -> Mueven las ♙ blancas`);
        }
        turnoActual++; // bermejoDEV: Avanza al siguiente turno
                       // Comentario de Pacheco: Incrementa el contador para pasar al siguiente ciclo del bucle.
    }

    // bermejoDEV: Mensaje final cuando se alcanza el número máximo de turnos
    // Comentario de Pacheco: Informa al usuario de que se ha alcanzado el límite y se detiene el programa.
    console.log("Se alcanzó el número máximo de turnos; partida finalizada");
}

// bermejoDEV: Función que determina si el turno actual corresponde a las piezas blancas
// Comentario de Pacheco: Usa el operador módulo para alternar los turnos entre blancas y negras.
function esTurnoBlancas(turno) {
    // bermejoDEV: Si el turno es impar, juegan las blancas
    // Comentario de Pacheco: Correcto, los turnos impares pertenecen a las blancas.
    return turno % 2 !== 0;
}

// bermejoDEV: Inicio del programa; se llama a la función principal para empezar la partida
// Comentario de Pacheco: Punto de entrada que ejecuta toda la lógica del programa.
iniciarPartida();
