import { useNavigate } from 'react-router-dom'
import type Book from '../types/Book';

export function useBookNavigation(){
    const navigate = useNavigate();

    // Agregamos el capítulo como parámetro opcional
    const handleReadBook = (book: Book | null, chapter?: number) => {
        if (book) {
            const urlTitle = encodeURIComponent(book.titulo);
            // Si hay capítulo arma el link completo, si no, manda al generico
            const targetUrl = chapter ?
                `/Reading/${urlTitle}/${chapter}` : `/Reading/${urlTitle}`;
            navigate(targetUrl);
        }
    };

    return { handleReadBook };
}