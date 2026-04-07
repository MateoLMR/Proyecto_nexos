const dataJuegos = {
    "ck3": {
        titulo: "Crusader Kings III",
        genero: "Gran Estrategia · Rol",
        lanzamiento: 2020,
        plataformas: "PC · PS5 · Xbox Series",
        descripcionLarga: "Crusader Kings III te pone al mando de una dinastía medieval. La estrategia aquí no se centra solo en el campo de batalla, sino en la intriga, la diplomacia, los matrimonios y la gestión de tu linaje a lo largo de generaciones.",
        imagen: "../Imagenes-juegos/Crusadersking3/Imagen-juego-1.png",
        Creador: "Paradox Development Studio",
        tipo: "Estrategia",

        /* Ratings — valores del 0 al 100. */
        ratings: [
            { label: "Dificultad", valor: 85 },
            { label: "Rejugabilidad", valor: 95 },
            { label: "Historia", valor: 90 },
            { label: "Multijugador", valor: 60 },
        ],

        tiendas: [
            { nombre: "Steam", precio: "157.600 COP", url: "https://store.steampowered.com/app/1158310/Crusader_Kings_III/" },
            { nombre: "Microsoft Store", precio: "152.900 COP", url: "https://www.xbox.com/es-co/games/store/crusader-kings-iii/9mz8rzsd0nfq" },
            { nombre: "Eneba (KEY)", precio: "49.031 COP", url: "https://www.eneba.com/latam/steam-crusader-kings-iii-steam-key-latam" },
            { nombre: "InstantGaming (KEY)", precio: "8.99 €", url: "https://www.instant-gaming.com/es/17664-comprar-crusader-kings-iii-pc-mac-juego-steam-latin-america/" }
        ],

        galeria: [
            { tipo: 'video', src: '../Videos-juegos/Crusader Kings III - Gameplay Teaser.mp4', thumb: '../Imagenes-juegos/Crusadersking3/Imagen-juego-1.png' },
            { tipo: 'video', src: '../Videos-juegos/Crusader Kings 3 - Official Story Trailer.mp4', thumb: '../Imagenes-juegos/Crusadersking3/Imagen-juego-1.png' },
            { tipo: 'image', src: '../Imagenes-juegos/Crusadersking3/imgck2.png', thumb: '../Imagenes-juegos/Crusadersking3/imgck2.png' },
            { tipo: 'image', src: '../Imagenes-juegos/Crusadersking3/imgck3.png', thumb: '../Imagenes-juegos/Crusadersking3/imgck3.png' },
            { tipo: 'image', src: '../Imagenes-juegos/Crusadersking3/imgck4.png', thumb: '../Imagenes-juegos/Crusadersking3/imgck4.png' },
            { tipo: 'image', src: '../Imagenes-juegos/Crusadersking3/imgck5.png', thumb: '../Imagenes-juegos/Crusadersking3/imgck5.png' },
            { tipo: 'image', src: '../Imagenes-juegos/Crusadersking3/imgck6.png', thumb: '../Imagenes-juegos/Crusadersking3/imgck6.png' },
        ],

        pros: [
            "Sistema de dinastías y personajes inigualable.",
            "Alto valor de rejugabilidad por las intrigas de rol.",
            "Excelentes gráficos para un juego de Gran Estrategia."
        ],
        contras: [
            "Curva de aprendizaje muy alta para principiantes.",
            "El componente militar es más simple que en otros títulos.",
            "Requiere múltiples DLCs para la experiencia completa."
        ]
    },
    "cv1": {
        titulo: "Civilization 1991",
        genero: "4X · Gestión · Por Turnos",
        lanzamiento: 1991,
        plataformas: "PC (DOS)",
        descripcionLarga: "El pilar de los juegos de estrategia por turnos. Creado por Sid Meier, Civilization estableció el modelo 4X (eXplorar, eXpandir, eXplotar, eXterminar) donde controlas una civilización a lo largo de miles de años.",
        imagen: "../Imagenes/civilization1991.png",
        Creador: "MicroProse / 2K",
        tipo: "RPG",

        ratings: [
            { label: "Dificultad", valor: 55 },
            { label: "Rejugabilidad", valor: 80 },
            { label: "Historia", valor: 70 },
            { label: "Multijugador", valor: 10 },
        ],

        tiendas: [
            { nombre: "No se encuentra actualmente en ninguna tienda", precio: "—", url: "Juegos.html" }
        ],

        galeria: [
            { tipo: 'image', src: '../Imagenes-juegos/Crusadersking3/civilization1991/imgcv1.png', thumb: '../Imagenes-juegos/Crusadersking3/civilization1991/imgcv1.png' },
            { tipo: 'image', src: '../Imagenes-juegos/Crusadersking3/civilization1991/imgcv2.png', thumb: '../Imagenes-juegos/Crusadersking3/civilization1991/imgcv2.png' },
            { tipo: 'image', src: '../Imagenes-juegos/Crusadersking3/civilization1991/imgcv3.png', thumb: '../Imagenes-juegos/Crusadersking3/civilization1991/imgcv3.png' },
            { tipo: 'image', src: '../Imagenes-juegos/Crusadersking3/civilization1991/imgcv4.png', thumb: '../Imagenes-juegos/Crusadersking3/civilization1991/imgcv4.png' },
            { tipo: 'image', src: '../Imagenes-juegos/Crusadersking3/civilization1991/imgcv5.png', thumb: '../Imagenes-juegos/Crusadersking3/civilization1991/imgcv5.png' },
            { tipo: 'image', src: '../Imagenes-juegos/Crusadersking3/civilization1991/imgcv6.png', thumb: '../Imagenes-juegos/Crusadersking3/civilization1991/imgcv6.png' },
        ],

        pros: [
            "Fórmula 4X clásica, perfecta para la estrategia pura.",
            "Excelente por su valor histórico en el género.",
        ],
        contras: [
            "Gráficos extremadamente anticuados (solo nostálgicos).",
            "Mecánicas de juego muy sencillas comparadas con las versiones modernas.",
        ]
    },
    "wt2": {
        titulo: "Warcraft II: Tides of Darkness",
        genero: "RTS · Fantasía",
        lanzamiento: 1995,
        plataformas: "PC (DOS/Windows) · Mac",
        descripcionLarga: "Warcraft II solidificó la fórmula de la Estrategia en Tiempo Real (RTS) con una adición clave de fantasía épica. Su éxito fue crucial para la explosión del multijugador en línea.",
        imagen: "../Imagenes/warcraft2.png",
        Creador: "Blizzard Entertainment",
        tipo: "RPG",

        ratings: [
            { label: "Dificultad", valor: 65 },
            { label: "Rejugabilidad", valor: 70 },
            { label: "Historia", valor: 75 },
            { label: "Multijugador", valor: 80 },
        ],

        tiendas: [
            { nombre: "Battle.net", precio: "41.480 COP", url: "https://us.shop.battle.net/es-es/product/warcraft-2-battle-net-edition?p=1652739" }
        ],

        galeria: [
            { tipo: 'video', src: '../Videos-juegos/Warcraft 2 Intro.mp4', thumb: '../Imagenes/warcraft2.png' },
            { tipo: 'image', src: '../Imagenes-juegos/Crusadersking3/Warcraft2/imgwt1.png', thumb: '../Imagenes-juegos/Crusadersking3/Warcraft2/imgwt1.png' },
            { tipo: 'image', src: '../Imagenes-juegos/Crusadersking3/Warcraft2/imgwt2.png', thumb: '../Imagenes-juegos/Crusadersking3/Warcraft2/imgwt2.png' },
            { tipo: 'image', src: '../Imagenes-juegos/Crusadersking3/Warcraft2/imgwt3.png', thumb: '../Imagenes-juegos/Crusadersking3/Warcraft2/imgwt3.png' },
        ],

        pros: [
            "Fórmula RTS pura, esencial para los fans del género.",
            "Banda sonora y voz en off icónicas.",
            "Campañas históricas y muy rejugables."
        ],
        contras: [
            "Gráficos muy desactualizados para estándares modernos.",
            "Mecánicas de control de unidades limitadas."
        ]
    },
    "hm3": {
        titulo: "Heroes of Might and Magic III",
        genero: "Estrategia por Turnos · Fantasía",
        lanzamiento: 1999,
        plataformas: "PC · Windows · Mac",
        descripcionLarga: "Un pionero de la estrategia a gran escala que combina la exploración de un mapa de aventuras por turnos con combates tácticos en un tablero hexagonal.",
        imagen: "../Imagenes/heroes of magic.png",
        Creador: "New World Computing / Dotemu",
        tipo: "Estrategia",

        ratings: [
            { label: "Dificultad", valor: 70 },
            { label: "Rejugabilidad", valor: 90 },
            { label: "Historia", valor: 80 },
            { label: "Multijugador", valor: 65 },
        ],

        tiendas: [
            { nombre: "GOG.com (Complete)", precio: "4.99 €", url: "https://www.gog.com/en/game/heroes_of_might_and_magic_3_complete_edition" },
            { nombre: "Steam (HD Edition)", precio: "11.225 COP", url: "https://store.steampowered.com/app/297000/Heroes_of_Might__Magic_III__HD_Edition/" }
        ],

        galeria: [
            { tipo: 'image', src: '../Imagenes-juegos/Crusadersking3/heroesmagic/imghm1.png', thumb: '../Imagenes-juegos/Crusadersking3/heroesmagic/imghm1.png' },
            { tipo: 'image', src: '../Imagenes-juegos/Crusadersking3/heroesmagic/imghm2.png', thumb: '../Imagenes-juegos/Crusadersking3/heroesmagic/imghm2.png' },
            { tipo: 'image', src: '../Imagenes-juegos/Crusadersking3/heroesmagic/imghm3.png', thumb: '../Imagenes-juegos/Crusadersking3/heroesmagic/imghm3.png' },
            { tipo: 'image', src: '../Imagenes-juegos/Crusadersking3/heroesmagic/imghm4.png', thumb: '../Imagenes-juegos/Crusadersking3/heroesmagic/imghm4.png' },
            { tipo: 'image', src: '../Imagenes-juegos/Crusadersking3/heroesmagic/imghm5.png', thumb: '../Imagenes-juegos/Crusadersking3/heroesmagic/imghm5.png' },
        ],

        pros: [
            "Juego de fantasía con una profundidad estratégica inigualable.",
            "Exploración, construcción y combate táctico perfectamente combinados.",
            "Gran cantidad de contenido y facciones jugables."
        ],
        contras: [
            "El balance entre facciones puede ser disparejo.",
            "La versión HD de Steam no incluye las expansiones originales."
        ]
    },
    "ag4": {
        titulo: "Age of Empires IV",
        genero: "RTS · Histórico",
        lanzamiento: 2021,
        plataformas: "PC · Xbox Series · PS5",
        descripcionLarga: "El gran regreso de la saga RTS más aclamada. AoE IV refina la fórmula clásica de construcción de base y guerra con ocho civilizaciones únicas y campañas históricas bien narradas.",
        imagen: "../Imagenes/ag.png",
        Creador: "Relic Entertainment",
        tipo: "Estrategia",

        ratings: [
            { label: "Dificultad", valor: 60 },
            { label: "Rejugabilidad", valor: 85 },
            { label: "Historia", valor: 88 },
            { label: "Multijugador", valor: 90 },
        ],

        tiendas: [
            { nombre: "Eneba (Key)", precio: "51.201 COP", url: "https://www.eneba.com/es/steam-age-of-empires-iv-steam-key-global/gaming4life?product=digital&currency=COP" },
            { nombre: "Steam (Anniversary Edition)", precio: "28.875 COP", url: "https://store.steampowered.com/app/1466860/Age_of_Empires_IV_Anniversary_Edition/" },
            { nombre: "PlayStation Store", precio: "39.99 US", url: "https://store.playstation.com/es-co/product/UP6312-PPSA25366_00-0950569117932928/" },
            { nombre: "Microsoft Store (Anniversary)", precio: "82.500 COP", url: "https://www.xbox.com/es-CO/games/age-of-empires-iv#purchaseoptions" },
        ],

        galeria: [
            { tipo: 'video', src: '../Videos-juegos/age-video.mp4', thumb: '../Imagenes/ag.png' },
            { tipo: 'image', src: '../Imagenes-juegos/Crusadersking3/AgeofEmpires4/imgag1.png', thumb: '../Imagenes-juegos/Crusadersking3/AgeofEmpires4/imgag1.png' },
            { tipo: 'image', src: '../Imagenes-juegos/Crusadersking3/AgeofEmpires4/imgag2.png', thumb: '../Imagenes-juegos/Crusadersking3/AgeofEmpires4/imgag2.png' },
            { tipo: 'image', src: '../Imagenes-juegos/Crusadersking3/AgeofEmpires4/imgag3.png', thumb: '../Imagenes-juegos/Crusadersking3/AgeofEmpires4/imgag3.png' },
            { tipo: 'image', src: '../Imagenes-juegos/Crusadersking3/AgeofEmpires4/imgag4.png', thumb: '../Imagenes-juegos/Crusadersking3/AgeofEmpires4/imgag4.png' },
            { tipo: 'image', src: '../Imagenes-juegos/Crusadersking3/AgeofEmpires4/imgag5.png', thumb: '../Imagenes-juegos/Crusadersking3/AgeofEmpires4/imgag5.png' }
        ],

        pros: [
            "Juego de RTS con alta calidad de producción y jugabilidad.",
            "Civilizaciones asimétricas que requieren estrategias diferentes.",
            "Excelente modo campaña y tutoriales para nuevos jugadores."
        ],
        contras: [
            "El balance entre civilizaciones ha sido un desafío constante.",
            "Estilo visual menos detallado que AoE III Definitive Edition."
        ]
    },
    "tw3": {
        titulo: "Total War: Warhammer III",
        genero: "Gran Estrategia · Táctico",
        lanzamiento: 2022,
        plataformas: "PC · Mac",
        descripcionLarga: "El épico final de la trilogía Total War Warhammer. Combina la gestión de un imperio por turnos con batallas masivas en tiempo real. Conocido por su enorme escala y variedad de facciones fantásticas.",
        imagen: "../Imagenes/tw.png",
        Creador: "Creative Assembly",
        tipo: "Estrategia",

        ratings: [
            { label: "Dificultad", valor: 75 },
            { label: "Rejugabilidad", valor: 92 },
            { label: "Historia", valor: 70 },
            { label: "Multijugador", valor: 78 },
        ],

        tiendas: [
            { nombre: "Eneba (Key)", precio: "67.160 COP", url: "https://www.eneba.com/es/steam-total-war-warhammer-iii-pc-steam-key-global/frosty-entertainment?product=digital&currency=COP" },
            { nombre: "Steam", precio: "52.500 COP", url: "https://store.steampowered.com/app/1142710/Total_War_WARHAMMER_III/" }
        ],

        galeria: [
            { tipo: 'video', src: '../Videos-juegos/tw-trailer.mp4', thumb: '../Imagenes/tw.png' },
            { tipo: 'image', src: '../Imagenes-juegos/Crusadersking3/TotalWar3/imgtw1.png', thumb: '../Imagenes-juegos/Crusadersking3/TotalWar3/imgtw1.png' },
            { tipo: 'image', src: '../Imagenes-juegos/Crusadersking3/TotalWar3/imgtw2.png', thumb: '../Imagenes-juegos/Crusadersking3/TotalWar3/imgtw2.png' },
            { tipo: 'image', src: '../Imagenes-juegos/Crusadersking3/TotalWar3/imgtw3.png', thumb: '../Imagenes-juegos/Crusadersking3/TotalWar3/imgtw3.png' },
            { tipo: 'image', src: '../Imagenes-juegos/Crusadersking3/TotalWar3/imgtw4.png', thumb: '../Imagenes-juegos/Crusadersking3/TotalWar3/imgtw4.png' },
            { tipo: 'image', src: '../Imagenes-juegos/Crusadersking3/TotalWar3/imgtw5.png', thumb: '../Imagenes-juegos/Crusadersking3/TotalWar3/imgtw5.png' }
        ],

        pros: [
            "Batallas tácticas masivas y visualmente impactantes.",
            "Variedad increíble de facciones y unidades únicas.",
            "Mapa de campaña enorme con un alto valor de rejugabilidad.",
        ],
        contras: [
            "Tiempos de carga lentos en el mapa de campaña.",
            "Curva de dificultad muy alta debido a la gran cantidad de mecánicas."
        ]
    },
    "stB": {
        titulo: "StarCraft: Brood War",
        genero: "RTS · eSports",
        lanzamiento: 1998,
        plataformas: "PC · Mac",
        descripcionLarga: "Considerado por muchos como el pináculo del RTS competitivo. StarCraft: Brood War definió la jugabilidad asimétrica y la alta habilidad mecánica requerida en el género.",
        imagen: "../Imagenes/st.png",
        Creador: "Blizzard Entertainment",
        tipo: "RPG",

        ratings: [
            { label: "Dificultad", valor: 95 },
            { label: "Rejugabilidad", valor: 98 },
            { label: "Historia", valor: 85 },
            { label: "Multijugador", valor: 100 },
        ],

        tiendas: [
            { nombre: "Battle.net (Gratis)", precio: "0,00 €", url: "https://us.shop.battle.net/es-mx/product/starcraft-remastered" },
        ],

        galeria: [
            { tipo: 'image', src: '../Imagenes-juegos/Crusadersking3/Starcraftbrood/st1.png', thumb: '../Imagenes-juegos/Crusadersking3/Starcraftbrood/st1.png' },
            { tipo: 'image', src: '../Imagenes-juegos/Crusadersking3/Starcraftbrood/st2.png', thumb: '../Imagenes-juegos/Crusadersking3/Starcraftbrood/st2.png' },
            { tipo: 'image', src: '../Imagenes-juegos/Crusadersking3/Starcraftbrood/st3.png', thumb: '../Imagenes-juegos/Crusadersking3/Starcraftbrood/st3.png' },
            { tipo: 'image', src: '../Imagenes-juegos/Crusadersking3/Starcraftbrood/st4.png', thumb: '../Imagenes-juegos/Crusadersking3/Starcraftbrood/st4.png' }
        ],

        pros: [
            "El balance competitivo es legendario e inalterado.",
            "Esencial para entender la historia de los eSports.",
            "El juego base es gratuito.",
        ],
        contras: [
            "Mecánicas de interfaz muy anticuadas y rudas.",
            "Requiere mucha práctica para ser medianamente competente.",
        ]
    },
    "mnl": {
        titulo: "Manor Lords",
        genero: "Constructor de Ciudades · Táctico",
        lanzamiento: 2024,
        plataformas: "PC",
        descripcionLarga: "Combina la construcción de ciudades medievales con batallas tácticas masivas en tiempo real. Se enfoca en la gestión de recursos, la expansión territorial y el desarrollo orgánico de asentamientos.",
        imagen: "../Imagenes/mnl.png",
        Creador: "Slavic Magic",
        tipo: "Estrategia",

        ratings: [
            { label: "Dificultad", valor: 65 },
            { label: "Rejugabilidad", valor: 78 },
            { label: "Historia", valor: 50 },
            { label: "Multijugador", valor: 30 },
        ],

        tiendas: [
            { nombre: "Steam", precio: "99.900 COP", url: "https://store.steampowered.com/app/1363080/Manor_Lords/?l=spanish" },
            { nombre: "Xbox", precio: "64.285 COP", url: "https://www.xbox.com/es-CO/games/store/manor-lords-game-preview/9p5f966564fs" },
            { nombre: "Epic Games", precio: "64.935 COP", url: "https://store.epicgames.com/es-ES/p/manor-lords-ef795f" },
            { nombre: "Eneba (Key)", precio: "74.734 COP", url: "https://www.eneba.com/latam/steam-manor-lords-pc-steam-key-global" },
            { nombre: "GOG.com", precio: "13.29 US", url: "https://www.gog.com/en/game/manor_lords" },
        ],

        galeria: [
            { tipo: 'video', src: '../Videos-juegos/manorgameplay.mp4', thumb: '../Imagenes/mnl.png' },
            { tipo: 'image', src: '../Imagenes-juegos/Manorlords/mnl1.png', thumb: '../Imagenes-juegos/Manorlords/mnl1.png' },
            { tipo: 'image', src: '../Imagenes-juegos/Manorlords/mnl2.png', thumb: '../Imagenes-juegos/Manorlords/mnl2.png' },
            { tipo: 'image', src: '../Imagenes-juegos/Manorlords/mnl3.png', thumb: '../Imagenes-juegos/Manorlords/mnl3.png' },
            { tipo: 'image', src: '../Imagenes-juegos/Manorlords/mnl4.png', thumb: '../Imagenes-juegos/Manorlords/mnl4.png' },
            { tipo: 'image', src: '../Imagenes-juegos/Manorlords/mnl5.png', thumb: '../Imagenes-juegos/Manorlords/mnl5.png' }
        ],

        pros: [
            "Gráficos impresionantes y ambientación medieval inmersiva.",
            "Innovadora combinación de gestión de ciudades y batallas RTS.",
            "Profundo sistema de gestión de recursos y logística."
        ],
        contras: [
            "El juego está en acceso anticipado (Early Access).",
            "La IA del combate puede ser mejorada."
        ]
    },
    "xc2": {
        titulo: "XCOM 2",
        genero: "Táctico por Turnos · Ciencia Ficción",
        lanzamiento: 2016,
        plataformas: "PC · PS4 · Xbox One · Switch",
        descripcionLarga: "Un líder del género táctico por turnos. Combina la gestión estratégica de tu base y tecnología con combates tácticos por escuadrones en misiones procedurales.",
        imagen: "../Imagenes/xc2.png",
        Creador: "Firaxis Games",
        tipo: "RPG",

        ratings: [
            { label: "Dificultad", valor: 88 },
            { label: "Rejugabilidad", valor: 90 },
            { label: "Historia", valor: 82 },
            { label: "Multijugador", valor: 45 },
        ],

        tiendas: [
            { nombre: "Steam", precio: "5.450 COP", url: "https://store.steampowered.com/app/268500/XCOM_2/?l=spanish" },
            { nombre: "Xbox", precio: "11.495 COP", url: "https://www.xbox.com/es-CO/games/store/xcom-2/BQWGBMCKRMSQ/0001" },
            { nombre: "PlayStation", precio: "8.99 US", url: "https://www.playstation.com/es-co/games/xcom-2/" },
            { nombre: "Eneba (Key)", precio: "8.259 COP", url: "https://www.eneba.com/latam/steam-xcom-2-steam-key-global" },
        ],

        galeria: [
            { tipo: 'image', src: '../Imagenes-juegos/Xcom2/xc1.png', thumb: '../Imagenes-juegos/Xcom2/xc1.png' },
            { tipo: 'image', src: '../Imagenes-juegos/Xcom2/xc3.png', thumb: '../Imagenes-juegos/Xcom2/xc3.png' },
            { tipo: 'image', src: '../Imagenes-juegos/Xcom2/xc4.png', thumb: '../Imagenes-juegos/Xcom2/xc4.png' },
            { tipo: 'image', src: '../Imagenes-juegos/Xcom2/xc5.png', thumb: '../Imagenes-juegos/Xcom2/xc5.png' }
        ],

        pros: [
            "Combate táctico por turnos muy profundo y satisfactorio.",
            "Gran rejugabilidad gracias a los mapas procedurales.",
            "Alta inmersión en la gestión de la base y personalización de escuadrones."
        ],
        contras: [
            "La dificultad es muy elevada (conocida como 'XCOM difficulty').",
            "El componente de gestión puede volverse repetitivo."
        ]
    },
};

