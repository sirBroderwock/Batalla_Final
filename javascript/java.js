let nombre;
let raza = 0;
let razaNombre;
let arma = 0;
let armaNombre;

nombre = prompt("¡Hola! Cuál es tu nombre?");
while (nombre == "") {
  alert("Tienes que ingresar tu nombre");
  nombre = prompt("¡Hola! Cuál es tu nombre?");
}

alert(
  "¡Hola " +
    nombre +
    "!\n\nPrimero que nada, te haremos unas preguntas para decidir qué tipo de heroe eres.  ¿Bien?  ¡Empezamos!"
);

raza = parseInt(
  prompt(
    "Te encuentras en un bosque mágico.  Estas caminando hacía el dragón, pensando en cómo lo derrotarás.\nDe pronto, te encuentras una bolsa llena de monedas de oro en medio del camino.  Qué haces?\n\nLa dejas en el piso, pues no es tuya: Teclea 1\n\nTe la llevas y en la siguiente aldea te compras una cerveza: Teclea 2.\n\nTe la llevas y te compras un caballo para que tu viaje sea más agradable: Teclea 3."
  )
);

while (raza != 1 && raza != 2 && raza != 3) {
  alert("Por favor ingresa un número entre el 1 y el 3 para continuar");
  raza = parseInt(
    prompt(
      "Te encuentras en un bosque mágico.  Estas caminando hacía el dragón, pensando en cómo lo derrotarás.\nDe pronto, te encuentras una bolsa llena de monedas de oro en medio del camino.  Qué haces?\n\nLa dejas en el piso, pues no es tuya: Teclea 1\n\nTe la llevas y en la siguiente aldea te compras una cerveza: Teclea 2.\n\nTe la llevas y te compras un caballo para que tu viaje sea más agradable: Teclea 3."
    )
  );
}

switch (raza) {
  case 1:
    razaNombre = "Elfo";
  case 2:
    razaNombre = "Enano";
  case 3:
    razaNombre = "Humano";
}

arma = parseInt(
  prompt(
    "Cuándo el rey te pidio que mataras al dragón, te dio a escoger de tres poderosas armas para poder derrotarlo.  Todas son excelentes, pero cada una es especial.\n\n- La espada - Un arma para un caballero.  Filosa y capaz de desviar cualquier ataque físico del dragón\n\n- La lanza - la arma preferida de los cazadores de dragón.  No es muy buena para defenderte, pero sí es capaz de causar gran daño al dragón\n\n- El bastón mágico - Un arma proveniente de las islas mágicas, este bastón mágico, además de poder lanzar poderes desde una distancia, también tiene el efecto de minimizar el daño mágico que el dragón puede causarte.\n\n¿Cuál escogerás?\nLa espada: Teclea 1\nLa lanza: Teclea 2\nEl bastón mágico: Teclea 3"
  )
);

while (arma != 1 && arma != 2 && arma != 3) {
  alert("Por favor ingresa un número entre el 1 y el 3 para continuar");
  arma = parseInt(
    prompt(
      "Cuándo el rey te pidio que mataras al dragón, te dio a escoger de tres poderosas armas para poder derrotarlo.  Todas son excelentes, pero cada una es especial.\n\n- La espada - Un arma para un caballero.  Filosa y capaz de desviar cualquier ataque físico del dragón\n\n- La lanza - la arma preferida de los cazadores de dragón.  No es muy buena para defenderte, pero sí es capaz de causar gran daño al dragón\n\n- El bastón mágico - Un arma proveniente de las islas mágicas, este bastón mágico, además de poder lanzar poderes desde una distancia, también tiene el efecto de minimizar el daño mágico que el dragón puede causarte.\n\n¿Cuál escogerás?\nLa espada: Teclea 1\nLa lanza: Teclea 2\nEl bastón mágico: Teclea 3"
    )
  );
}

switch (arma) {
  case 1:
    armaNombre = "la Espada";
  case 2:
    armaNombre = "la Lanza";
  case 3:
    armaNombre = "el Bastón Mágico";
}

function bienvenida(valor1, valor2) {
  valor1 = raza;
  valor2 = arma;
}

alert(
  "Bienvenido " +
    nombre +
    "!" +
    "\n" +
    "Tu eres un fantástico " +
    razaNombre +
    "," +
    "\n" +
    "y tu arma para dar batalla es " +
    armaNombre
);

let grito = prompt(
  "Después de un largo viaje, ahora estas en frente de la cueva del dragón y el dragón a salido a pelear contigo.  Qué haces primero? +
    "\n" +
    "Le grito al dragón que salga: teclea 1" +
    "\n" +
    "Espero a que el dragón salga de su cueva: teclea 2"
);
