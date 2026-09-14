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

// Dibuja el catálogo con la lista dada y avisa si no hay resultados
function renderZapatos(lista) {
  gridZapatos.innerHTML = "";
  lista.forEach((zapato) => {
    gridZapatos.append(crearTarjetaZapato(zapato));
  });
  sinResultados.hidden = lista.length > 0;
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

// ============================================================
// Filtros combinables: categoría, marca, talla y precio menor a
// Cada cambio re-filtra el catálogo completo.
// ============================================================

const botonesCategoria = document.querySelectorAll(".boton-filtro");
const filtroMarca = document.getElementById("filtro-marca");
const filtroTalla = document.getElementById("filtro-talla");
const filtroPrecio = document.getElementById("filtro-precio");
const sinResultados = document.getElementById("sin-resultados");

// Estado de los filtros ("todas" / null = ese filtro no aplica)
const filtros = {
  categoria: "todas",
  marca: "todas",
  talla: "todas",
  precioMaximo: null,
};

// Devuelve los zapatos que cumplen TODOS los filtros activos
function filtrarZapatos() {
  return zapatos.filter((zapato) => {
    const pasaCategoria =
      filtros.categoria === "todas" || zapato.categoria === filtros.categoria;
    const pasaMarca = filtros.marca === "todas" || zapato.marca === filtros.marca;
    const pasaTalla =
      filtros.talla === "todas" || zapato.talla === Number(filtros.talla);
    const pasaPrecio =
      filtros.precioMaximo === null || zapato.precio < filtros.precioMaximo;
    return pasaCategoria && pasaMarca && pasaTalla && pasaPrecio;
  });
}

// Llena el select de marcas de los filtros
function llenarFiltroMarcas() {
  marcas.forEach((marca) => {
    const opcion = document.createElement("option");
    opcion.value = marca.nombre;
    opcion.textContent = marca.nombre;
    filtroMarca.append(opcion);
  });
}

// Llena el select de tallas con las tallas únicas del catálogo
function llenarFiltroTallas() {
  const tallas = [...new Set(zapatos.map((zapato) => zapato.talla))].sort(
    (a, b) => a - b
  );
  tallas.forEach((talla) => {
    const opcion = document.createElement("option");
    opcion.value = talla;
    opcion.textContent = `Talla ${talla}`;
    filtroTalla.append(opcion);
  });
}

// Categoría: botones, uno solo marcado como activo
botonesCategoria.forEach((boton) => {
  boton.addEventListener("click", () => {
    filtros.categoria = boton.dataset.categoria;
    botonesCategoria.forEach((b) => b.classList.toggle("activo", b === boton));
    renderZapatos(filtrarZapatos());
  });
});

// Marca y talla: selects
filtroMarca.addEventListener("change", () => {
  filtros.marca = filtroMarca.value;
  renderZapatos(filtrarZapatos());
});

filtroTalla.addEventListener("change", () => {
  filtros.talla = filtroTalla.value;
  renderZapatos(filtrarZapatos());
});

// Precio: "menor a $X". Mientras se escribe se re-filtra (evento input)
filtroPrecio.addEventListener("input", () => {
  filtros.precioMaximo = filtroPrecio.value === "" ? null : Number(filtroPrecio.value);
  renderZapatos(filtrarZapatos());
});

// ============================================================
// Menú hamburguesa: abre/cierra el nav en móvil
// ============================================================

const botonMenu = document.getElementById("boton-menu");
const navPrincipal = document.getElementById("nav-principal");

function alternarMenu() {
  const abierto = navPrincipal.classList.toggle("abierto");
  botonMenu.setAttribute("aria-expanded", abierto);
}

botonMenu.addEventListener("click", alternarMenu);

// Al elegir una sección, el menú se guarda solo (útil en móvil)
navPrincipal.querySelectorAll("a").forEach((enlace) => {
  enlace.addEventListener("click", () => {
    navPrincipal.classList.remove("abierto");
    botonMenu.setAttribute("aria-expanded", "false");
  });
});

// ============================================================
// Ejecución inicial
// ============================================================

renderZapatos(zapatos);
renderMarcas();
llenarSelectZapatos();
llenarFiltroMarcas();
llenarFiltroTallas();

// ============================================================
// Validación del formulario de reserva:
// errores inline junto a cada campo, sin alert().
// Si es válido: mensaje de éxito + reset del formulario.
// ============================================================

const formReserva = document.getElementById("form-reserva");
const mensajeExito = document.getElementById("mensaje-exito");

const camposFormulario = [
  document.getElementById("nombre"),
  document.getElementById("email"),
  document.getElementById("telefono"),
  document.getElementById("zapato"),
  document.getElementById("talla"),
];

const REGEX_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const REGEX_TELEFONO = /^[0-9+\s()-]{7,15}$/;

// Muestra el error bajo el campo y lo resalta en rojo
function mostrarError(campo, texto) {
  document.getElementById(`error-${campo.id}`).textContent = texto;
  campo.classList.add("campo-invalido");
}

// Limpia el error de un campo
function limpiarError(campo) {
  document.getElementById(`error-${campo.id}`).textContent = "";
  campo.classList.remove("campo-invalido");
}

// Devuelve el texto del error de un campo ("" si es válido)
function validarCampo(campo) {
  const valor = campo.value.trim();
  switch (campo.id) {
    case "nombre":
      if (valor === "") return "Escribe tu nombre.";
      if (valor.length < 3) return "El nombre debe tener al menos 3 letras.";
      return "";
    case "email":
      if (valor === "") return "Escribe tu email.";
      if (!REGEX_EMAIL.test(valor)) {
        return "El email no tiene un formato válido (ej: nombre@correo.com).";
      }
      return "";
    case "telefono":
      if (valor === "") return "Escribe tu teléfono.";
      if (!REGEX_TELEFONO.test(valor)) {
        return "El teléfono debe tener entre 7 y 15 dígitos.";
      }
      return "";
    case "zapato":
      if (valor === "") return "Elige el zapato que quieres reservar.";
      return "";
    case "talla": {
      if (valor === "") return "Elige tu talla.";
      const talla = Number(valor);
      if (!Number.isInteger(talla) || talla < 20 || talla > 50) {
        return "La talla debe ser un número entre 20 y 50.";
      }
      return "";
    }
    default:
      return "";
  }
}

// Mientras el usuario escribe o cambia un campo, se limpia su error
camposFormulario.forEach((campo) => {
  campo.addEventListener("input", () => limpiarError(campo));
});

formReserva.addEventListener("submit", (evento) => {
  evento.preventDefault();
  let formularioValido = true;

  camposFormulario.forEach((campo) => {
    const textoError = validarCampo(campo);
    if (textoError === "") {
      limpiarError(campo);
    } else {
      mostrarError(campo, textoError);
      formularioValido = false;
    }
  });

  // Con algún error: no se envía y se oculta el mensaje de éxito
  if (!formularioValido) {
    mensajeExito.hidden = true;
    return;
  }

  formReserva.reset();
  mensajeExito.hidden = false;
});