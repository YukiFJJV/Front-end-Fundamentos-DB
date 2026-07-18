import { useState } from "react";
import SearchWrapper from '../components/Search/SearchWrapper';
import type Book from '../types/Book';
import CategorySection from '../components/BookSections/CategorySection';
import ProductDescription from '../components/BookSections/ProductDescription';

// Datos de prueba (recordar borrarlos luego)
const mockBooks: Book[] = [
    // --- CATEGORÍA: Fantasía Épica (Ampliada para probar el scroll) ---
    {
        id_producto: 1,
        tipo_producto: "Libro Físico",
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
        tipo_producto: "Libro Físico",
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
        tipo_producto: "Libro Físico",
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
        tipo_producto: "Ebook",
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
        tipo_producto: "Ebook",
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
        tipo_producto: "Libro Físico",
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
        tipo_producto: "Libro Físico",
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
        tipo_producto: "AudioLibro",
        autor: "J.R.R. Tolkien",
        genero: "Fantasía Épica",
        editorial: "Minotauro",
        titulo: "Las Dos Torres",
        descripcion: "La Comunidad se ha disuelto, pero la misión de destruir el Anillo Único debe continuar a toda costa.",
        isbn: "978-8445071418",
        fecha_publicacion: "1954-11-11",
        direccion_portada: "https://placehold.co/150x220?text=Dos+Torres"
    },

    // --- OTRAS CATEGORÍAS (Para mantener variedad) ---
    {
        id_producto: 2,
        tipo_producto: "Ebook",
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
        tipo_producto: "AudioLibro",
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

export default function Categories(){
    const [selectedBook, setSelectedBook] = useState<Book | null>(null);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const handleSelectBook = (book:Book) =>{
        setSelectedBook(book);
    };

    return(
        <>
            <SearchWrapper
                onSelect={handleSelectBook}
                booksPool={mockBooks}
                selectedCategories={selectedCategories}
                setSelectedCategories={setSelectedCategories}
                hasFilter={true}
            >
                <CategorySection
                    poolBooks={mockBooks}
                    onSelect={handleSelectBook}
                    selectedCategories={selectedCategories}
                />
            </SearchWrapper>
            {selectedBook && (
                <ProductDescription
                    book={selectedBook}
                    onClose={() => setSelectedBook(null)}
                />
            )}
        </>
    );
}