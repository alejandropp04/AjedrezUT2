// bermejoDEV: Programa que simula el control de turnos en una partida de ajedrez
// Comentario del autor: Correcto, el objetivo es controlar la secuencia de turnos mostrando qué jugador mueve en cada uno.
function iniciarPartida() {
    let turnoActual = 1;               // bermejoDEV: Contador que indica el número de turno actual
                                      // Comentario del autor: Esta variable se incrementa en cada iteración del bucle.
    const turnosMaximos = 10;          // bermejoDEV: Límite máximo de turnos de la partida
                                      // Comentario del autor: Podría modificarse fácilmente si quisiéramos partidas más largas o cortas.

    // bermejoDEV: Mientras no se alcance el número máximo de turnos, el juego continúa
    // Comentario del autor: El bucle while es ideal aquí porque no sabemos cuántos turnos se harán hasta que se llegue al máximo.
    while (turnoActual <= turnosMaximos) {
        // bermejoDEV: Si el turno corresponde a las blancas, se muestra su movimiento
        // Comentario del autor: Aquí creo que hay un pequeño error, porque las blancas deberían ser ♙ y las negras ♟. 
        if (esTurnoBlancas(turnoActual)) {
            console.log(`Turno ${turnoActual} -> Mueven las ♟ negras`);
        } else {
            // bermejoDEV: En caso contrario, mueven las negras
            // Comentario del autor: Y aquí sería al revés, deberían mover las blancas.
            console.log(`Turno ${turnoActual} -> Mueven las ♙ blancas`);
        }
        turnoActual++; // bermejoDEV: Avanza al siguiente turno
                       // Comentario del autor: Incrementa el contador para pasar al turno siguiente.
    }

    // bermejoDEV: Mensaje final cuando se alcanza el número máximo de turnos
    // Comentario del autor: Mensaje final que marca el fin de la simulación.
    console.log("Se alcanzó el número máximo de turnos; partida finalizada");
}

// bermejoDEV: Función que determina si el turno actual corresponde a las piezas blancas
// Comentario del autor: Usa el operador módulo (%) para decidir si el turno es par o impar.
function esTurnoBlancas(turno) {
    // bermejoDEV: Si el turno es impar, juegan las blancas
    // Comentario del autor: Correcto, aunque el nombre de la función podría llevar a confusión con el orden de los if en el main.
    return turno % 2 !== 0;
}

// bermejoDEV: Inicio del programa; se llama a la función principal para empezar la partida
// Comentario del autor: Punto de entrada del programa. Se ejecuta automáticamente al cargar el script.
iniciarPartida();
