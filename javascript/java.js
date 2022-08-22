let nombre;
let raza;
let razaNombre;
let arma;
let armaNombre;
let botonEmpezar = document.getElementById("botonEmpezar");
let imagenDragon1 = document.getElementById("imagenDragon1");
let promptPlace = document.getElementById("promptPlace");
let botones = document.getElementById("botones");

class heroeIndex {
  constructor() {}
}

let heroe = new heroeIndex();
let heroeStorageMain = [];

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
    heroe.nombre = nombreForm__Input.value;
    console.log(heroe);
    heroeStorageMain.push(heroe);
    console.log(heroeStorageMain);
    let heroeStorage = JSON.stringify(heroeStorageMain);
    localStorage.setItem("heroe", heroeStorage);
    if (document.body.contains(document.getElementById("botonReiniciar__P"))) {
      botonReiniciar__No__Remove();
    }
    nombreForm.remove();
    grupoBotones.remove();
    razaDivAppend();
  }
});

//Intro para Raza

let razaDiv__P = document.createElement("div");
razaDiv__P.classList.add("col-8");

let razaDiv__Picture = document.createElement("div");
razaDiv__Picture.classList.add("col-4", "d-flex");

let raza__Coin__Picture = document.createElement("img");
raza__Coin__Picture.src = "images/coins.jpg";
raza__Coin__Picture.classList.add("img-fluid", "my-auto");

//Cards para Raza

