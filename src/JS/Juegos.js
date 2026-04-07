
const JUEGOS_POR_PAGINA = 6;      // Cuántas tarjetas cargar en cada bloque
const JUEGO_DESTACADO_ID = "ag4";  // id del juego que aparece en el hero

/* Estado interno del catálogo */
let vistaActual = "grid";   // "grid" o "lista"
let filtroActual = "todos";  // "todos", "actual" o "antiguo"
let busquedaActual = "";       // texto del buscador
let paginaActual = 0;        // índice del bloque cargado (para "cargar más")

const juegos = [
    {
        id: "ck3",
        titulo: "Crusader Kings III",
        descripcion: "Estrategia dinástica medieval. Gestiona tu linaje, forma alianzas y conquista reinos a través de generaciones.",
        imagen: "../Imagenes-juegos/Crusadersking3/Imagen-juego-1.png",
        tipo: "Estrategia"
    },
    {
        id: "cv1",
        titulo: "Civilization 1991",
        descripcion: "Estrategia 4X que fundó el género. Lidera una civilización desde la prehistoria hasta el espacio.",
        imagen: "../Imagenes/civilization1991.png",
        tipo: "RPG"
    },
    {
        id: "wt2",
        titulo: "Warcraft II: Tides of Darkness",
        descripcion: "Solidificó el RTS con fantasía épica. Orcos contra Humanos en batallas en tiempo real.",
        imagen: "../Imagenes/warcraft2.png",
        tipo: "RPG"
    },
    {
        id: "hm3",
        titulo: "Heroes of Might and Magic III",
        descripcion: "Estrategia por turnos y combate táctico de fantasía. Construye tu castillo y lidera héroes.",
        imagen: "../Imagenes/heroes of magic.png",
        tipo: "RPG"
    },
    {
        id: "ag4",
        titulo: "Age of Empires IV",
        descripcion: "Estrategia en tiempo real histórica. Lidera civilizaciones a través de eras épicas.",
        imagen: "../Imagenes/ag.png",
        tipo: "Estrategia"
    },
    {
        id: "tw3",
        titulo: "Total War: Warhammer III",
        descripcion: "Estrategia masiva por turnos con batallas tácticas colosales en tiempo real.",
        imagen: "../Imagenes/tw.png",
        tipo: "Estrategia"
    },
    {
        id: "stB",
        titulo: "Starcraft: Brood War",
        descripcion: "El RTS competitivo por excelencia. Construye tu ejército y domina las microtácticas de batalla.",
        imagen: "../Imagenes/st.png",
        tipo: "RPG"
    },
    {
        id: "mnl",
        titulo: "Manor Lords",
        descripcion: "Constructor de ciudades medievales con batallas tácticas masivas y economía realista.",
        imagen: "../Imagenes/mnl.png",
        tipo: "Estrategia"
    },
    {
        id: "xc2",
        titulo: "Xcom 2",
        descripcion: "Líder del género táctico por turnos. Combate alienígena por escuadrones.",
        imagen: "../Imagenes/xc2.png",
        tipo: "RPG"
    },
];

function iniciarHero() {
    const juego = juegos.find(j => j.id === JUEGO_DESTACADO_ID);
    if (!juego) return; // Si el id no existe, no hace nada

    // Rellenar contenido del hero desde el array
    document.getElementById("hero-titulo").textContent = juego.titulo;
    document.getElementById("hero-desc").textContent = juego.descripcion;
    document.getElementById("hero-img").src = juego.imagen;
    document.getElementById("hero-img").alt = juego.titulo;
    document.getElementById("hero-link").href = `juego.html?id=${juego.id}`;

    const wrapper = document.getElementById("hero-img-wrapper");
    const img = document.getElementById("hero-img");
    const maxTilt = 10; // grados máximos de inclinación

    wrapper.addEventListener("mousemove", (e) => {
        const rect = wrapper.getBoundingClientRect();
        // Posición del mouse dentro del contenedor normalizada entre -1 y 1
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;

        // Aplicar rotación suave al wrapper
        wrapper.style.transform = `
            perspective(800px)
            rotateY(${x * maxTilt}deg)
            rotateX(${-y * maxTilt}deg)
            scale(1.02)
        `;
    });

    wrapper.addEventListener("mouseleave", () => {
        // Vuelve a la posición original con transición
        wrapper.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg) scale(1)";
    });
}

