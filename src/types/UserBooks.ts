import type Book from "./Book";

export default interface UserBooks{
    book: Book;
    estado: "SIN LEER" | "PENDIENTE" | "LEYENDO" | "LEIDO";
    es_comprado: boolean;
    favorito: boolean;
};