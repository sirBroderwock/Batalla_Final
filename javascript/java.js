let nombre;
let raza;
let razaNombre;
let arma;
let armaNombre;
let botonEmpezar = document.getElementById("botonEmpezar");
let imagenDragon1 = document.getElementById("imagenDragon1");
let promptPlace = document.getElementById("promptPlace");
let botones = document.getElementById("botones");
let heroe = [];
//Form para nombre con botones Continuar y Reiniciar

let nombreForm = document.createElement("div");

let nombreForm__Label = document.createElement("label");
nombreForm__Label.for = "nombreForm__Input";
nombreForm__Label.classList.add("form-label");
nombreForm__Label.innerHTML =
  "Antes de empezar, por favor dinos cómo te quieres llamar.";

let nombreForm__Input = document.createElement("input");
nombreForm__Input.classList = "form-control form-control-lg";
nombreForm__Input.type = "text";
nombreForm__Input.placeholder = "Tu nombre poderoso aquí";
nombreForm__Input.ariaLabel = "Tu nombre aquí";
nombreForm__Input.id = "nombreForm__Input";

let grupoBotones = document.createElement("div");
grupoBotones.classList.add("col-10", "mx-auto");

let botonContinuar = document.createElement("button");
botonContinuar.classList.add("btn", "btn-secondary", "btn-large");
botonContinuar.type = "button";
botonContinuar.innerHTML = "Continuar";
botonContinuar.id = "botonContinuar";

let botonReiniciar = document.createElement("button");
botonReiniciar.classList.add("btn", "btn-secondary", "btn-large", "mx-3");
botonReiniciar.type = "button";
botonReiniciar.innerHTML = "Reiniciar";
botonReiniciar.id = "botonReiniciar";

nombreForm.appendChild(nombreForm__Label);
nombreForm.appendChild(nombreForm__Input);

grupoBotones.appendChild(botonContinuar);
grupoBotones.appendChild(botonReiniciar);

function agregarBotones() {
  botonEmpezar.remove();
  botones.appendChild(grupoBotones);
}

//Evento para boton de Empezar

botonEmpezar.onclick = () => {
  imagenDragon1.remove();
  tituloPrimero.innerHTML = "Bienvenido a la Batalla Final";
  promptPlace.classList.remove("col-4");
  promptPlace.classList.add("col-10", "justify-content-center");
  promptPlace.appendChild(nombreForm);
  agregarBotones();
};

//Botones Reset

function reload() {
  reload = location.reload();
}

function botonReiniciar__Empezar() {
  alerta.appendChild(botonReiniciar__P);
  alerta.appendChild(botonReiniciar__Si);
  alerta.appendChild(botonReiniciar__No);
}

function botonReiniciar__No__Remove() {
  alerta.removeChild(botonReiniciar__P);
  alerta.removeChild(botonReiniciar__Si);
  alerta.removeChild(botonReiniciar__No);
}

let botonReiniciar__Si = document.createElement("button");
botonReiniciar__Si.classList.add("btn", "btn-secondary", "btn-large", "mx-3");
botonReiniciar__Si.innerHTML = "Si";
botonReiniciar__Si.id = "botonReiniciar__Si";

let botonReiniciar__No = document.createElement("button");
botonReiniciar__No.classList.add("btn", "btn-secondary", "btn-large", "mx-3");
botonReiniciar__No.innerHTML = "No";
botonReiniciar__No.id = "botonReiniciar__No";

let botonReiniciar__P = document.createElement("p");
botonReiniciar__P.innerHTML = "¿Estas seguro de que quieres empezar de nuevo?";
botonReiniciar__P.id = "botonReiniciar__P";

botonReiniciar.addEventListener("click", botonReiniciar__Empezar, false);

botonReiniciar__Si.addEventListener("click", reload, false);
botonReiniciar__No.onclick = () => {
  botonReiniciar__No__Remove();
};

function alerta__Remove() {
  alerta__p.innerHTML = "";
  alerta__p.classList.remove("alerta__colores");
}