let razaPromptText = [
  {
    id: 1,
    text: "La dejas en el piso, pues no es tuya.",
    raza: "elfo",
    img: "images/elfo.jpeg",
  },
  {
    id: 2,
    text: "La recoges y en la siguiente aldea te compras un six de cerveza.",
    raza: "enano",
    img: "images/enano.jpeg",
  },
  {
    id: 3,
    text: "Te la llevas y te compras un caballo para que tu viaje sea más agradable.",
    raza: "humano",
    img: "images/humano.jpeg",
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
  .filter((el) => el.id == 2)
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
function Index(el) {}
function razaDivAppend() {
  heroRetrieve = JSON.parse(localStorage.getItem("heroe"));

  heroNameValue = heroRetrieve[0].nombre;

  let razaPar__1 = document.createElement("p");
  razaPar__1.innerHTML =
    "¡Hola " +
    heroNameValue +
    "! <br>" +
    "Antes de empezar tu batalla contra el dragón, te haremos unas preguntas para decidir qué tipo de heroe eres.  ¿Bien?  ¡Empecemos!";

  let razaPar__2 = document.createElement("p");
  razaPar__2.innerHTML =
    "Te encuentras en un bosque mágico.  Estas caminando tranquilamente, pensando en cómo derrotarás tus enemigos." +
    "<br>" +
    "De pronto, te encuentras con una bolsa llena de monedas de oro en medio del camino." +
    "<br>" +
    "¿Qué haces con ella?";

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
    heroe.raza = "elfo";
    localStorage.setItem("heroe", JSON.stringify(heroeStorageMain));
    promptPlace.removeChild(razaDiv__P);
    promptPlace.removeChild(razaDiv__Picture);
    botones.removeChild(razaForm__CardPlace);
    armaDivAppend();
  };
}

//Boton Enano
function botonEnano__Function() {
  let botonEnano = document.getElementById("botonEnano");

  botonEnano.onclick = () => {
    heroe.raza = "enano";
    localStorage.setItem("heroe", JSON.stringify(heroeStorageMain));
    promptPlace.removeChild(razaDiv__P);
    promptPlace.removeChild(razaDiv__Picture);
    botones.removeChild(razaForm__CardPlace);
    armaDivAppend();
  };
}

function botonHumano__Function() {
  let botonHumano = document.getElementById("botonHumano");

  botonHumano.onclick = () => {
    heroe.raza = "humano";
    localStorage.setItem("heroe", JSON.stringify(heroeStorageMain));
    promptPlace.removeChild(razaDiv__P);
    promptPlace.removeChild(razaDiv__Picture);
    botones.removeChild(razaForm__CardPlace);
    armaDivAppend();
  };
}

// Intro para Armas

let armaDiv__P = document.createElement("div");
armaDiv__P.classList.add("col-12");

let armaPar__1 = document.createElement("p");
armaPar__1.innerHTML =
  "Cuándo el rey te pidio que mataras al dragón, te dio a escoger de tres poderosas armas para poder derrotarlo.  Todas son excelentes, pero cada una es especial." +
  "<br>" +
  "¿Cuál escogiste?";

let armaPromptText = [
  {
    id: 1,
    nombre: "Espada",
    text: "La espada del caballero Irtan.  Fue creada de un meteorito y el corazon de un grifo.  Es el arma de un heroe.  Filosa y capaz de desviar cualquier ataque físico con destreza.",
    img: "images/espada.jpeg",
  },
  {
    id: 2,
    nombre: "Lanza",
    text: "El arma preferida de los cazadores de dragones.  No es muy buena para defend, pero sí es capaz de causar gran daño a los enemigos.",
    img: "images/lanza.jpeg",
  },
  {
    id: 3,
    nombre: "Bastón mágico",
    text: "Un arma proveniente de las islas mágicas de Elkanor, este bastón mágico, además de poder lanzar bolas de fuego desde una gran distancia, también tiene el efecto de minimizar el daño mágico contra ti.",
    img: "images/baston.png",
  },
];

// Cartas para Armas

let armaForm__CardPlace = document.createElement("div");
armaForm__CardPlace.classList.add("row");

//carta Espada

cartaEspada__Col = document.createElement("div");
cartaEspada__Col.classList.add("col-4");
cartaEspada__Div = document.createElement("div");
cartaEspada__Div.classList.add("card", "h-100", "text-center");
cartaEspada__Img = document.createElement("img");
cartaEspada__Img.classList.add("card-img-top", "card_img_top_1");
cartaEspada__Img.style = "width:18";
cartaEspada__Img.src = armaPromptText
  .filter((el) => el.id == 1)
  .map((el) => el.img);
cartaEspada__Body = document.createElement("div");
cartaEspada__Body.classList.add("card-body", "d-flex", "flex-column");
cartaEspada__Titulo = document.createElement("h5");
cartaEspada__Titulo.classList.add("card-title");
cartaEspada__Titulo.innerHTML = armaPromptText
  .filter((el) => el.id == 1)
  .map((el) => el.nombre);
cartaEspada__Text = document.createElement("p");
cartaEspada__Text.classList.add("my-auto");
cartaEspada__Text.innerHTML = armaPromptText
  .filter((el) => el.id == 1)
  .map((el) => el.text);
cartaEspada__Button = document.createElement("button");
cartaEspada__Button.classList.add("btn", "btn-secondary", "btn-large", "mt-3");
cartaEspada__Button.type = "button";
cartaEspada__Button.innerHTML = "Opción 1";
cartaEspada__Button.id = "botonEspada";

cartaEspada__Col.appendChild(cartaEspada__Div);
cartaEspada__Div.appendChild(cartaEspada__Img);
cartaEspada__Div.appendChild(cartaEspada__Body);
cartaEspada__Body.appendChild(cartaEspada__Titulo);
cartaEspada__Body.appendChild(cartaEspada__Text);
cartaEspada__Body.appendChild(cartaEspada__Button);

//carta Lanza

cartaLanza__Col = document.createElement("div");
cartaLanza__Col.classList.add("col-4");
cartaLanza__Div = document.createElement("div");
cartaLanza__Div.classList.add("card", "h-100", "text-center");
cartaLanza__Img = document.createElement("img");
cartaLanza__Img.classList.add("card-img-top", "card_img_top_1");
cartaLanza__Img.src = armaPromptText
  .filter((el) => el.id == 2)
  .map((el) => el.img);
cartaLanza__Body = document.createElement("div");
cartaLanza__Body.classList.add("card-body", "d-flex", "flex-column");
cartaLanza__Titulo = document.createElement("h5");
cartaLanza__Titulo.classList.add("card-title");
cartaLanza__Titulo.innerHTML = armaPromptText
  .filter((el) => el.id == 2)
  .map((el) => el.nombre);
cartaLanza__Text = document.createElement("p");
cartaLanza__Text.classList.add("my-auto");
cartaLanza__Text.innerHTML = armaPromptText
  .filter((el) => el.id == 2)
  .map((el) => el.text);
cartaLanza__Button = document.createElement("button");
cartaLanza__Button.classList.add("btn", "btn-secondary", "btn-large", "mt-3");
cartaLanza__Button.type = "button";
cartaLanza__Button.innerHTML = "Opción 2";
cartaLanza__Button.id = "botonLanza";

cartaLanza__Col.appendChild(cartaLanza__Div);
cartaLanza__Div.appendChild(cartaLanza__Img);
cartaLanza__Div.appendChild(cartaLanza__Body);
cartaLanza__Body.appendChild(cartaLanza__Titulo);
cartaLanza__Body.appendChild(cartaLanza__Text);
cartaLanza__Body.appendChild(cartaLanza__Button);

//carta Baston

cartaBaston__Col = document.createElement("div");
cartaBaston__Col.classList.add("col-4");
cartaBaston__Div = document.createElement("div");
cartaBaston__Div.classList.add("card", "h-100", "text-center");
cartaBaston__Img = document.createElement("img");
cartaBaston__Img.classList.add("card-img-top", "card_img_top_1");
cartaBaston__Img.src = armaPromptText
  .filter((el) => el.id === 3)
  .map((el) => el.img);
cartaBaston__Body = document.createElement("div");
cartaBaston__Body.classList.add("card-body", "d-flex", "flex-column");
cartaBaston__Titulo = document.createElement("h5");
cartaBaston__Titulo.classList.add("card-title");
cartaBaston__Titulo.innerHTML = armaPromptText
  .filter((el) => el.id === 3)
  .map((el) => el.nombre);
cartaBaston__Text = document.createElement("p");
cartaBaston__Text.classList.add("my-auto");
cartaBaston__Text.innerHTML = armaPromptText
  .filter((el) => el.id === 3)
  .map((el) => el.text);
cartaBaston__Button = document.createElement("button");
cartaBaston__Button.classList.add("btn", "btn-secondary", "btn-large", "mt-3");
cartaBaston__Button.type = "button";
cartaBaston__Button.innerHTML = "Opción 3";
cartaBaston__Button.id = "botonBaston";

cartaBaston__Col.appendChild(cartaBaston__Div);
cartaBaston__Div.appendChild(cartaBaston__Img);
cartaBaston__Div.appendChild(cartaBaston__Body);
cartaBaston__Body.appendChild(cartaBaston__Titulo);
cartaBaston__Body.appendChild(cartaBaston__Text);
cartaBaston__Body.appendChild(cartaBaston__Button);

armaForm__CardPlace.appendChild(cartaEspada__Col);
armaForm__CardPlace.appendChild(cartaLanza__Col);
armaForm__CardPlace.appendChild(cartaBaston__Col);

//Funcion para Arma

function armaDivAppend() {
  armaDiv__P.appendChild(armaPar__1);
  promptPlace.appendChild(armaDiv__P);
  botones.appendChild(armaForm__CardPlace);
  botonEspada__Function();
  botonLanza__Function();
  botonBaston__Function();
}

//Funciones Botones Arma

function botonEspada__Function() {
  let botonEspada = document.getElementById("botonEspada");

  botonEspada.onclick = () => {
    heroe.arma = "espada";
    localStorage.setItem("heroe", JSON.stringify(heroeStorageMain));
    promptPlace.removeChild(armaDiv__P);
    botones.removeChild(armaForm__CardPlace);
    document.getElementById("tituloPrimero").innerHTML = "¡Bienvenido!";
    bienvenida__Heroe();
  };
}

function botonLanza__Function() {
  let botonLanza = document.getElementById("botonLanza");

  botonLanza.onclick = () => {
    heroe.arma = "lanza";
    localStorage.setItem("heroe", JSON.stringify(heroeStorageMain));
    promptPlace.removeChild(armaDiv__P);
    botones.removeChild(armaForm__CardPlace);
    document.getElementById("tituloPrimero").innerHTML = "¡Bienvenido!";
    bienvenida__Heroe();
  };
}

function botonBaston__Function() {
  let botonBaston = document.getElementById("botonBaston");

  botonBaston.onclick = () => {
    heroe.arma = "baston";
    localStorage.setItem("heroe", JSON.stringify(heroeStorageMain));
    promptPlace.removeChild(armaDiv__P);
    botones.removeChild(armaForm__CardPlace);
    document.getElementById("tituloPrimero").innerHTML = "¡Bienvenido!";
    bienvenida__Heroe();
  };
}

//Constants for Retrieving Storage

function bienvenida__Heroe() {
  heroRetrieve = JSON.parse(localStorage.getItem("heroe"));

  const heroRazaRetrieve = heroRetrieve[0].raza;

  const heroArmaRetrieve = heroRetrieve[0].arma;

  if (heroArmaRetrieve == "espada" || heroArmaRetrieve == "lanza") {
    heroArmaRetrieve__prefijo = "la";
  } else {
    heroArmaRetrieve__prefijo = "el";
  }

  let bienvenidaDiv = document.createElement("div");
  bienvenidaDiv.classList.add("col-12");
  let bienvenidaDiv__Img = document.createElement("img");
  bienvenidaDiv__Img.classList.add("img-fluid");
  bienvenidaDiv__Img.src = razaPromptText
    .filter((el) => el.raza === heroRazaRetrieve)
    .map((el) => el.img);
  let bienvenidaPar__1 = document.createElement("p");
  bienvenidaPar__1.innerHTML =
    "Bienvenido " +
    heroNameValue +
    ".  Has escogido ser un " +
    heroRazaRetrieve +
    ", y tu arma de preferencia es " +
    heroArmaRetrieve__prefijo +
    " " +
    heroArmaRetrieve +
    ".";

  promptPlace.classList.remove("d-flex", "flex-row");
  promptPlace.appendChild(bienvenidaDiv);
  promptPlace.appendChild(bienvenidaDiv__Img);
  bienvenidaDiv.appendChild(bienvenidaPar__1);
  valoresRaza__Juego();
  armasJuego();
  enemigosJuego();
  saveElementstoLocalStorage();

  console.log(heroeValores);
  console.log(armaValores__Heroe);
}

function saveElementstoLocalStorage() {
  let heroeStorage = JSON.stringify(heroeStorageMain);
  localStorage.setItem("heroe", heroeStorage);
  console.log(heroeStorageMain);
}
// /* Objetos para crear valores de cada raza */
let heroeValores;

function valoresRaza__Juego() {
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

  if (heroe.raza == "elfo") {
    heroeValores = elfoValores;
  } else if (heroe.raza == "enano") {
    heroeValores = enanoValores;
  } else {
    heroeValores = humanoValores;
  }
  heroeStorageMain.push(heroeValores);
}

/*Funcion para random Numbers */

randomNumbers = (valor1) => {
  let randomNumbers__1 = Math.floor(Math.random() * valor1);
  return randomNumbers__1;
};

let fuerzaRandom = randomNumbers(50);
let defensaRandom = randomNumbers(30);
let defensa__Magica__Random = randomNumbers(20);
let poder__Magico__Random = randomNumbers(50);

/*Function para armas */

let armaValores__Heroe;

function armasJuego() {
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

  if (heroe.arma == "espada") {
    armaValores__Heroe = espadaValores;
  } else if (heroe.arma == "lanza") {
    armaValores__Heroe = lanzaValores;
  } else {
    armaValores__Heroe = bastonValores;
  }
  heroeStorageMain.push(armaValores__Heroe);
}

/* Function para enemigos y dragons */

function enemigosJuego() {
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
  console.log(dragon);
  heroeStorageMain.push(dragon);
}

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
