export default interface Book{
    id_producto: number;
    tipo_producto: string; // No usamos el id, ya que el backend se encarga de hacer el join
    autor: string; // join
    genero: string; // join
    editorial: string; // join
    titulo: string;
    descripcion: string;
    isbn: string;
    fecha_publicacion: string;
    direccion_portada: string;
};

