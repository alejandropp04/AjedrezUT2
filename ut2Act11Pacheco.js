//Crear un programa que controle los turnos de la partida de ajedrez
function iniciarPartida(){
    let turnoActual = 1;
    const turnosMaximos = 10;
    let movimientosValidos = 0; //Movimientos validos de negras

    while (turnoActual <= turnosMaximos) {
        if(esTurnoBlancas(turnoActual)) {
            console.log(`Turno ${turnoActual} -> Mueven las ♟ negras`);
        }else{
            console.log(`Turno ${turnoActual} -> Mueven las ♙ blancas`);
        }

        movimientosValidos += turnoActual % 2 === 0 ? 1 : 0;

        if(turnoActual % 3 === 0){
            console.log("Recordatorio: revisa el reloj de juego.");
        }

        turnoActual++;
    }
    console.log("Se alcanzó el número máximo de turnos; Partida finalizada");
    console.log("Movimientos validos de las negras: "+ movimientosValidos);
}

function esTurnoBlancas(turno){
    return turno % 2 !== 0;
}

iniciarPartida();