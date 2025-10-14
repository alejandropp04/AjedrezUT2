//Crear un programa que controle los turnos de la partida de ajedrez
function iniciarPartida(){
    let turnoActual = 1;
    const turnosMaximos = 10; //prueba comentar
    while (turnoActual <= turnosMaximos) {
        if(esTurnoBlancas(turnoActual)) {
            console.log(`Turno ${turnoActual} -> Mueven las ♟ negras`);
        }else{
            console.log(`Turno ${turnoActual} -> Mueven las ♙ blancas`);
        }
        turnoActual++;
    }
    console.log("Se alcanzó el número máximo de turnos; Partida finalizada");
}

function esTurnoBlancas(turno){
    return turno % 2 !== 0;
}

iniciarPartida();
