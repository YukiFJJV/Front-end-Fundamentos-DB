export default interface Book{
    id_producto: number;
    autor: string; // join
    genero: string; // join
    editorial: string; // join
    titulo: string;
    descripcion: string;
    isbn: string;
    fecha_publicacion: string;
    direccion_portada: string;
};