function detectarClaseTienda(nombre) {
    const n = nombre.toLowerCase();

    const plataformas = [
        ['steam', 'tienda-steam'],
        ['xbox', 'tienda-xbox'],
        ['microsoft', 'tienda-xbox'],
        ['playstation', 'tienda-playstation'],
        ['gog', 'tienda-gog'],
        ['epic', 'tienda-epic'],
        ['battle', 'tienda-battle'],
        ['eneba', 'tienda-eneba'],
        ['instant', 'tienda-instant'],
    ];
    for (const [clave, clase] of plataformas) {
        if (n.includes(clave)) return clase;
    }
    return 'tienda-default'; // fallback para tiendas no reconocidas
}
function renderProsContras(juego) {
    const contenedor = document.getElementById('pros-contras-container');
    if (!contenedor || !juego.pros || !juego.contras) return;

    /* Construir el HTML de cada columna */
    const prosHTML = juego.pros.map(p =>
        `<li><span style="color:#34d399;margin-top:2px;">✓</span><span style="color:#d1fae5;">${p}</span></li>`
    ).join('');

    const contrasHTML = juego.contras.map(c =>
        `<li><span style="color:#f87171;margin-top:2px;">✗</span><span style="color:#fee2e2;">${c}</span></li>`
    ).join('');

    contenedor.innerHTML = `
        <div class="pros-col">
            <h3>✅ Puntos positivos</h3>
            <ul>${prosHTML}</ul>
        </div>
        <div class="contras-col">
            <h3>❌ Puntos negativos</h3>
            <ul>${contrasHTML}</ul>
        </div>
    `;

    /* Animación de entrada con GSAP —
       pros entran desde la izquierda, contras desde la derecha */
    if (typeof gsap !== 'undefined') {
        gsap.fromTo('.pros-col',
            { opacity: 0, x: -30 },
            { opacity: 1, x: 0, duration: 0.55, ease: 'power2.out', delay: 0.1 }
        );
        gsap.fromTo('.contras-col',
            { opacity: 0, x: 30 },
            { opacity: 1, x: 0, duration: 0.55, ease: 'power2.out', delay: 0.2 }
        );
    } else {
        /* Fallback sin GSAP */
        contenedor.querySelectorAll('.pros-col, .contras-col')
            .forEach(el => { el.style.opacity = '1'; });
    }
}

