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
    },
    {
        id_capitulo: 6,
        id_libro: 2,
        numero_capitulo: 1,
        titulo_capitulo: "Una trampa en Arrakis",
        sinapsis: "El duque Leto Atreides acepta el feudo del peligroso planeta desértico Arrakis, sabiendo que es una trampa orquestada por sus enemigos, los Harkonnen.",
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
        cantidad_paginas: 42
    },
    {
        id_capitulo: 7,
        id_libro: 2,
        numero_capitulo: 2,
        titulo_capitulo: "La caja de dolor",
        sinapsis: "Paul Atreides se enfrenta a la reverenda madre Mohiam y a la prueba del Gom Jabbar para demostrar que sus instintos humanos dominan a los animales.",
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
        cantidad_paginas: 38
    },
    {
        id_capitulo: 8,
        id_libro: 2,
        numero_capitulo: 3,
        titulo_capitulo: "Viaje al desierto",
        sinapsis: "La familia Atreides abandona su hogar ancestral en Caladan y llega al abrasador planeta Arrakis, enfrentándose de inmediato a intrigas palaciegas y al rigor del clima.",
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
        cantidad_paginas: 45
    },

    // --- Capítulos para el Libro 3: Cien años de soledad ---
    {
        id_capitulo: 9,
        id_libro: 3,
        numero_capitulo: 1,
        titulo_capitulo: "Macondo y los gitanos",
        sinapsis: "Frente al pelotón de fusilamiento, el coronel Aureliano Buendía recuerda la época en que Macondo era una aldea de barro y cañabrava visitada por los inventos de Melquíades.",
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
        cantidad_paginas: 35
    },
    {
        id_capitulo: 10,
        id_libro: 3,
        numero_capitulo: 2,
        titulo_capitulo: "El galeón español",
        sinapsis: "José Arcadio Buendía, obsesionado con encontrar una salida al mar, emprende una expedición a través de la selva y halla los restos fantasmales de un enorme barco.",
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
        cantidad_paginas: 31
    },
    {
        id_capitulo: 11,
        id_libro: 3,
        numero_capitulo: 3,
        titulo_capitulo: "La peste del insomnio",
        sinapsis: "La tranquilidad de Macondo se ve alterada por la llegada de Rebeca y una extraña enfermedad que borra los recuerdos y el sueño de todos sus habitantes.",
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
        cantidad_paginas: 39
    },

    // --- Capítulos para el Libro 4: El Pozo de la Ascensión ---
    {
        id_capitulo: 12,
        id_libro: 4,
        numero_capitulo: 1,
        titulo_capitulo: "El Nuevo Rey",
        sinapsis: "Elend Venture lucha por mantener el control de Luthadel mientras instituye un nuevo gobierno democrático en medio de la desconfianza general.",
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
        cantidad_paginas: 34
    },
    {
        id_capitulo: 13,
        id_libro: 4,
        numero_capitulo: 2,
        titulo_capitulo: "Asesinos en la Bruma",
        sinapsis: "Vin es atacada por un grupo de asesinos nacidos de la bruma, descubriendo que un misterioso vigía alomántico los ha estado siguiendo en la noche.",
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
        cantidad_paginas: 46
    },
    {
        id_capitulo: 14,
        id_libro: 4,
        numero_capitulo: 3,
        titulo_capitulo: "El espía kandra",
        sinapsis: "La tripulación descubre que un kandra espía se ha infiltrado en el palacio, tomando los huesos de uno de los suyos. La paranoia comienza a fracturar al equipo.",
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
        cantidad_paginas: 29
    }
];

// Datos de prueba (recordar borrarlos luego)
export const mockBooks: Book[] = [
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
    {
        id_producto: 11,
        autor: "George Orwell",
        genero: "Ciencia Ficción",
        editorial: "DeBolsillo",
        titulo: "1984",
        descripcion: "El Gran Hermano te vigila. Una distopía sobre el control totalitario y la pérdida de la libertad.",
        isbn: "978-8499890944",
        fecha_publicacion: "1949-06-08",
        direccion_portada: "https://placehold.co/150x220?text=1984"
    },
    {
        id_producto: 12,
        autor: "Isaac Asimov",
        genero: "Ciencia Ficción",
        editorial: "DeBolsillo",
        titulo: "Fundación",
        descripcion: "El Imperio Galáctico se derrumba, y Hari Seldon idea un plan para salvar el conocimiento de la humanidad.",
        isbn: "978-8497599245",
        fecha_publicacion: "1951-05-01",
        direccion_portada: "https://placehold.co/150x220?text=Fundacion"
    },
    {
        id_producto: 13,
        autor: "Ray Bradbury",
        genero: "Ciencia Ficción",
        editorial: "Minotauro",
        titulo: "Fahrenheit 451",
        descripcion: "Guy Montag es un bombero, y su trabajo consiste en quemar libros que están prohibidos.",
        isbn: "978-8445077250",
        fecha_publicacion: "1953-10-19",
        direccion_portada: "https://placehold.co/150x220?text=Fahrenheit+451"
    },
    {
        id_producto: 14,
        autor: "William Gibson",
        genero: "Cyberpunk",
        editorial: "Minotauro",
        titulo: "Neuromante",
        descripcion: "Un vaquero de la consola es contratado para realizar el hackeo definitivo.",
        isbn: "978-8445076628",
        fecha_publicacion: "1984-07-01",
        direccion_portada: "https://placehold.co/150x220?text=Neuromante"
    },
    {
        id_producto: 15,
        autor: "Brandon Sanderson",
        genero: "Fantasía Épica",
        editorial: "Nova",
        titulo: "Elantris",
        descripcion: "La ciudad de los dioses ha caído. Una historia de magia maldita y política desesperada.",
        isbn: "978-8416690183",
        fecha_publicacion: "2005-04-21",
        direccion_portada: "https://placehold.co/150x220?text=Elantris"
    }
];

