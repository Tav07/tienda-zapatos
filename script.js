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
];

// Catálogo de zapatos. Categorías disponibles: running, casual, formal.
const zapatos = [
  {
    nombre: "Nike Revolution 7",
    marca: "Nike",
    categoria: "running",
    precio: 289900,
    talla: 41,
    descripcion:
      "Ligeros y transpirables, ideales para empezar a correr o para caminatas largas.",
    imagen: "images/nike-revolution-7.jpg",
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
    nombre: "Adidas Duramo SL",
    marca: "Adidas",
    categoria: "running",
    precio: 259900,
    talla: 40,
    descripcion:
      "Zapatillas ligeras con mediasuela EVA. Comodidad que aguanta el ritmo.",
    imagen: "images/adidas-duramo-sl.jpg",
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
    nombre: "New Balance 520 V8",
    marca: "New Balance",
    categoria: "running",
    precio: 319900,
    talla: 43,
    descripcion:
      "Amortiguación Fresh Foam y malla transpirable. Calidad de corredor exigente.",
    imagen: "images/new-balance-520-v8.jpg",
  },
  {
    nombre: "New Balance 373",
    marca: "New Balance",
    categoria: "casual",
    precio: 289900,
    talla: 39,
    descripcion:
      "Silueta retro de los años 70 con materiales modernos. Comodidad con alma vintage.",
    imagen: "images/new-balance-373.jpg",
  },
  {
    nombre: "Bata Daniel",
    marca: "Bata",
    categoria: "formal",
    precio: 199900,
    talla: 40,
    descripcion:
      "Zapato formal de cuero con suela ligera. Para la oficina y las ocasiones especiales.",
    imagen: "images/bata-daniel.jpg",
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