function renderRatings(juego) {
    const contenedor = document.getElementById('ratings-container');
    if (!contenedor || !juego.ratings) return;

    /* Construir una fila por cada métrica */
    contenedor.innerHTML = juego.ratings.map((r, i) =>
        `<div class="rating-fila">
            <div class="rating-label">
                <span>${r.label}</span>
                <span id="rating-val-${i}">0%</span>
            </div>
            <div class="rating-pista">
                <div class="rating-barra" id="rating-barra-${i}" data-valor="${r.valor}"></div>
            </div>
        </div>`
    ).join('');

    /* Animar cada barra con ScrollTrigger cuando entra en pantalla */
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        juego.ratings.forEach((r, i) => {
            const barra = document.getElementById(`rating-barra-${i}`);
            const label = document.getElementById(`rating-val-${i}`);

            gsap.to(barra, {
                width: r.valor + '%',
                duration: 1.1,
                ease: 'power2.out',
                /* La animación se dispara cuando la barra entra en el 80% del viewport */
                scrollTrigger: {
                    trigger: barra,
                    start: 'top 80%',
                    once: true,        // solo se anima una vez
                },
                /* Actualizar el número del porcentaje durante la animación */
                onUpdate: function () {
                    const progreso = Math.round(parseFloat(barra.style.width) || 0);
                    if (label) label.textContent = progreso + '%';
                },
                onComplete: function () {
                    if (label) label.textContent = r.valor + '%';
                }
            });
        });

    } else {
        /* Fallback sin GSAP: mostrar los valores directamente */
        juego.ratings.forEach((r, i) => {
            const barra = document.getElementById(`rating-barra-${i}`);
            const label = document.getElementById(`rating-val-${i}`);
            if (barra) barra.style.width = r.valor + '%';
            if (label) label.textContent = r.valor + '%';
        });
    }
}