//Boton Continuar



botonContinuar.addEventListener("click", () => {
  if (nombreForm__Input.value == "") {
    alerta__p.innerHTML = "Porfavor ingresa tu nombre";
    alerta__p.classList.add(
      "mx-auto",
      "alerta__colores",
      "mt-3",
      "p-3",
      "text-center"
    );
  } else {
    alerta__Remove();
    heroe.push({ nombre: nombreForm__Input.value });
    console.log(heroe);
    let heroeStorage = JSON.stringify(heroe);
    localStorage.setItem("heroe", heroeStorage);
    if (document.body.contains(document.getElementById("botonReiniciar__P"))) {
      botonReiniciar__No__Remove();
    }
    nombreForm.remove();
    grupoBotones.remove();
    razaDivAppend();
  }
});


const heroNameRetrieve = JSON.parse(localStorage.getItem("heroe")).map(
  (nombreRetrieve) => nombreRetrieve.nombre || []);

//Intro para Raza

let razaDiv__P = document.createElement("div");
razaDiv__P.classList.add("col-8");

let razaDiv__Picture = document.createElement("div");
razaDiv__Picture.classList.add("col-4", "d-flex");

let raza__Coin__Picture = document.createElement("img");
raza__Coin__Picture.src = "images/coins.jpg";
raza__Coin__Picture.classList.add("img-fluid", "my-auto");

let razaPar__1 = document.createElement("p");
razaPar__1.innerHTML =
  "¡Hola " +
  heroNameRetrieve +
  "! <br>" +
  "Antes de empezar tu batalla contra el dragón, te haremos unas preguntas para decidir qué tipo de heroe eres.  ¿Bien?  ¡Empecemos!";

let razaPar__2 = document.createElement("p");
razaPar__2.innerHTML =
  "Te encuentras en un bosque mágico.  Estas caminando tranquilamente, pensando en cómo derrotarás tus enemigos." +
  "<br>" +
  "De pronto, te encuentras con una bolsa llena de monedas de oro en medio del camino." +
  "<br>" +
  "¿Qué haces con ella?";

//Cards para Raza

let razaPromptText = [
  { id: 1, text: "La dejas en el piso, pues no es tuya.", raza: "elfo" },
  {
    id: 2,
    text: "Te la Te la llevas y en la siguiente aldea te compras una cerveza.",
    raza: "enano",
  },
  {
    id: 3,
    text: "Te la llevas y te compras un caballo para que tu viaje sea más agradable.",
    raza: "humano",
  },
];

let razaForm__CardPlace = document.createElement("div");
razaForm__CardPlace.classList.add("row");

//carta Elfo

cartaElfo__Col = document.createElement("div");
cartaElfo__Col.classList.add("col-4");
cartaElfo__Div = document.createElement("div");
cartaElfo__Div.classList.add("card", "h-100", "text-center");
cartaElfo__Body = document.createElement("div");
cartaElfo__Body.classList.add("card-body", "d-flex", "flex-column");
cartaElfo__Text = document.createElement("p");
cartaElfo__Text.classList.add("my-auto");
cartaElfo__Text.innerHTML = razaPromptText
  .filter((el) => el.id == 1)
  .map((el) => el.text);
cartaElfo__Button = document.createElement("button");
cartaElfo__Button.classList.add("btn", "btn-secondary", "btn-large", "mt-auto");
cartaElfo__Button.type = "button";
cartaElfo__Button.innerHTML = "Opción 1";
cartaElfo__Button.id = "botonElfo";

cartaElfo__Col.appendChild(cartaElfo__Div);
cartaElfo__Div.appendChild(cartaElfo__Body);
cartaElfo__Body.appendChild(cartaElfo__Text);
cartaElfo__Body.appendChild(cartaElfo__Button);

//Carta Enano

