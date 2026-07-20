import { useState } from 'react';
import type Book from '../types/Book';
import type UserBooks from '../types/UserBooks';

export function useBookModal(mockUserBooks: UserBooks[]) {
    const [selectedBook, setSelectedBook] = useState<Book | null>(null);
    const [isFavorite, setIsFavorite] = useState(false);
    const [isSaved, setIsSaved] = useState(false)

    // Abre el modal y revisa si el libro ya era favorito y guardado
    const handleSelectBook = (book: Book) => {
        setSelectedBook(book);
        const userBook = mockUserBooks.find((ub) => ub.libro.id_producto === book.id_producto);
        setIsFavorite(userBook?.es_favorito || false);
        setIsSaved(false)
    };

    // Alterna el estado de favorito
    const handleToggleFavorite = () => {
        setIsFavorite((prev) => !prev);
        // REcordar llamar la API Aquí
    };

    const handleToggleSave = () =>{
        setIsSaved((prev)=> !prev)
    }

    // Cierra el modal
    const closeBook = () => {
        setSelectedBook(null);
    };

    return {
        selectedBook,
        isFavorite,
        isSaved,
        handleToggleSave,
        handleSelectBook,
        handleToggleFavorite,
        closeBook,
    };
}