function renderRelacionados(juegoActual, idActual) {
    const contenedor = document.getElementById('relacionados-container');
    if (!contenedor) return;

    contenedor.innerHTML = ''; // limpiar contenido previo

    const MAX_RELACIONADOS = 4; // máximo de tarjetas a mostrar

    /* Filtrar juegos del mismo tipo */
    const relacionados = Object.entries(dataJuegos)
        .filter(([id, j]) => id !== idActual && j.tipo === juegoActual.tipo)
        .slice(0, MAX_RELACIONADOS);

    if (relacionados.length === 0) {
        contenedor.innerHTML = '<p class="text-purple-400/40 text-sm col-span-full">No hay juegos relacionados disponibles.</p>';
        return;
    }

    /* Crear una tarjeta por juego relacionado */
    relacionados.forEach(([id, juego], index) => {
        const card = document.createElement('a');
        card.href = `juego.html?id=${id}`;
        card.className = 'relacionado-card';
        card.innerHTML = `
            <div class="rel-overlay"></div>
            <img src="${juego.imagen}" alt="${juego.titulo}" loading="lazy">
            <div class="rel-body">
                <p class="rel-titulo">${juego.titulo}</p>
                <p class="rel-genero">${juego.genero}</p>
            </div>
        `;

        /*  Efecto tilt 3D . */
        const maxTilt = 10;
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
            const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
            card.style.transform = `perspective(600px) rotateY(${x * maxTilt}deg) rotateX(${-y * maxTilt}deg) scale(1.04)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transition = 'transform 0.5s ease, border-color 0.3s, box-shadow 0.3s';
            card.style.transform = 'perspective(600px) rotateY(0deg) rotateX(0deg) scale(1)';
            setTimeout(() => { card.style.transition = ''; }, 500);
        });

        contenedor.appendChild(card);
    });

    /* Animar entrada de tarjetas relacionadas con stagger */
    if (typeof gsap !== 'undefined') {
        gsap.fromTo(
            contenedor.querySelectorAll('.relacionado-card'),
            { opacity: 0, y: 20 },
            {
                opacity: 1, y: 0,
                duration: 0.45,
                stagger: 0.08,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: contenedor,
                    start: 'top 85%',
                    once: true,
                }
            }
        );
    } else {
        contenedor.querySelectorAll('.relacionado-card')
            .forEach(c => { c.style.opacity = '1'; });
    }
}

function cargarDetalleJuego() {
    const params = new URLSearchParams(window.location.search);
    const idJuego = params.get('id');
    const juego = dataJuegos[idJuego];

    /* Si el id no existe, mostrar error y salir */
    if (!juego) {
        document.getElementById('detalle-juego').innerHTML =
            '<h1 class="text-3xl text-center text-red-400 mt-20">Error: Juego no encontrado.</h1>';
        return;
    }

    /* Actualizar el título de la pestaña del navegador */
    document.title = `${juego.titulo} | Nexos`;

    const heroBg = document.getElementById('hero-bg');
    if (heroBg) heroBg.style.backgroundImage = `url('${juego.imagen}')`;

    const heroTitulo = document.getElementById('hero-titulo-juego');
    if (heroTitulo) {
        heroTitulo.textContent = juego.titulo;
        /* Animación de entrada del título — GSAP */
        if (typeof gsap !== 'undefined') {
            gsap.fromTo(heroTitulo,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', delay: 0.1 }
            );
        }
    }

    /* Badge de género */
    const badge = document.getElementById('hero-badge');
    if (badge) badge.textContent = juego.genero;

    /* Metadatos del hero */
    const yearEl = document.getElementById('hero-year');
    if (yearEl) yearEl.textContent = juego.lanzamiento;

    const platEl = document.getElementById('hero-plataformas');
    if (platEl) platEl.textContent = juego.plataformas;

    const creadorEl = document.getElementById('hero-creador');
    if (creadorEl) creadorEl.textContent = juego.Creador;

    /* Galería: cargar miniaturas y primer media */
    const miniaturasContenedor = document.getElementById('miniaturas-container');
    if (miniaturasContenedor && juego.galeria) {

        miniaturasContenedor.innerHTML = juego.galeria.map((media, index) => {
            const esVideo = media.tipo === 'video';
            const esActiva = index === 0 ? 'activa' : '';

            return `
                <button onclick="changeMainMedia('${media.tipo}', '${media.src}', ${index})"
                        class="${esActiva}" aria-label="Ver media ${index + 1}">
                    <img src="${media.thumb}" alt="Miniatura ${index + 1}"
                         class="w-full h-full object-cover ${esVideo ? 'opacity-70' : ''}">
                    ${esVideo ? `
                        <span class="absolute inset-0 flex items-center justify-center bg-black/30">
                            <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z"/>
                            </svg>
                        </span>` : ''}
                </button>
            `;
        }).join('');

        /* Cargar el primer elemento de la galería */
        const primero = juego.galeria[0];
        changeMainMedia(primero.tipo, primero.src, 0);
    }

    const preciosHTML = juego.tiendas.map(tienda => {
        const claseTienda = detectarClaseTienda(tienda.nombre);
        return `
            <a href="${tienda.url}" target="_blank" rel="noopener noreferrer"
               class="tienda-card ${claseTienda}">
                <div>
                    <p class="tienda-nombre">${tienda.nombre}</p>
                    <p class="tienda-icono">
                        <svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                        </svg>
                        Ir a la tienda
                    </p>
                </div>
                <span class="tienda-precio">${tienda.precio}</span>
            </a>
        `;
    }).join('');

    /* HTML completo del panel derecho — Información + tiendas */
    document.getElementById('detalle-juego').innerHTML = `
        <div class="space-y-8">

            <!-- Información clave del juego -->
            <div>
                <h2 class="seccion-titulo">Información</h2>
                <div class="grid grid-cols-2 gap-4 text-lg">
                    <div>
                        <p class="text-purple-300/60 font-semibold mb-1">Género</p>
                        <p class="text-purple-100">${juego.genero}</p>
                    </div>
                    <div>
                        <p class="text-purple-300/60 font-semibold mb-1">Lanzamiento</p>
                        <p class="text-purple-100">${juego.lanzamiento}</p>
                    </div>
                    <div>
                        <p class="text-purple-300/60 font-semibold mb-1">Plataformas</p>
                        <p class="text-purple-100">${juego.plataformas}</p>
                    </div>
                    <div>
                        <p class="text-purple-300/60 font-semibold mb-1">Desarrollador</p>
                        <p class="text-purple-100">${juego.Creador}</p>
                    </div>
                </div>
            </div>

            <!-- Descripción larga -->
            <div>
                <h2 class="seccion-titulo">Sobre el juego</h2>
                <p class="text-gray-300 leading-relaxed text-xl">${juego.descripcionLarga}</p>
            </div>

            <!-- Tiendas con color por plataforma -->
            <div>
                <h2 class="seccion-titulo">Comprar juego</h2>
                <div class="space-y-3">
                    ${preciosHTML}
                </div>
            </div>

        </div>
    `;

    renderProsContras(juego);
    renderRatings(juego);
    renderRelacionados(juego, idJuego);
}

function cargarMediaInicial(juego) {
    if (juego && juego.galeria && juego.galeria.length > 0) {
        const primero = juego.galeria[0];
        changeMainMedia(primero.tipo, primero.src, 0);
    }
}

/* Rellena los <select> de la página de comparación */
function llenarDropdowns() {
    const selectA = document.getElementById('seleccion-juego-a');
    const selectB = document.getElementById('seleccion-juego-b');
    if (!selectA || !selectB) return;

    const opcionesHTML = Object.keys(dataJuegos).map(key =>
        `<option value="${key}">${dataJuegos[key].titulo}</option>`
    ).join('');

    selectA.innerHTML += opcionesHTML;
    selectB.innerHTML += opcionesHTML;
}

/* Renderiza la comparación entre dos juegos seleccionados */
function cargarComparacion() {
    const idA = document.getElementById('seleccion-juego-a').value;
    const idB = document.getElementById('seleccion-juego-b').value;
    const resultadosDiv = document.getElementById('comparacion-resultados');

    if (!idA || !idB || idA === idB) {
        resultadosDiv.innerHTML = `<p class="text-center text-fuchsia-300">Selecciona dos juegos diferentes para empezar la comparación.</p>`;
        return;
    }

    const juegoA = { id: idA, ...dataJuegos[idA] };
    const juegoB = { id: idB, ...dataJuegos[idB] };

    if (!juegoA.titulo || !juegoB.titulo) {
        resultadosDiv.innerHTML = `<p class="text-center text-fuchsia-300">Error al cargar los datos de los juegos.</p>`;
        return;
    }

    const tiendasA = juegoA.tiendas || [];
    const tiendasB = juegoB.tiendas || [];
    const maxTiendas = Math.max(tiendasA.length, tiendasB.length);

    let preciosTablaHTML = '';
    for (let i = 0; i < maxTiendas; i++) {
        const itemA = tiendasA[i];
        const itemB = tiendasB[i];
        const nombreA = itemA ? itemA.nombre : '—';
        const precioA = itemA && itemA.precio !== ' ' ? `<span class="text-fuchsia-300 font-bold">${itemA.precio}</span>` : 'No listado';
        const urlA = itemA ? itemA.url : '#';
        const nombreB = itemB ? itemB.nombre : '—';
        const precioB = itemB && itemB.precio !== ' ' ? `<span class="text-fuchsia-300 font-bold">${itemB.precio}</span>` : 'No listado';
        const urlB = itemB ? itemB.url : '#';

        preciosTablaHTML += `
            <div class="grid grid-cols-3 items-center p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
                <a href="${urlA}" target="_blank" class="text-center block p-1 ${itemA ? 'text-white' : 'text-gray-500'}">
                    <p class="font-semibold">${nombreA}</p><p>${precioA}</p>
                </a>
                <div class="text-center text-sm font-bold text-fuchsia-300">PRECIO</div>
                <a href="${urlB}" target="_blank" class="text-center block p-1 ${itemB ? 'text-white' : 'text-gray-500'}">
                    <p class="font-semibold">${nombreB}</p><p>${precioB}</p>
                </a>
            </div>
        `;
    }

    const prosHTML = `
        <h3 class="text-2xl font-bold text-green-400 mb-4 text-center">✅ Puntos Positivos</h3>
        <div class="grid grid-cols-2 gap-4">
            <ul class="space-y-3 p-4 bg-gray-800/70 rounded-lg">
                <p class="font-semibold text-fuchsia-300">${juegoA.titulo}</p>
                ${juegoA.pros.map(p => `<li class="text-gray-200 text-sm">✓ ${p}</li>`).join('')}
            </ul>
            <ul class="space-y-3 p-4 bg-gray-800/70 rounded-lg">
                <p class="font-semibold text-fuchsia-300">${juegoB.titulo}</p>
                ${juegoB.pros.map(p => `<li class="text-gray-200 text-sm">✓ ${p}</li>`).join('')}
            </ul>
        </div>
    `;

    const contrasHTML = `
        <h3 class="text-2xl font-bold text-red-400 mb-4 text-center">❌ Puntos Negativos</h3>
        <div class="grid grid-cols-2 gap-4">
            <ul class="space-y-3 p-4 bg-gray-800/70 rounded-lg">
                <p class="font-semibold text-fuchsia-300">${juegoA.titulo}</p>
                ${juegoA.contras.map(c => `<li class="text-gray-200 text-sm">✗ ${c}</li>`).join('')}
            </ul>
            <ul class="space-y-3 p-4 bg-gray-800/70 rounded-lg">
                <p class="font-semibold text-fuchsia-300">${juegoB.titulo}</p>
                ${juegoB.contras.map(c => `<li class="text-gray-200 text-sm">✗ ${c}</li>`).join('')}
            </ul>
        </div>
    `;

    resultadosDiv.innerHTML = `
        <div class="space-y-12">
            <div class="grid grid-cols-2 gap-8 mb-8">
                <div class="text-center">
                    <a href="juego.html?id=${juegoA.id}" class="block mb-3">
                        <div class="w-2/3 mx-auto h-48 overflow-hidden rounded-lg shadow-xl cursor-pointer">
                            <img src="${juegoA.imagen}" alt="${juegoA.titulo}" class="w-full h-full object-cover"/>
                        </div>
                    </a>
                    <h2 class="text-2xl font-bold">
                        <a href="juego.html?id=${juegoA.id}" class="text-white hover:text-fuchsia-400 transition-colors">${juegoA.titulo}</a>
                    </h2>
                    <p class="text-fuchsia-300 text-sm">${juegoA.genero}</p>
                </div>
                <div class="text-center">
                    <a href="juego.html?id=${juegoB.id}" class="block mb-3">
                        <div class="w-2/3 mx-auto h-48 overflow-hidden rounded-lg shadow-xl cursor-pointer">
                            <img src="${juegoB.imagen}" alt="${juegoB.titulo}" class="w-full h-full object-cover"/>
                        </div>
                    </a>
                    <h2 class="text-2xl font-bold">
                        <a href="juego.html?id=${juegoB.id}" class="text-white hover:text-fuchsia-400 transition-colors">${juegoB.titulo}</a>
                    </h2>
                    <p class="text-fuchsia-300 text-sm">${juegoB.genero}</p>
                </div>
            </div>
            <h3 class="text-2xl font-bold text-white text-center border-t border-b border-gray-700 py-3">Diferencia de Precios</h3>
            <div class="space-y-4">${preciosTablaHTML}</div>
            ${prosHTML}
            <hr class="border-gray-700">
            ${contrasHTML}
        </div>
    `;
}

/* Exponer funciones al ámbito global necesario para la página de comparación */
window.cargarComparacion = cargarComparacion;
window.llenarDropdowns = llenarDropdowns;

document.addEventListener('DOMContentLoaded', () => {

    if (document.getElementById('seleccion-juego-a')) {
        llenarDropdowns();
    }

    if (document.getElementById('detalle-juego')) {
        cargarDetalleJuego();
    }

});