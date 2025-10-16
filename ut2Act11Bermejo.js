/**
 * Devuelve los movimientos posibles según el tipo de pieza de ajedrez.
 * @param {string} pieza - Símbolo Unicode que representa la pieza (♕, ♖, ♗, ♘, ♙, ♔, ♚).
 * @returns {string[]} Lista de movimientos permitidos para esa pieza.
 */
// Comentario Pacheco: Esta función usa un switch para determinar los movimientos válidos de cada pieza.
// bermejoDEV: Se encarga de devolver un listado de movimientos en formato texto según la pieza recibida.
function movimientosPosibles(pieza) {
    switch (pieza) {
        case "♕":
            return ["horizontal", "vertical", "diagonal"];
        // Comentario Pacheco: La dama se mueve en todas las direcciones.
        // bermejoDEV: La dama combina los movimientos del alfil y la torre.

        case "♖":
            return ["horizontal", "vertical"];
        // Comentario Pacheco: La torre solo puede moverse en línea recta.
        // bermejoDEV: Su desplazamiento está limitado a filas y columnas.

        case "♗":
            return ["diagonales hacia adelante", "diagonales hacia atrás"];
        // Comentario Pacheco: El alfil se mueve solo en diagonal.
        // bermejoDEV: No puede cambiar de color de casilla durante la partida.

        case "♘":
            return ["L", "2 adelante 1 al lado", "2 al lado 1 adelante"];
        // Comentario Pacheco: El caballo se mueve en forma de L.
        // bermejoDEV: Es la única pieza que puede saltar sobre otras.

        case "♙":
            return ["una hacia adelante", "dos si es primer movimiento", "captura en diagonal"];
        // Comentario Pacheco: El peón avanza hacia adelante y captura en diagonal.
        // bermejoDEV: Solo puede avanzar, nunca retroceder.

        case "♔":
        case "♚":
            return ["una casilla en cualquier dirección", "enroque si es posible"];
        // Comentario Pacheco: El rey puede moverse una casilla o realizar el enroque.
        // bermejoDEV: Su protección es vital; el jaque mate finaliza la partida.

        default:
            return ["Movimiento desconocido"];
        // Comentario Pacheco: Si no se reconoce la pieza, se devuelve un mensaje de movimiento desconocido.
        // bermejoDEV: Maneja errores por piezas no válidas o símbolos desconocidos.
    }
}

/**
 * Muestra en consola los movimientos posibles de cada pieza en una lista.
 * @param {string[]} piezas - Array con los símbolos de las piezas a analizar.
 * @returns {void}
 */
// Comentario Pacheco: Esta función recorre el array de piezas y muestra sus movimientos posibles en la consola.
// bermejoDEV: Itera el conjunto de piezas y utiliza la función movimientosPosibles() para imprimir sus opciones.
function mostrarMovimientos(piezas) {
    for (const pieza of piezas) {
        const movimientos = movimientosPosibles(pieza);
        console.log(`Movimientos de ${pieza}: ${movimientos.join(", ")}`);
        // Comentario Pacheco: Muestra en una sola línea los movimientos de la pieza separándolos por comas.
        // bermejoDEV: Se concatenan los movimientos en un string legible para el usuario.
    }
}

// Comentario Pacheco: Ejemplo de ejecución con varias piezas.
// bermejoDEV: Se define un array de piezas y se llama a la función principal para mostrar sus posibles movimientos.
const piezas = ["♕", "♘", "♗", "♙", "♔", "❌"];
mostrarMovimientos(piezas);