cartaEnano__Col = document.createElement("div");
cartaEnano__Col.classList.add("col-4");
cartaEnano__Div = document.createElement("div");
cartaEnano__Div.classList.add("card", "h-100", "text-center");
cartaEnano__Body = document.createElement("div");
cartaEnano__Body.classList.add("card-body", "d-flex", "flex-column");
cartaEnano__Text = document.createElement("p");
cartaEnano__Text.innerHTML = razaPromptText
  .filter((el) => el.id == 3)
  .map((el) => el.text);
cartaEnano__Button = document.createElement("button");
cartaEnano__Button.classList.add(
  "btn",
  "btn-secondary",
  "btn-large",
  "mt-auto"
);
cartaEnano__Button.type = "button";
cartaEnano__Button.innerHTML = "Opción 2";
cartaEnano__Button.id = "botonEnano";

cartaEnano__Col.appendChild(cartaEnano__Div);
cartaEnano__Div.appendChild(cartaEnano__Body);
cartaEnano__Body.appendChild(cartaEnano__Text);
cartaEnano__Body.appendChild(cartaEnano__Button);

//Carta Humano

cartaHumano__Col = document.createElement("div");
cartaHumano__Col.classList.add("col-4");
cartaHumano__Div = document.createElement("div");
cartaHumano__Div.classList.add("card", "h-100", "text-center");
cartaHumano__Body = document.createElement("div");
cartaHumano__Body.classList.add("card-body", "d-flex", "flex-column");
cartaHumano__Text = document.createElement("p");
cartaHumano__Text.innerHTML = razaPromptText
  .filter((el) => el.id == 3)
  .map((el) => el.text);
cartaHumano__Button = document.createElement("button");
cartaHumano__Button.classList.add(
  "btn",
  "btn-secondary",
  "btn-large",
  "mt-auto"
);
cartaHumano__Button.type = "button";
cartaHumano__Button.innerHTML = "Opción 3";
cartaHumano__Button.id = "botonHumano";

cartaHumano__Col.appendChild(cartaHumano__Div);
cartaHumano__Div.appendChild(cartaHumano__Body);
cartaHumano__Body.appendChild(cartaHumano__Text);
cartaHumano__Body.appendChild(cartaHumano__Button);

razaForm__CardPlace.appendChild(cartaElfo__Col);
razaForm__CardPlace.appendChild(cartaEnano__Col);
razaForm__CardPlace.appendChild(cartaHumano__Col);

//Funcion para Raza

function razaDivAppend() {
  razaDiv__P.appendChild(razaPar__1);
  razaDiv__P.appendChild(razaPar__2);
  razaDiv__Picture.appendChild(raza__Coin__Picture);
  promptPlace.appendChild(razaDiv__P);
  promptPlace.appendChild(razaDiv__Picture);
  promptPlace.classList.remove("col-10");
  promptPlace.classList.add("d-flex", "flex-row", "col-12");
  botones.appendChild(razaForm__CardPlace);
  
    botonElfo__Function();
    botonEnano__Function();
    botonHumano__Function();

 }
// Botones de Raza

//Boton Elfo

function botonElfo__Function() {

  botonElfo = document.getElementById("botonElfo");

  botonElfo.onclick = () => {
    razaEscogida = "elfo";
    heroe.push({raza: razaEscogida});
    localStorage.setItem("heroe", JSON.stringify(heroe));
    promptPlace.removeChild(razaDiv__P);
    promptPlace.removeChild(razaDiv__Picture);
    botones.removeChild(razaForm__CardPlace);
  };
}

//Boton Enano
function botonEnano__Function() {

  let botonEnano = document.getElementById("botonEnano");
  
  botonEnano.onclick = () => {
    razaEscogida = "enano";
  heroe.push({raza: razaEscogida});
  localStorage.setItem("heroe", JSON.stringify(heroe));
    promptPlace.removeChild(razaDiv__P);
    promptPlace.removeChild(razaDiv__Picture);
    botones.removeChild(razaForm__CardPlace);
  };
}

