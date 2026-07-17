import { useState } from "react";
import SearchWrapper from '../components/Search/SearchWrapper';
import type Book from '../types/Book';
import CategorySection from '../components/BookSections/CategorySection';
import ProductDescription from '../components/BookSections/ProductDescription';

// Datos de prueba (recordar borrarlos luego)
const mockBooks: Book[] = [
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
        direccion_portada: "https://placehold.co/150x220?text=Mistborn"
    },
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
        direccion_portada: "https://placehold.co/150x220?text=Cien años soledad"
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