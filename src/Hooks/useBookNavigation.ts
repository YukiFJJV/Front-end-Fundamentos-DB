import { useNavigate } from 'react-router-dom'
import type Book from '../types/Book';

export function useBookNavigation(){
    const navigate = useNavigate();

    // Recibimos el libro directamente como parámetro
    const handleReadBook = (book: Book | null) => {
        if (book) {
            const tituloParaUrl = encodeURIComponent(book.titulo);
            navigate(`/Reading/${tituloParaUrl}`);
        }
    };

    return { handleReadBook };
}
