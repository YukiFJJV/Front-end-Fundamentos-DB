import type Book from './Book';
export default interface UserBooks{
    id_usuario: number,
    libro: Book;
    estado: "SIN LEER" | "PENDIENTE" | "LEYENDO" | "LEIDO";
    es_comprado: boolean;
    es_favorito: boolean;
    capitulo_actual: number;
    parrafo_actual: number;
    progreso: number;
};