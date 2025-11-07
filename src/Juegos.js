const juegos = [
    {
        id: "ck3",
        titulo: "Crusader Kings III",
        descripcion: "Estrategia dinástica medieval.",
        imagen: "Imagenes-juegos/Crusadersking3/imagen-juego-1.png",
        tipo: "actual"
    },
    {
        id: "cv1",
        titulo: "Civilization 1991",
        descripcion: "Estrategia 4x que fundo el genero.",
        imagen: "Imagenes/civilization1991.png",
        tipo: "antiguo"
    },
    {
        id: "wt2",
        titulo: "Warcraft II: Tides of Darkness",
        descripcion: "Solidificó el RTS con fantasía épica",
        imagen: "Imagenes/warcraft2.png",
        tipo: "antiguo"
    },
    {
        id: "hm3",
        titulo: "Heroes of Might and Magic III",
        descripcion: "Estrategia por turnos y combate táctico de fantasía. Construye tu castillo y lidera héroes.",
        imagen: "Imagenes/heroes of magic.png",
        tipo: "antiguo"
    },
    {
        id: "ag4",
        titulo: "Age of Empires IV",
        descripcion: "Estrategia en tiempo real histórica. Lidera civilizaciones a través de eras épicas.",
        imagen: "Imagenes/ag.png",
        tipo: "actual"
    },
    {
        id: "tw3",
        titulo: "Total War: Warhamer III",
        descripcion: "Estrategia masiva por turnos con batallas tácticas colosales en tiempo real.",
        imagen: "Imagenes/tw.png",
        tipo: "actual"
    },
    {
        id: "stB",
        titulo: "Starcraft: Brood War",
        descripcion: "El RTS competitivo por excelencia. Construye tu ejército y domina las microtácticas de batalla.",
        imagen: "Imagenes/st.png",
        tipo: "antiguo"
    },
    {
        id: "mnl",
        titulo: "Manor Lords",
        descripcion: "Constructor de ciudades medievales con batallas tácticas masivas.",
        imagen: "Imagenes/mnl.png",
        tipo: "actual"
    },
    {
        id: "xc2",
        titulo: "Xcom 2",
        descripcion: "Líder del género táctico por turnos. Combate alienígena por escuadrones.",
        imagen: "Imagenes/xc2.png",
        tipo: "antiguo"
    },
]
function cargarJuegos(filtro = 'todos') {
    const contenedor = document.getElementById("contenedor-juegos");

    const juegosFiltrados = juegos.filter(juego => {
        if (filtro === 'todos') {
            return true;
        }
        return juego.tipo === filtro;
    });

    const botones = document.querySelectorAll('.flex.justify-center button');
    const botonActivoId = `filter-${filtro}`;

    botones.forEach(btn => {

        btn.classList.remove('bg-fuchsia-600', 'text-white');
        btn.classList.add('bg-gray-800', 'text-fuchsia-300');

        if (btn.id === botonActivoId) {
            btn.classList.remove('bg-gray-800', 'text-fuchsia-300');
            btn.classList.add('bg-fuchsia-600', 'text-white');
        }
    });

    contenedor.innerHTML = '';
    contenedor.className = "mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10";

    juegosFiltrados.forEach(juego => {
        const enlace = document.createElement("a")
        enlace.href = `juego.html?id=${juego.id}`;
        enlace.className = "group relative flex flex-col items-center justify-center overflow-hidden rounded-xl bg-gray-800 p-4 shadow-xl hover:ring-2 hover:ring-fuchsia-500 transition-all duration-300";

        const img = document.createElement("img")
        img.src = juego.imagen
        img.alt = juego.titulo
        img.className = "w-full h-auto rounded-lg mb-4 object-cover aspect-video";

        const titulo = document.createElement("h3");
        titulo.textContent = juego.titulo;
        titulo.className = "text-lg font-semibold text-white group-hover:text-fuchsia-300 transition-colors text-center";

        const descripcion = document.createElement("p");
        descripcion.textContent = juego.descripcion;
        descripcion.className = "text-sm text-gray-400 text-center mt-1";

        enlace.appendChild(img);
        enlace.appendChild(titulo);
        enlace.appendChild(descripcion);
        contenedor.appendChild(enlace);

    })
}
function filtrarJuegos(tipo) {
    cargarJuegos(tipo);
}
document.addEventListener("DOMContentLoaded", () => {
    cargarJuegos(tipo);
});
document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const filtroURL = params.get('filter');
    if (filtroURL) {
        cargarJuegos(filtroURL);
    } else {
        cargarJuegos('todos');
    }
});