// Hemos agregado 15 libros del usuario para llenar bien los carruseles
export const mockUserBooks: UserBooks[] = [
    // --- LEYENDO (6 libros para probar el scroll) ---
    {
        id_usuario: 1,
        libro: mockBooks[0], // El Imperio Final
        estado: "LEYENDO",
        es_comprado: true,
        es_favorito: true,
        capitulo_actual: 3,
        parrafo_actual: 4,
        progreso: 25
    },
    {
        id_usuario: 1,
        libro: mockBooks[5], // El Nombre del Viento
        estado: "LEYENDO",
        es_comprado: true,
        es_favorito: true,
        capitulo_actual: 12,
        parrafo_actual: 0,
        progreso: 45
    },
    {
        id_usuario: 1,
        libro: mockBooks[8], // La Comunidad del Anillo
        estado: "LEYENDO",
        es_comprado: false,
        es_favorito: false,
        capitulo_actual: 1,
        parrafo_actual: 0,
        progreso: 5
    },
    {
        id_usuario: 1,
        libro: mockBooks[10], // 1984
        estado: "LEYENDO",
        es_comprado: true,
        es_favorito: false,
        capitulo_actual: 5,
        parrafo_actual: 2,
        progreso: 60
    },
    {
        id_usuario: 1,
        libro: mockBooks[12], // Fahrenheit 451
        estado: "LEYENDO",
        es_comprado: true,
        es_favorito: true,
        capitulo_actual: 2,
        parrafo_actual: 10,
        progreso: 30
    },
    {
        id_usuario: 1,
        libro: mockBooks[13], // Neuromante
        estado: "LEYENDO",
        es_comprado: false,
        es_favorito: false,
        capitulo_actual: 1,
        parrafo_actual: 0,
        progreso: 2
    },

    // --- LEIDO ---
    {
        id_usuario: 1,
        libro: mockBooks[2], // Cien años de soledad
        estado: "LEIDO",
        es_comprado: true,
        es_favorito: true,
        capitulo_actual: 20,
        parrafo_actual: 0,
        progreso: 100
    },
    {
        id_usuario: 1,
        libro: mockBooks[7], // Juego de Tronos
        estado: "LEIDO",
        es_comprado: true,
        es_favorito: false,
        capitulo_actual: 73,
        parrafo_actual: 0,
        progreso: 100
    },

    // --- PENDIENTE (5 libros para probar el scroll) ---
    {
        id_usuario: 1,
        libro: mockBooks[3], // El Pozo de la Ascensión
        estado: "PENDIENTE",
        es_comprado: false,
        es_favorito: true,
        capitulo_actual: 0,
        parrafo_actual: 0,
        progreso: 0
    },
    {
        id_usuario: 1,
        libro: mockBooks[4], // El Héroe de las Eras
        estado: "PENDIENTE",
        es_comprado: false,
        es_favorito: false,
        capitulo_actual: 0,
        parrafo_actual: 0,
        progreso: 0
    },
    {
        id_usuario: 1,
        libro: mockBooks[6], // El Temor de un Hombre Sabio
        estado: "PENDIENTE",
        es_comprado: true,
        es_favorito: true,
        capitulo_actual: 0,
        parrafo_actual: 0,
        progreso: 0
    },
    {
        id_usuario: 1,
        libro: mockBooks[11], // Fundación
        estado: "PENDIENTE",
        es_comprado: false,
        es_favorito: false,
        capitulo_actual: 0,
        parrafo_actual: 0,
        progreso: 0
    },
    {
        id_usuario: 1,
        libro: mockBooks[14], // Elantris
        estado: "PENDIENTE",
        es_comprado: true,
        es_favorito: true,
        capitulo_actual: 0,
        parrafo_actual: 0,
        progreso: 0
    },

    // --- SIN LEER ---
    {
        id_usuario: 1,
        libro: mockBooks[1], // Dune
        estado: "SIN LEER",
        es_comprado: true,
        es_favorito: true, // Lo marcamos favorito aunque no lo haya leido para probar la lista
        capitulo_actual: 0,
        parrafo_actual: 0,
        progreso: 0
    },
    {
        id_usuario: 1,
        libro: mockBooks[9], // Las Dos Torres
        estado: "SIN LEER",
        es_comprado: true,
        es_favorito: false,
        capitulo_actual: 0,
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