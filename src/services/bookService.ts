import { mockBooks, mockChapters, mockUserBooks, fetchBookByTitle, fetchChaptersByBookId } from '../mockData';

const USE_MOCK = true;

export const getBooks = async() =>{
    if(USE_MOCK){
        return new Promise(resolve=> resolve(mockBooks));
    }
    const response = await fetch('/api/books');
    if(!response.ok){
        throw new Error("Error extrayendo libros");
    }
    return response.json()
}

export const getChapters = async()=>{
    if(USE_MOCK){
        return new Promise(resolve => resolve(mockChapters));
    }
    const response = await fetch('/api/chapters');
    if(!response.ok){
        throw new Error("Error al extraer capitulos");
    }
    return response.json()
}

export const getUserBooks = async()=>{
    if(USE_MOCK){
        return new Promise(resolve => resolve(mockUserBooks));
    }
    const response = await fetch('/api/userBooks');
    if(!response.ok){
        throw new Error("Error al extraer libreria del usuario");
    }
    return response.json()
}

export const getBookByTitle = async (title: string) =>{
    if(USE_MOCK){
        return fetchBookByTitle(title);
    }
    const response = await fetch(`/api/books/title/${encodeURIComponent(title)}`);
    if(!response.ok){
        throw new Error("Error al extraer el titulo por el titulo");
    }
    return response.json()
};

export const updateReadingProgress = async (
    bookId: number,
    chapter:number,
    paragraph: number
)=>{
    if(USE_MOCK){
        return Promise.resolve({ success: true });
    }

    const response = await fetch('api/users/progress',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ bookId, chapter, paragraph })
    });
    if(!response.ok){
        return new Error("Error al importar el progreso de lectura");
    };
    return response.json();
};

export const getChaptersByBook = async (
    bookId: number
) =>{
    if(USE_MOCK){
        return Promise.resolve(fetchChaptersByBookId(bookId));
    }

    const response = await fetch(`/api/chapters/${bookId}`);
    if(!response.ok){
        throw new Error ("Error al importar los capitulos por libro");
    };
    return response.json();
}

export const toggleFavoriteBook = async (bookId: number, isFavorite: boolean) => {
    if(USE_MOCK){
        return Promise.resolve({ success: true });
    }

    const response = await fetch('/api/users/favorites', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ bookId, isFavorite })
    });
    if(!response.ok){
        throw new Error("Error al actualizar el estado de favorito");
    }
    return response.json();
};

export const toggleSaveBook = async (bookId: number, isSaved: boolean) => {
    if(USE_MOCK){
        return Promise.resolve({ success: true });
    }

    const response = await fetch('/api/users/saved', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ bookId, isSaved })
    });
    if(!response.ok){
        throw new Error("Error al actualizar el estado de guardado");
    }
    return response.json();
};