function getJuegosFiltrados() {
    return juegos.filter(juego => {
        // Filtra por tipo
        const pasaFiltro = filtroActual === "todos" || juego.tipo === filtroActual;

        // Filtra por búsqueda (case-insensitive, en el título)
        const terminoBusqueda = busquedaActual.toLowerCase().trim();
        const pasaBusqueda = !terminoBusqueda || juego.titulo.toLowerCase().includes(terminoBusqueda);

        return pasaFiltro && pasaBusqueda;
    });
}

function crearTarjetaGrid(juego) {
    const enlace = document.createElement("a");
    enlace.href = `juego.html?id=${juego.id}`;
    enlace.className = "juego-card";

    // Overlay de color para el hover
    const overlay = document.createElement("div");
    overlay.className = "card-overlay";

    // Imagen
    const img = document.createElement("img");
    img.src = juego.imagen;
    img.alt = juego.titulo;

    // Cuerpo de texto
    const body = document.createElement("div");
    body.className = "card-body";

    const titulo = document.createElement("h3");
    titulo.className = "card-titulo";
    // Si hay búsqueda, resalta el texto encontrado con un span de color fuchsia
    titulo.innerHTML = resaltarTexto(juego.titulo, busquedaActual);

    const desc = document.createElement("p");
    desc.className = "card-desc";
    desc.textContent = juego.descripcion;

    body.appendChild(titulo);
    body.appendChild(desc);

    // Pie con "Ver detalles →"
    const footer = document.createElement("div");
    footer.className = "card-footer";
    footer.innerHTML = `<span class="card-link">Ver detalles <svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></span>`;

    enlace.appendChild(overlay);
    enlace.appendChild(img);
    enlace.appendChild(body);
    enlace.appendChild(footer);

    const maxTilt = 5; // grados máximos de inclinación para el efecto 3D

    enlace.addEventListener("mousemove", (e) => {
        const rect = enlace.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;

        enlace.style.transform = `
            perspective(600px)
            rotateY(${x * maxTilt}deg)
            rotateX(${-y * maxTilt}deg)
            scale(1.03)
        `;
    });

    enlace.addEventListener("mouseleave", () => {
        // Transición de vuelta suave
        enlace.style.transition = "transform 0.5s ease, border-color 0.3s, box-shadow 0.3s";
        enlace.style.transform = "perspective(600px) rotateY(0deg) rotateX(0deg) scale(1)";
        // Eliminar la transición extra después para que el hover vuelva a ser fluido
        setTimeout(() => { enlace.style.transition = ""; }, 500);
    });

    return enlace;
}

function crearTarjetaLista(juego) {
    const enlace = document.createElement("a");
    enlace.href = `juego.html?id=${juego.id}`;
    enlace.className = "lista-card";

    // Imagen compacta a la izquierda
    const img = document.createElement("img");
    img.src = juego.imagen;
    img.alt = juego.titulo;

    // Cuerpo central
    const body = document.createElement("div");
    body.className = "lista-body";

    const titulo = document.createElement("h3");
    titulo.className = "lista-titulo";
    titulo.innerHTML = resaltarTexto(juego.titulo, busquedaActual);

    const desc = document.createElement("p");
    desc.className = "lista-desc";
    desc.textContent = juego.descripcion;

    body.appendChild(titulo);
    body.appendChild(desc);

    // Botón a la derecha
    const footer = document.createElement("div");
    footer.className = "lista-footer";
    footer.innerHTML = `<span class="lista-link">Ver detalles <svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></span>`;

    enlace.appendChild(img);
    enlace.appendChild(body);
    enlace.appendChild(footer);

    return enlace;
}

function resaltarTexto(texto, busqueda) {
    if (!busqueda.trim()) return texto; // Sin búsqueda → sin resaltado

    // Escapar caracteres especiales para usarlos en una expresión regular
    const escaped = busqueda.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(`(${escaped})`, "gi");

    // Reemplazar con un <mark> estilizado 
    return texto.replace(regex, `<mark style="background:rgba(169, 85, 247, 0.86);color:#f0abfc;border-radius:3px;padding:0 2px;">$1</mark>`);
}

