// 🟩 FASE 1
function movimientosPosibles(pieza) {
  // Usamos un switch para devolver los movimientos según la pieza
  switch (pieza) {
    case "♕": // Dama
      return ["horizontal", "vertical", "diagonal"];

    case "♖": // Torre
      return ["horizontal", "vertical"];

    case "♗": // Alfil
      return ["diagonales hacia adelante", "diagonales hacia atrás"];

    case "♘": // Caballo
      return ["L", "2 adelante 1 al lado", "2 al lado 1 adelante"];

    case "♙": // Peón
      return ["una hacia adelante", "dos si es primer movimiento", "captura en diagonal"];

    case "♔":
    case "♚": // Rey (blanco o negro)
      return ["una casilla en cualquier dirección", "enroque si es posible"];

    default:
      return ["Movimiento desconocido"];
  }
}

// 🟦 FASE 2
// Función para mostrar los movimientos de varias piezas
function mostrarMovimientos(piezas) {
  // Recorremos el array con un bucle for...of
  for (const pieza of piezas) {
    const movimientos = movimientosPosibles(pieza);
    console.log(`Movimientos de ${pieza}: ${movimientos.join(", ")}`);
  }
}

// 🧩 Ejemplo de uso
const piezas = ["♕", "♘", "♗", "♙", "♔", "❌"];
mostrarMovimientos(piezas);
