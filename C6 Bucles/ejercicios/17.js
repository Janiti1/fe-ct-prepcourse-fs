function colors(color) {
  // La función recibe un color. Retorna el string correspondiente:
  // En caso que el color recibido sea "blue"   --> "This is blue".
  // En caso que el color recibido sea "red"    --> "This is red".
  // En caso que el color recibido sea "green"  --> "This is green".
  // En caso que el color recibido sea "orange" --> "This is orange".
  // Si no es ninguno de esos colores           --> "Color not found".
  // PISTA: utilizar el statement SWITCH.
  // Tu código:
  if (color === "blue")
    return "This is blue";
  else if (color === "red")
    return "This is red";
  else if (color === "green")
    return "This is green";
  else if (color === "orange")
    return "This is orange";
  else 
  return "Color not found";
}

module.exports = colors;