function renderizarTarjetas(reset = true) {
    const contenedor = document.getElementById("contenedor-juegos");
    const btnCargarMas = document.getElementById("btn-cargar-mas");
    const sinResultados = document.getElementById("sin-resultados");
    const contador = document.getElementById("contador-resultados");

    if (reset) {
        paginaActual = 0;
        contenedor.innerHTML = "";

        /* Ajustar clase del contenedor según vista */
        if (vistaActual === "grid") {
            contenedor.className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6";
        } else {
            contenedor.className = "flex flex-col gap-4";
        }
    }

    const filtrados = getJuegosFiltrados();
    const inicio = paginaActual * JUEGOS_POR_PAGINA;
    const fin = inicio + JUEGOS_POR_PAGINA;
    const pagina = filtrados.slice(inicio, fin); // bloque actual

    // Mostrar u ocultar mensaje de sin resultados
    sinResultados.style.display = filtrados.length === 0 ? "block" : "none";

    // Actualizar contador de resultados
    const visibles = Math.min(fin, filtrados.length);
    contador.textContent = filtrados.length > 0
        ? `Mostrando ${visibles} de ${filtrados.length} juegos`
        : "";

    // Crear y agregar las tarjetas del bloque actual
    const nuevasTarjetas = [];
    pagina.forEach(juego => {
        const tarjeta = vistaActual === "grid"
            ? crearTarjetaGrid(juego)
            : crearTarjetaLista(juego);

        contenedor.appendChild(tarjeta);
        nuevasTarjetas.push(tarjeta);
    });

    // Animacion tipo cascada para las tarjetas de los juegos
    if (nuevasTarjetas.length > 0 && typeof gsap !== "undefined") {
        gsap.fromTo(
            nuevasTarjetas,
            { opacity: 0, y: 28 },            // estado inicial
            {
                opacity: 1,
                y: 0,
                duration: 0.42,               // duración de cada tarjeta
                stagger: 0.07,                // retraso entre tarjetas
                ease: "power2.out"
            }
        );
    } else {
        // Fallback sin GSAP: simplemente mostrar
        nuevasTarjetas.forEach(t => { t.style.opacity = "1"; });
    }

    // Mostrar u ocultar el botón "Cargar más"
    const quedanMas = fin < filtrados.length;
    btnCargarMas.style.display = quedanMas ? "block" : "none";

    paginaActual++;
}


function cargarMas() {
    const btn = document.getElementById("btn-cargar-mas");

    // Estado de carga visual en el botón
    btn.classList.add("loading");
    btn.textContent = "Cargando...";

    // Simula una pequeña pausa antes de mostrar los juegos (más natural)
    setTimeout(() => {
        renderizarTarjetas(false); // false = no resetear, agregar al final
        btn.classList.remove("loading");
        btn.textContent = "↓  Cargar más juegos";
    }, 350);
}

function cambiarVista(vista) {
    vistaActual = vista;

    // Actualizar estado visual de los botones de vista
    document.getElementById("btn-grid").classList.toggle("active", vista === "grid");
    document.getElementById("btn-lista").classList.toggle("active", vista === "lista");

    // Re-renderizar todo desde la primera página
    renderizarTarjetas(true);
}

function filtrarJuegos(tipo) {
    filtroActual = tipo;

    // También limpiar búsqueda para que el filtro aplique a todo
    busquedaActual = "";
    document.getElementById("buscador").value = "";

    // Actualizar estilos de los botones de filtro
    const botones = document.querySelectorAll(".filter-btn");
    botones.forEach(btn => {
        const estaActivo = btn.id === `filter-${tipo}`;
        btn.classList.toggle("bg-fuchsia-600", estaActivo);
        btn.classList.toggle("text-white", estaActivo);
        btn.classList.toggle("bg-gray-800", !estaActivo);
        btn.classList.toggle("text-fuchsia-300", !estaActivo);
    });

    renderizarTarjetas(true);
}


function buscarJuegos() {
    busquedaActual = document.getElementById("buscador").value;
    renderizarTarjetas(true);
}

// Inicialización al cargar la página
document.addEventListener("DOMContentLoaded", () => {

    // Iniciar el hero destacado
    iniciarHero();

    // Leer filtro de la URL — compatible con el comportamiento original
    const params = new URLSearchParams(window.location.search);
    const filtroURL = params.get("filter");

    if (filtroURL && ["todos", "actual", "antiguo"].includes(filtroURL)) {
        filtrarJuegos(filtroURL);
    } else {
        renderizarTarjetas(true);
    }

});