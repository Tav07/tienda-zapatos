// ============================================================
// Datos de la tienda Octavo (Entrega 1)
// En la Entrega 2 estos arreglos se reemplazan por la API.
// ============================================================

// Marcas que importa Octavo. Cada zapato referencia su marca
// por nombre (campo "marca" del zapato).
const marcas = [
  {
    nombre: "Nike",
    descripcion:
      "Marca insignia del running mundial. Modelos ligeros con la amortiguación que usan los atletas profesionales.",
    pais: "Estados Unidos",
  },
  {
    nombre: "Adidas",
    descripcion:
      "El clásico alemán del deporte. Diseños que funcionan igual en la cancha que en la calle.",
    pais: "Alemania",
  },
  {
    nombre: "Puma",
    descripcion:
      "Deportiva con estilo urbano. Comodidad para el día a día con un look juvenil.",
    pais: "Alemania",
  },
  {
    nombre: "New Balance",
    descripcion:
      "Calzado de corredores exigentes. Amortiguación premium y durabilidad comprobada.",
    pais: "Estados Unidos",
  },
  {
    nombre: "Bata",
    descripcion:
      "Zapatos formales de cuero. Elegancia accesible para la oficina y las ocasiones especiales.",
    pais: "Suiza",
  },
  {
    nombre: "North Star",
    descripcion:
      "El clásico colombiano de tenis urbanos. Cuero y suela de goma que aguantan el uso diario.",
    pais: "Colombia",
  },
];

// Catálogo de zapatos. Categorías disponibles: running, casual, formal.
const zapatos = [
  {
    nombre: "Nike Revolution 8",
    marca: "Nike",
    categoria: "running",
    precio: 289900,
    talla: 41,
    descripcion:
      "Ligeros y transpirables, ideales para empezar a correr o para caminatas largas.",
    imagen: "images/nike-revolution-8.jpg",
  },
  {
    nombre: "Nike Air Max SC",
    marca: "Nike",
    categoria: "casual",
    precio: 359900,
    talla: 42,
    descripcion:
      "La cámara de aire clásica de Nike en un diseño versátil para el uso diario.",
    imagen: "images/nike-air-max-sc.jpg",
  },
  {
    nombre: "Adidas Duramo SL2",
    marca: "Adidas",
    categoria: "running",
    precio: 259900,
    talla: 40,
    descripcion:
      "Zapatillas ligeras con mediasuela EVA. Comodidad que aguanta el ritmo.",
    imagen: "images/adidas-duramo-sl2.jpg",
  },
  {
    nombre: "Adidas Grand Court",
    marca: "Adidas",
    categoria: "casual",
    precio: 279900,
    talla: 43,
    descripcion:
      "Estilo tenis retro en cuero sintético. Combinan con absolutamente todo.",
    imagen: "images/adidas-grand-court.jpg",
  },
  {
    nombre: "Adidas Runfalcon 5",
    marca: "Adidas",
    categoria: "running",
    precio: 239900,
    talla: 42,
    descripcion:
      "Amortiguación suave y suela con buen agarre. La favorita del entrenamiento diario.",
    imagen: "images/adidas-runfalcon-5.jpg",
  },
  {
    nombre: "Puma Smash V2",
    marca: "Puma",
    categoria: "casual",
    precio: 249900,
    talla: 41,
    descripcion:
      "Suela de goma clásica y cuero resistente. El modelo que nunca falla.",
    imagen: "images/puma-smash-v2.jpg",
  },
  {
    nombre: "Puma Softride Enzo NXT",
    marca: "Puma",
    categoria: "running",
    precio: 299900,
    talla: 44,
    descripcion:
      "Mediasuela Softride para pisadas suaves. Pensadas para kilómetros largos.",
    imagen: "images/puma-softride-enzo.jpg",
  },
  {
    nombre: "New Balance 5030",
    marca: "New Balance",
    categoria: "running",
    precio: 319900,
    talla: 43,
    descripcion:
      "Malla transpirable y amortiguación ligera. Comodidad para el running y el día a día.",
    imagen: "images/new-balance-5030.jpg",
  },
  {
    nombre: "New Balance 9060",
    marca: "New Balance",
    categoria: "casual",
    precio: 349900,
    talla: 39,
    descripcion:
      "Silueta chunky con estética ochentera. El modelo lifestyle más buscado.",
    imagen: "images/new-balance-9060.jpg",
  },
  {
    nombre: "North Star Court",
    marca: "North Star",
    categoria: "casual",
    precio: 179900,
    talla: 40,
    descripcion:
      "Tenis clásicos de cuero con suela de goma. El básico urbano que combina con todo.",
    imagen: "images/bata-north-star.jpg",
  },
  {
    nombre: "Bata Flex",
    marca: "Bata",
    categoria: "formal",
    precio: 189900,
    talla: 42,
    descripcion:
      "Flexibilidad total y acabado pulido. Elegancia a precio accesible.",
    imagen: "images/bata-flex.jpg",
  },
  {
    nombre: "Puma Rebound Joy",
    marca: "Puma",
    categoria: "casual",
    precio: 269900,
    talla: 38,
    descripcion:
      "Botines deportivos de caña alta, inspirados en el básquetbol clásico.",
    imagen: "images/puma-rebound-joy.jpg",
  },
];

