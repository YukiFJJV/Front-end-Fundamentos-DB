import { useState } from 'react';
import type Book from '../types/Book';
import type UserBooks from '../types/UserBooks';
import { toggleFavoriteBook, toggleSaveBook } from '../services/bookService';

export function useBookModal(UserBooks: UserBooks[]) {
    const [selectedBook, setSelectedBook] = useState<Book | null>(null);
    const [isFavorite, setIsFavorite] = useState(false);
    const [isSaved, setIsSaved] = useState(false)

    // Abre el modal y revisa si el libro ya era favorito y guardado
    const handleSelectBook = (book: Book) => {
        setSelectedBook(book);
        const userBook = UserBooks.find((ub) => ub.libro.id_producto === book.id_producto);
        setIsFavorite(userBook?.es_favorito || false);
        setIsSaved(false)
    };

    // Alterna el estado de favorito
    const handleToggleFavorite = async () => {
        if (!selectedBook) return;

        // Verificar si está comprado
        const userBook = UserBooks.find((ub) => ub.libro.id_producto === selectedBook.id_producto);
        if (!userBook?.es_comprado) {
            alert("Debes adquirir este libro para agregarlo a favoritos.");
            return;
        }

        // Actualización
        const newFavoriteState = !isFavorite;
        setIsFavorite(newFavoriteState);

        // Llamada a la API
        try {
            await toggleFavoriteBook(selectedBook.id_producto, newFavoriteState);
        } catch (error) {
            // Si falla, revertimos la UI y avisamos al usuario
            console.error(error);
            setIsFavorite(!newFavoriteState);
            alert("Hubo un error al actualizar favoritos.");
        }
    };

    const handleToggleSave = async () => {
        if (!selectedBook) return;

        const userBook = UserBooks.find((ub) => ub.libro.id_producto === selectedBook.id_producto);
        if (!userBook?.es_comprado) {
            alert("Debes adquirir este libro para agregarlo a favoritos.");
            return;
        }

        const newSavedState = !isSaved;
        setIsSaved(newSavedState);

        try {
            await toggleSaveBook(selectedBook.id_producto, newSavedState);
        } catch (error) {
            console.error(error);
            setIsSaved(!newSavedState);
            alert("Hubo un error al guardar el libro.");
        }
    };

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