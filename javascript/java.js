let nombre;
let raza;
let razaNombre;
let arma;
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

raza = prompt(
  "Te encuentras en un bosque mágico.  Estas caminando hacía el dragón, pensando en cómo lo derrotarás." +
    "\n" +
    "De pronto, te encuentras una bolsa llena de monedas de oro en medio del camino.  Qué haces?" +
    "\n\n" +
    "La dejas en el piso, pues no es tuya: Teclea #1" +
    "\n\n" +
    "Te la llevas y en la siguiente aldea te compras una cerveza: Teclea #2." +
    "\n\n" +
    "Te la llevas y te compras un caballo para que tu viaje sea más agradable: Teclea #3."
);

if (raza == 1 || raza == 2 || raza == 3) {
} else {
  alert("Por favor ingresa un número entre el 1 y el 3 para continuar");
  raza = parseInt(
    prompt(
      "Te encuentras en un bosque mágico.  Estas caminando hacía el dragón, pensando en cómo lo derrotarás." +
        "\n" +
        "De pronto, te encuentras una bolsa llena de monedas de oro en medio del camino.  Qué haces?" +
        "\n\n" +
        "La dejas en el piso, pues no es tuya: Teclea #1" +
        "\n\n" +
        "Te la llevas y en la siguiente aldea te compras una cerveza: Teclea #2." +
        "\n\n" +
        "Te la llevas y te compras un caballo para que tu viaje sea más agradable: Teclea #3."
    )
  );
}

console.log(raza);

if (raza == 1) {
  razaNombre = "elfo";
} else if (raza == 2) {
  razaNombre = "enano";
} else {
  razaNombre = "humano";
}

// switch (raza) {
//   case 1:
//     razaNombre = "elfo";
//     break;
//   case 2:
//     razaNombre = "enano";
//     break;
//   case 3:
//     razaNombre = "humano";
//     break;
// }

console.log(razaNombre);

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
      "\n\n" +
      "La espada: Teclea #1" +
      "\n\n" +
      "La lanza: Teclea #2" +
      "\n\n" +
      "El bastón mágico: Teclea #3"
  )
);

if (arma == 1 || arma == 2 || arma == 3) {
} else {
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
        "La espada: Teclea #1" +
        "\n" +
        "La lanza: Teclea #2" +
        "\n" +
        "El bastón mágico: Teclea #3"
    )
  );
}

if (arma == 1) {
  armaNombre = "la espada";
} else if (arma == 2) {
  armaNombre = "la lanza";
} else {
  armaNombre = "el bastón mágico";
}

// switch (arma) {
//   case 1:
//     armaNombre = "la Espada";
//   case 2:
//     armaNombre = "la Lanza";
//   case 3:
//     armaNombre = "el Bastón Mágico";
// }

bienvenida = (valor1, valor2, valor3) => {
  alert(
    "¡Bienvenido a la aventura " +
      valor1 +
      "!" +
      "\n" +
      "Tú eres un fantástico " +
      valor2 +
      "" +
      "\n" +
      "y tu arma para dar batalla, es " +
      valor3 +
      "."
  );
};

bienvenida(nombre, razaNombre, armaNombre);

/* Objetos para crear valores de cada raza */

class razaValores {
  constructor(nombre, hitPoints, mana) {
    this.nombre = nombre;
    this.hitPoints = hitPoints;
    this.mana = mana;
  }
}

const elfoValores = new razaValores("elfo", 300, 300);
const enanoValores = new razaValores("enano", 500, 100);
const humanoValores = new razaValores("humano", 400, 200);

/*Funcion para random Numbers */

randomNumbers = (valor1) => {
  let randomNumbers__1 = Math.floor(Math.random() * valor1);
  return randomNumbers__1;
};

let fuerzaRandom = randomNumbers(50);
let defensaRandom = randomNumbers(30);
let defensa__Magica__Random = randomNumbers(20);
let poder__Magico__Random = randomNumbers(50);

console.log(poder__Magico__Random);

/*Objetos para armas */

class armaValores {
  constructor(nombre, fuerza, defensa, defensa__Magica) {
    this.nombre = nombre;
    this.fuerza = fuerza;
    this.defensa = defensa;
    this.defensa__Magica = defensa__Magica;
  }
}

const espadaValores = new armaValores(
  "espada",
  fuerzaRandom + 18,
  defensaRandom,
  defensa__Magica__Random - 5
);

const lanzaValores = new armaValores(
  "lanza",
  fuerzaRandom + 25,
  defensaRandom - 5,
  defensa__Magica__Random - 8
);
const bastonValores = new armaValores(
  "baston mágico",
  fuerzaRandom + 10,
  defensaRandom - 10,
  defensa__Magica__Random + 25
);

/* Objeto para enemigos y dragons */

class enemigo {
  constructor(
    nombre,
    hitPoints,
    mana,
    fuerza,
    defensa,
    poderMagico,
    defensaMagica
  ) {
    this.nombre = nombre;
    this.hitPoints = hitPoints;
    this.mana = mana;
    this.fuerza = fuerza;
    this.defensa = defensa;
    this.poderMagico = poderMagico;
    this.defensaMagica = defensaMagica;
  }
}

const dragon = new enemigo(
  "dragon",
  1500,
  800,
  fuerzaRandom + 30,
  defensaRandom + 30,
  poder__Magico__Random + 30,
  defensa__Magica__Random + 20
);

console.log(dragon.nombre);
console.log(dragon.poderMagico);

alert(
  "De pronto te encuentras con un " +
    dragon.nombre +
    " con " +
    dragon.hitPoints +
    " HP de vida.  Además de eso, ves que su poder de batalla es " +
    dragon.poderMagico +
    " y eso, te espanta mucho."
);