// ============================================================
// Render dinámico: catálogo, marcas y select del formulario
// se generan recorriendo los arreglos de datos.
// ============================================================

// Referencias a los contenedores del DOM
const gridZapatos = document.getElementById("grid-zapatos");
const listaMarcas = document.getElementById("lista-marcas");
const selectZapato = document.getElementById("zapato");

// Formatea un precio en pesos colombianos: 289900 -> "$ 289.900"
function formatearPrecio(precio) {
  return `$ ${precio.toLocaleString("es-CO")}`;
}

// Crea la tarjeta <li> de un zapato con su estructura completa
function crearTarjetaZapato(zapato) {
  const tarjeta = document.createElement("li");
  tarjeta.className = "tarjeta";

  const imagen = document.createElement("img");
  imagen.src = zapato.imagen;
  imagen.alt = `Zapato ${zapato.nombre} de la marca ${zapato.marca}`;
  imagen.loading = "lazy";

  const cuerpo = document.createElement("div");
  cuerpo.className = "tarjeta-cuerpo";

  const titulo = document.createElement("h3");
  titulo.textContent = zapato.nombre;

  const descripcion = document.createElement("p");
  descripcion.textContent = zapato.descripcion;

  const pie = document.createElement("div");
  pie.className = "tarjeta-pie";

  const precio = document.createElement("span");
  precio.className = "tarjeta-precio";
  precio.textContent = formatearPrecio(zapato.precio);

  const talla = document.createElement("span");
  talla.className = "tarjeta-talla";
  talla.textContent = `Talla ${zapato.talla}`;

  pie.append(precio, talla);
  cuerpo.append(titulo, descripcion, pie);
  tarjeta.append(imagen, cuerpo);
  return tarjeta;
}

// Crea la tarjeta <li> de una marca (nombre, descripción y país)
function crearTarjetaMarca(marca) {
  const tarjeta = document.createElement("li");
  tarjeta.className = "tarjeta-marca";

  const titulo = document.createElement("h3");
  titulo.textContent = marca.nombre;

  const descripcion = document.createElement("p");
  descripcion.textContent = marca.descripcion;

  const pais = document.createElement("span");
  pais.className = "tarjeta-marca-pais";
  pais.textContent = marca.pais;

  tarjeta.append(titulo, descripcion, pais);
  return tarjeta;
}

// Llena el catálogo del grid
function renderCatalogo() {
  zapatos.forEach((zapato) => {
    gridZapatos.append(crearTarjetaZapato(zapato));
  });
}

// Llena la sección de marcas
function renderMarcas() {
  marcas.forEach((marca) => {
    listaMarcas.append(crearTarjetaMarca(marca));
  });
}

// Llena el <select> de zapatos del formulario de reserva
function llenarSelectZapatos() {
  zapatos.forEach((zapato) => {
    const opcion = document.createElement("option");
    opcion.value = zapato.nombre;
    opcion.textContent = `${zapato.nombre} — ${formatearPrecio(zapato.precio)}`;
    selectZapato.append(opcion);
  });
}

renderCatalogo();
renderMarcas();
llenarSelectZapatos();