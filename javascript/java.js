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
    "Te encuentras en un bosque mágico.  Estas caminando hacía el dragón, pensando en cómo lo derrotarás." +
      "\n" +
      "De pronto, te encuentras una bolsa llena de monedas de oro en medio del camino.  Qué haces?" +
      "\n\n" +
      "La dejas en el piso, pues no es tuya: Teclea 1" +
      "\n\n" +
      "Te la llevas y en la siguiente aldea te compras una cerveza: Teclea 2." +
      "\n\n" +
      "Te la llevas y te compras un caballo para que tu viaje sea más agradable: Teclea 3."
  )
);

while (raza != 1 && raza != 2 && raza != 3) {
  alert("Por favor ingresa un número entre el 1 y el 3 para continuar");
  raza = parseInt(
    prompt(
      "Te encuentras en un bosque mágico.  Estas caminando hacía el dragón, pensando en cómo lo derrotarás." +
        "\n" +
        "De pronto, te encuentras una bolsa llena de monedas de oro en medio del camino.  Qué haces?" +
        "\n\n" +
        "La dejas en el piso, pues no es tuya: Teclea 1" +
        "\n\n" +
        "Te la llevas y en la siguiente aldea te compras una cerveza: Teclea 2." +
        "\n\n" +
        "Te la llevas y te compras un caballo para que tu viaje sea más agradable: Teclea 3."
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
    "Cuándo el rey te pidio que mataras al dragón, te dio a escoger de tres poderosas armas para poder derrotarlo.  Todas son excelentes, pero cada una es especial." +
      "\n\n" +
      "- La espada - Un arma para un caballero.  Filosa y capaz de desviar cualquier ataque físico del dragón" +
      "\n\n" +
      "- La lanza - el arma preferida de los cazadores de dragón.  No es muy buena para defenderte, pero sí es capaz de causar gran daño al dragón." +
      "\n\n" +
      "- El bastón mágico - Un arma proveniente de las islas mágicas, este bastón mágico, además de poder lanzar poderes desde una distancia, también tiene el efecto de minimizar el daño mágico que el dragón puede causarte." +
      "\n\n" +
      "¿Cuál escogerás?" +
      "\n" +
      "La espada: Teclea 1" +
      "\n" +
      "La lanza: Teclea 2" +
      "\n" +
      "El bastón mágico: Teclea 3"
  )
);

while (arma != 1 && arma != 2 && arma != 3) {
  alert("Por favor ingresa un número entre el 1 y el 3 para continuar");
  arma = parseInt(
    prompt(
      "Cuándo el rey te pidio que mataras al dragón, te dio a escoger de tres poderosas armas para poder derrotarlo.  Todas son excelentes, pero cada una es especial." +
        "\n\n" +
        "- La espada - Un arma para un caballero.  Filosa y capaz de desviar cualquier ataque físico del dragón" +
        "\n\n" +
        "- La lanza - el arma preferida de los cazadores de dragón.  No es muy buena para defenderte, pero sí es capaz de causar gran daño al dragón." +
        "\n\n" +
        "- El bastón mágico - Un arma proveniente de las islas mágicas, este bastón mágico, además de poder lanzar poderes desde una distancia, también tiene el efecto de minimizar el daño mágico que el dragón puede causarte." +
        "\n\n" +
        "¿Cuál escogerás?" +
        "\n" +
        "La espada: Teclea 1" +
        "\n" +
        "La lanza: Teclea 2" +
        "\n" +
        "El bastón mágico: Teclea 3"
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

bienvenida = (valor1, valor2, valor3) => {
  alert(
    "Bienvenido " +
      valor1 +
      "!" +
      "\n" +
      "Tu eres un fantástico " +
      valor2 +
      "," +
      "\n" +
      "y tu arma para dar batalla es " +
      valor3 +
      "."
  );
};

bienvenida(nombre, razaNombre, armaNombre);
