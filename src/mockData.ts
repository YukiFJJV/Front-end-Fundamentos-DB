import type Chapter from './types/Chapter';
import type Book from './types/Book';
import type UserBooks from './types/UserBooks';

// Capitulos de prueba
export const mockChapters: Chapter[] = [
    {
        id_capitulo: 1,
        id_libro: 1,
        numero_capitulo: 1,
        titulo_capitulo: "Cenizas del Cielo",
        sinapsis: "Kelsier observa el sufrimiento de los skaa en una plantación bajo la lluvia de ceniza y, motivado por su poder, decide que es hora de iniciar una rebelión contra el Lord Legislador.",
        contenido: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus culpa iusto ullam maiores quia odio delectus vel eligendi, ipsum amet. Unde molestiae nostrum optio temporibus vel! Architecto repellendus vitae excepturi.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure dolorem, ad quibusdam aspernatur eaque atque sequi dolorum reprehenderit! Voluptates illo cum rem cupiditate cumque doloremque enim deserunt asperiores non libero.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore reiciendis autem, harum quasi, quam iure, sed voluptas illo tempora beatae asperiores! Deleniti delectus ad modi distinctio, assumenda quia odit magni?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla veniam cum expedita error ratione quasi consectetur, quod consequatur! Consequatur, ratione eaque. Consequatur assumenda omnis tenetur quidem minus rem neque? Consequatur.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut laborum, quibusdam exercitationem nulla, tempora fugit illo, quas ullam ipsam rem vitae! Doloribus culpa magni aut soluta, natus accusantium reprehenderit sapiente?
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione ab eum, itaque alias sequi vero, blanditiis impedit qui sed expedita, ipsum sunt corrupti reiciendis iusto autem doloribus animi nemo quis.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis deleniti repudiandae, provident sit ipsa et deserunt voluptates odio corrupti sapiente voluptatum iure nobis fugiat, vero dolorem a non velit aut.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sapiente dicta ea vel dignissimos ullam et tempora nobis animi voluptatibus similique, totam eos atque obcaecati nisi veniam delectus asperiores voluptates.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, sint. Non assumenda, fuga distinctio facere voluptatum id doloremque sunt, iusto necessitatibus inventore praesentium officia culpa libero labore dicta ullam in.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni dolorem laborum voluptatem ex magnam tempore exercitationem architecto sed, velit consequuntur cupiditate provident autem, illum doloremque, quis nesciunt repellat? Consectetur, incidunt.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum repudiandae porro, dicta ipsa repellat dolorem quidem maxime adipisci assumenda magni facere maiores facilis nostrum amet ea, quas optio rerum laboriosam.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit nemo voluptatum non voluptates asperiores exercitationem? Adipisci maxime illo, sit eveniet minima autem esse vel suscipit harum excepturi? Optio, exercitationem aperiam!`,
        cantidad_paginas: 30
    },
    {
        id_capitulo: 2,
        id_libro: 1,
        numero_capitulo: 2,
        titulo_capitulo: "La Banda de Ladrones",
        sinapsis: "Vin, una joven ladrona en los bajos fondos de Luthadel, utiliza su misteriosa 'Suerte' para manipular emociones y sobrevivir, a punto de descubrir la verdadera naturaleza de su poder.",
        contenido: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus culpa iusto ullam maiores quia odio delectus vel eligendi, ipsum amet. Unde molestiae nostrum optio temporibus vel! Architecto repellendus vitae excepturi.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure dolorem, ad quibusdam aspernatur eaque atque sequi dolorum reprehenderit! Voluptates illo cum rem cupiditate cumque doloremque enim deserunt asperiores non libero.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore reiciendis autem, harum quasi, quam iure, sed voluptas illo tempora beatae asperiores! Deleniti delectus ad modi distinctio, assumenda quia odit magni?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla veniam cum expedita error ratione quasi consectetur, quod consequatur! Consequatur, ratione eaque. Consequatur assumenda omnis tenetur quidem minus rem neque? Consequatur.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut laborum, quibusdam exercitationem nulla, tempora fugit illo, quas ullam ipsam rem vitae! Doloribus culpa magni aut soluta, natus accusantium reprehenderit sapiente?
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione ab eum, itaque alias sequi vero, blanditiis impedit qui sed expedita, ipsum sunt corrupti reiciendis iusto autem doloribus animi nemo quis.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis deleniti repudiandae, provident sit ipsa et deserunt voluptates odio corrupti sapiente voluptatum iure nobis fugiat, vero dolorem a non velit aut.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sapiente dicta ea vel dignissimos ullam et tempora nobis animi voluptatibus similique, totam eos atque obcaecati nisi veniam delectus asperiores voluptates.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, sint. Non assumenda, fuga distinctio facere voluptatum id doloremque sunt, iusto necessitatibus inventore praesentium officia culpa libero labore dicta ullam in.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni dolorem laborum voluptatem ex magnam tempore exercitationem architecto sed, velit consequuntur cupiditate provident autem, illum doloremque, quis nesciunt repellat? Consectetur, incidunt.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum repudiandae porro, dicta ipsa repellat dolorem quidem maxime adipisci assumenda magni facere maiores facilis nostrum amet ea, quas optio rerum laboriosam.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit nemo voluptatum non voluptates asperiores exercitationem? Adipisci maxime illo, sit eveniet minima autem esse vel suscipit harum excepturi? Optio, exercitationem aperiam!`,
        cantidad_paginas: 51
    },
    {
        id_capitulo: 3,
        id_libro: 1,
        numero_capitulo: 3,
        titulo_capitulo: "El Secreto de los Metales",
        sinapsis: "Bajo la tutela de Kelsier, Vin ingiere una solución con virutas metálicas y aprende a 'quemar' estaño, despertando abruptamente sus sentidos alománticos.",
        contenido: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus culpa iusto ullam maiores quia odio delectus vel eligendi, ipsum amet. Unde molestiae nostrum optio temporibus vel! Architecto repellendus vitae excepturi.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure dolorem, ad quibusdam aspernatur eaque atque sequi dolorum reprehenderit! Voluptates illo cum rem cupiditate cumque doloremque enim deserunt asperiores non libero.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore reiciendis autem, harum quasi, quam iure, sed voluptas illo tempora beatae asperiores! Deleniti delectus ad modi distinctio, assumenda quia odit magni?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla veniam cum expedita error ratione quasi consectetur, quod consequatur! Consequatur, ratione eaque. Consequatur assumenda omnis tenetur quidem minus rem neque? Consequatur.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut laborum, quibusdam exercitationem nulla, tempora fugit illo, quas ullam ipsam rem vitae! Doloribus culpa magni aut soluta, natus accusantium reprehenderit sapiente?
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione ab eum, itaque alias sequi vero, blanditiis impedit qui sed expedita, ipsum sunt corrupti reiciendis iusto autem doloribus animi nemo quis.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis deleniti repudiandae, provident sit ipsa et deserunt voluptates odio corrupti sapiente voluptatum iure nobis fugiat, vero dolorem a non velit aut.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sapiente dicta ea vel dignissimos ullam et tempora nobis animi voluptatibus similique, totam eos atque obcaecati nisi veniam delectus asperiores voluptates.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, sint. Non assumenda, fuga distinctio facere voluptatum id doloremque sunt, iusto necessitatibus inventore praesentium officia culpa libero labore dicta ullam in.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni dolorem laborum voluptatem ex magnam tempore exercitationem architecto sed, velit consequuntur cupiditate provident autem, illum doloremque, quis nesciunt repellat? Consectetur, incidunt.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum repudiandae porro, dicta ipsa repellat dolorem quidem maxime adipisci assumenda magni facere maiores facilis nostrum amet ea, quas optio rerum laboriosam.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit nemo voluptatum non voluptates asperiores exercitationem? Adipisci maxime illo, sit eveniet minima autem esse vel suscipit harum excepturi? Optio, exercitationem aperiam!`,
        cantidad_paginas: 49
    }
];

// Datos de prueba (recordar borrarlos luego)
export const mockBooks: Book[] = [
    // --- PROBAR SCROLL ---
    {
        id_producto: 1,
        autor: "Brandon Sanderson",
        genero: "Fantasía Épica",
        editorial: "Nova",
        titulo: "El Imperio Final",
        descripcion: "En un mundo donde la ceniza cae del cielo y un lord legislador domina con mano de hierro.",
        isbn: "978-8417347291",
        fecha_publicacion: "2006-07-17",
        direccion_portada: "https://placehold.co/150x220?text=Imperio+Final"
    },
    {
        id_producto: 4,
        autor: "Brandon Sanderson",
        genero: "Fantasía Épica",
        editorial: "Nova",
        titulo: "El Pozo de la Ascensión",
        descripcion: "El Lord Legislador ha sido derrocado, pero sobrevivir a las consecuencias será el verdadero reto.",
        isbn: "978-8417347307",
        fecha_publicacion: "2007-08-21",
        direccion_portada: "https://placehold.co/150x220?text=Pozo+Ascensión"
    },
    {
        id_producto: 5,
        autor: "Brandon Sanderson",
        genero: "Fantasía Épica",
        editorial: "Nova",
        titulo: "El Héroe de las Eras",
        descripcion: "Para salvar el mundo, Vin debe descubrir el verdadero significado detrás del Héroe de las Eras.",
        isbn: "978-8417347314",
        fecha_publicacion: "2008-10-14",
        direccion_portada: "https://placehold.co/150x220?text=Heroe+Eras"
    },
    {
        id_producto: 6,
        autor: "Patrick Rothfuss",
        genero: "Fantasía Épica",
        editorial: "Plaza & Janés",
        titulo: "El Nombre del Viento",
        descripcion: "He robado princesas a reyes agónicos. Incendié la ciudad de Trebon. He pasado la noche con Felurian...",
        isbn: "978-8401337208",
        fecha_publicacion: "2007-03-27",
        direccion_portada: "https://placehold.co/150x220?text=Nombre+Viento"
    },
    {
        id_producto: 7,
        autor: "Patrick Rothfuss",
        genero: "Fantasía Épica",
        editorial: "Plaza & Janés",
        titulo: "El Temor de un Hombre Sabio",
        descripcion: "El hombre había desaparecido. El mito no. Músico, mendigo, ladrón, estudiante, mago, héroe y asesino.",
        isbn: "978-8401339011",
        fecha_publicacion: "2011-03-01",
        direccion_portada: "https://placehold.co/150x220?text=Temor+Sabio"
    },
    {
        id_producto: 8,
        autor: "George R.R. Martin",
        genero: "Fantasía Épica",
        editorial: "Gigamesh",
        titulo: "Juego de Tronos",
        descripcion: "En el continente de Poniente, donde las estaciones duran décadas, las casas nobles luchan por el Trono de Hierro.",
        isbn: "978-8496208919",
        fecha_publicacion: "1996-08-01",
        direccion_portada: "https://placehold.co/150x220?text=Juego+Tronos"
    },
    {
        id_producto: 9,
        autor: "J.R.R. Tolkien",
        genero: "Fantasía Épica",
        editorial: "Minotauro",
        titulo: "La Comunidad del Anillo",
        descripcion: "Un hobbit recibe la misión de destruir un anillo de poder antes de que caiga en manos del Señor Oscuro.",
        isbn: "978-8445071401",
        fecha_publicacion: "1954-07-29",
        direccion_portada: "https://placehold.co/150x220?text=Comunidad+Anillo"
    },
    {
        id_producto: 10,
        autor: "J.R.R. Tolkien",
        genero: "Fantasía Épica",
        editorial: "Minotauro",
        titulo: "Las Dos Torres",
        descripcion: "La Comunidad se ha disuelto, pero la misión de destruir el Anillo Único debe continuar a toda costa.",
        isbn: "978-8445071418",
        fecha_publicacion: "1954-11-11",
        direccion_portada: "https://placehold.co/150x220?text=Dos+Torres"
    },

    // --- OTRAS CATEGORÍAS ---
    {
        id_producto: 2,
        autor: "Frank Herbert",
        genero: "Ciencia Ficción",
        editorial: "DeBolsillo",
        titulo: "Dune",
        descripcion: "La especia debe fluir. Una aventura épica en el peligroso planeta desierto de Arrakis.",
        isbn: "978-8497596824",
        fecha_publicacion: "1965-08-01",
        direccion_portada: "https://placehold.co/150x220?text=Dune"
    },
    {
        id_producto: 3,
        autor: "Gabriel García Márquez",
        genero: "Realismo Mágico",
        editorial: "Literatura Random House",
        titulo: "Cien años de soledad",
        descripcion: "Muchos años después, frente al pelotón de fusilamiento...",
        isbn: "978-8439728398",
        fecha_publicacion: "1967-05-30",
        direccion_portada: "https://placehold.co/150x220?text=Cien+años+soledad"
    }
];

export const mockUserBooks: UserBooks[] = [
    {
        id_usuario: 1,
        libro: mockBooks[0], // "El Imperio Final"
        estado: "LEYENDO",
        es_comprado: true,
        es_favorito: true,
        capitulo_actual: 1,
        parrafo_actual: 4,
        progreso: 25
    },
    {
        id_usuario: 1,
        libro: mockBooks[8], // "Dune"
        estado: "SIN LEER",
        es_comprado: false,
        es_favorito: false,
        capitulo_actual: 1,
        parrafo_actual: 0,
        progreso: 0
    },
    {
        id_usuario: 1,
        libro: mockBooks[9], // "Cien años de soledad"
        estado: "LEIDO",
        es_comprado: true,
        es_favorito: true,
        capitulo_actual: 3,
        parrafo_actual: 15,
        progreso: 100
    },
    {
        id_usuario: 1,
        libro: mockBooks[0],
        estado: "PENDIENTE",
        es_comprado: false,
        es_favorito: false,
        capitulo_actual: 1,
        parrafo_actual: 0,
        progreso: 0
    }
];

export const fetchBookByTitle = async (
    titulo: string
): Promise<Book | null> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const book = mockBooks.find(b => b.titulo.toLowerCase() === titulo.toLowerCase());
            resolve(book || null);
        }, 800); // Simula 800ms de carga
    });
};

export const fetchChaptersByBookId = async (
    id_libro: number
): Promise<Chapter[] | [] > => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const chapters = mockChapters.filter(c => c.id_libro === id_libro);
            // Ordenamos por número de capítulo por si acaso
            resolve(chapters.sort((a, b) => a.numero_capitulo - b.numero_capitulo));
        }, 800);
    });
};

export const fetchUserBooksById = async(
    id_usuario: number
): Promise<UserBooks[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            // Filtramos el array mockUserBooks para obtener solo los que coinciden con el id_usuario
            const userBooks = mockUserBooks.filter(ub => ub.id_usuario === id_usuario);
            resolve(userBooks);
        }, 800); // Simulamos 800ms de tiempo de respuesta
    });
};