function botonHumano__Function() {

  let botonElfo = document.getElementById("botonHumano");
  
  botonElfo.onclick = () => {
    razaEscogida = "humano";
  heroe.push({raza: razaEscogida});
  localStorage.setItem("heroe", JSON.stringify(heroe));
    promptPlace.removeChild(razaDiv__P);
    promptPlace.removeChild(razaDiv__Picture);
    botones.removeChild(razaForm__CardPlace);
  };
}

// Intro para Armas

let armaDiv__P = document.createElement("div");
armaDiv__P.classList.add("col-12");

let razaPar__1 = document.createElement("p");
razaPar__1.innerHTML = "Cuándo el rey te pidio que mataras al dragón, te dio a escoger de tres poderosas armas para poder derrotarlo.  Todas son excelentes, pero cada una es especial." +
"<br>" + 
"¿Cuál escogiste?";





// arma = parseInt(
//   prompt(
//     "Cuándo " +
//       "\n\n" +
//       "- La espada - Un arma para un caballero.  Filosa y capaz de desviar cualquier ataque físico del dragón" +
//       "\n\n" +
//       "- La lanza - el arma preferida de los cazadores de dragón.  No es muy buena para defenderte, pero sí es capaz de causar gran daño al dragón." +
//       "\n\n" +
//       "- El bastón mágico - Un arma proveniente de las islas mágicas, este bastón mágico, además de poder lanzar poderes desde una distancia, también tiene el efecto de minimizar el daño mágico que el dragón puede causarte." +
//       "\n\n" +
//       "¿Cuál escogerás?" +
//       "\n\n" +
//       "La espada: Teclea #1" +
//       "\n\n" +
//       "La lanza: Teclea #2" +
//       "\n\n" +
//       "El bastón mágico: Teclea #3"
//   )
// );

// if (arma == 1 || arma == 2 || arma == 3) {
// } else {
//   alert("Por favor ingresa un número entre el 1 y el 3 para continuar");
//   arma = parseInt(
//     prompt(
//       "Cuándo el rey te pidio que mataras al dragón, te dio a escoger de tres poderosas armas para poder derrotarlo.  Todas son excelentes, pero cada una es especial." +
//         "\n\n" +
//         "- La espada - Un arma para un caballero.  Filosa y capaz de desviar cualquier ataque físico del dragón" +
//         "\n\n" +
//         "- La lanza - el arma preferida de los cazadores de dragón.  No es muy buena para defenderte, pero sí es capaz de causar gran daño al dragón." +
//         "\n\n" +
//         "- El bastón mágico - Un arma proveniente de las islas mágicas, este bastón mágico, además de poder lanzar poderes desde una distancia, también tiene el efecto de minimizar el daño mágico que el dragón puede causarte." +
//         "\n\n" +
//         "¿Cuál escogerás?" +
//         "\n" +
//         "La espada: Teclea #1" +
//         "\n" +
//         "La lanza: Teclea #2" +
//         "\n" +
//         "El bastón mágico: Teclea #3"
//     )
//   );
// }

// if (arma == 1) {
//   armaNombre = "la espada";
// } else if (arma == 2) {
//   armaNombre = "la lanza";
// } else {
//   armaNombre = "el bastón mágico";
// }

// // switch (arma) {
// //   case 1:
// //     armaNombre = "la Espada";
// //   case 2:
// //     armaNombre = "la Lanza";
// //   case 3:
// //     armaNombre = "el Bastón Mágico";
// // }

// bienvenida = (valor1, valor2, valor3) => {
//   alert(
//     "¡Bienvenido a la aventura " +
//       valor1 +
//       "!" +
//       "\n" +
//       "Tú eres un fantástico " +
//       valor2 +
//       "" +
//       "\n" +
//       "y tu arma para dar batalla, es " +
//       valor3 +
//       "."
//   );
// };

// bienvenida(nombre, razaNombre, armaNombre);

// /* Objetos para crear valores de cada raza */

// class razaValores {
//   constructor(nombre, hitPoints, mana) {
//     this.nombre = nombre;
//     this.hitPoints = hitPoints;
//     this.mana = mana;
//   }
// }

// const elfoValores = new razaValores("elfo", 300, 300);
// const enanoValores = new razaValores("enano", 500, 100);
// const humanoValores = new razaValores("humano", 400, 200);

// /*Funcion para random Numbers */

// randomNumbers = (valor1) => {
//   let randomNumbers__1 = Math.floor(Math.random() * valor1);
//   return randomNumbers__1;
// };

// let fuerzaRandom = randomNumbers(50);
// let defensaRandom = randomNumbers(30);
// let defensa__Magica__Random = randomNumbers(20);
// let poder__Magico__Random = randomNumbers(50);

// /*Objetos para armas */

// class armaValores {
//   constructor(nombre, fuerza, defensa, defensa__Magica) {
//     this.nombre = nombre;
//     this.fuerza = fuerza;
//     this.defensa = defensa;
//     this.defensa__Magica = defensa__Magica;
//   }
// }

// const espadaValores = new armaValores(
//   "espada",
//   fuerzaRandom + 18,
//   defensaRandom,
//   defensa__Magica__Random - 5
// );

// const lanzaValores = new armaValores(
//   "lanza",
//   fuerzaRandom + 25,
//   defensaRandom - 5,
//   defensa__Magica__Random - 8
// );
// const bastonValores = new armaValores(
//   "baston mágico",
//   fuerzaRandom + 10,
//   defensaRandom - 10,
//   defensa__Magica__Random + 25
// );

// /* Objeto para enemigos y dragons */

// class enemigo {
//   constructor(
//     nombre,
//     hitPoints,
//     mana,
//     fuerza,
//     defensa,
//     poderMagico,
//     defensaMagica
//   ) {
//     this.nombre = nombre;
//     this.hitPoints = hitPoints;
//     this.mana = mana;
//     this.fuerza = fuerza;
//     this.defensa = defensa;
//     this.poderMagico = poderMagico;
//     this.defensaMagica = defensaMagica;
//   }
// }

// const dragon = new enemigo(
//   "dragon",
//   1500,
//   800,
//   fuerzaRandom + 30,
//   defensaRandom + 30,
//   poder__Magico__Random + 30,
//   defensa__Magica__Random + 20
// );

// console.log(dragon.nombre);
// console.log(dragon.poderMagico);

/*Tienda Mágica*/

// class pociones {
//   constructor(numeroId, nombre, precio, cantidad, efecto) {
//     this.numeroId = numeroId;
//     this.nombre = nombre;
//     this.precio = precio;
//     this.cantidad = cantidad;
//     this.efecto = efecto;
//   }
// }

// const pocion__Vida = new pociones(1, "Pocion de Vida", 20, 5, +50);
// const pocion__Defensa = new pociones(2, "Pocion de Defensa", 40, 5, +5);
// const pocion__Fuerza = new pociones(3, "Pocion de Fuerza", 40, 5, +5);

// const tienda = [pocion__Vida, pocion__Defensa, pocion__Fuerza];

// console.log(tienda);

// const tiendaNombres = tienda.map((el) => {
//   return {
//     nombre: el.nombre,
//     precio: el.precio,
//   };
// });

// console.log(tiendaNombres);

// let alertaNombres;

// for (tiendaNombresLista of tiendaNombres) {
//   alertaNombres +=
//     "\n" +
//     tiendaNombresLista.nombre +
//     " - " +
//     tiendaNombresLista.precio +
//     " oro" +
//     "\n";
// }

// alert(
//   "De pronto te encuentras con una tienda que vende:" + "\n" + alertaNombres
// );

// for (const listaTienda of tienda) {
//   const listaTiendaNombres = listaTienda.nombre;
//   listaTiendaNombres1 = listaTiendaNombres.concat("\n");
// }
// alert(listaTiendaNombres1);

// alert(
//   "De pronto te encuentras con un " +
//     dragon.nombre +
//     " con " +
//     dragon.hitPoints +
//     " HP de vida.  Además de eso, ves que su poder de batalla es " +
//     dragon.poderMagico +
//     " y eso, te espanta mucho."
// );
