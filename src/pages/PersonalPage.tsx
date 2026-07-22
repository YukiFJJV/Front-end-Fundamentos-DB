import { useState, useEffect, useMemo } from 'react';
import UserSection from '../components/BookSections/UserSection/UserSection';
import type UserBooks from '../types/UserBooks';
import { getBooks, getUserBooks, getChapters } from '../services/bookService';
import type Book from '../types/Book';
import type Chapter from '../types/Chapter';
import { useBookModal } from '../Hooks/useBookModal';
import ProductDescription from '../components/BookSections/ProductDescription/ProductDescription';
import LoadingPage from './LoadingPage';
import { useBookNavigation } from '../Hooks/useBookNavigation';
import styles from './PersonalPage.module.css'
import Typewriter from '../components/TypeText';

export default function Personal(){
    const [isLoading, setIsLoading] = useState(true);
    const [books, setBooks] = useState<Book[] | []>([]);
    const [userLibrary, setUserLibrary] = useState<UserBooks[] | []>([]);
    const [chapters,  setChapters] = useState<Chapter[]|[]>([]);
    const { handleReadBook } = useBookNavigation();

    useEffect(()=>{
        const loadData = async () =>{
            setIsLoading(true);
            try{
                const[booksData, userLibraryData, chaptersData] = await Promise.all([
                    getBooks(),
                    getUserBooks(),
                    getChapters()
                ]);
                setBooks(booksData as Book[]);
                setUserLibrary(userLibraryData as UserBooks[]);
                setChapters(chaptersData as Chapter[]);
            } catch (error){
                console.error("Error al cargar la información principal", error)
            } finally{
                setIsLoading(false)
            }
        };
        loadData();
    },[])

    const {
        selectedBook,
        isFavorite,
        handleSelectBook,
        handleToggleFavorite,
        closeBook,
        handleToggleSave,
        isSaved
    } = useBookModal(userLibrary);

    const notReadList = useMemo(() => {
        // Filtramos los libros que no están en la biblioteca del usuario
        const unreadBooks = books.filter(
            (book) => !userLibrary.some((userBook) => userBook.libro.id_producto === book.id_producto)
        );

        // Convertimos esos libros al formato UserBooks
        return unreadBooks.map((book) => ({
            id_usuario: 1,
            libro: book,
            estado: "SIN LEER",
            es_comprado: false,
            es_favorito: false,
            capitulo_actual: 1,
            parrafo_actual: 0,
            progreso: 0
        } as UserBooks));
    }, [books, userLibrary]);

    const currentUserBook = useMemo(
        () => selectedBook
            ? userLibrary.find((ub) => ub.libro.id_producto === selectedBook.id_producto) 
            : null,
        [userLibrary, selectedBook]
    );
    return(
        <div role='group' className={styles.fade_in}>
            <h1>
                <Typewriter
                    isAtLibrary={true}
                />
                <span className={styles.cursor_text}>_</span>
            </h1>
            <UserSection
                listToShow={userLibrary}
                handleSelectBook={handleSelectBook}
            />
            <UserSection
                listToShow={notReadList}
                handleSelectBook={handleSelectBook}
            />
            {selectedBook && (
                <ProductDescription
                    isSaved={isSaved}
                    onToggleSave={handleToggleSave}
                    onClickRead={()=>handleReadBook(selectedBook)}
                    userBookInfo={currentUserBook ?? null}
                    book={selectedBook}
                    onClose={closeBook}
                    chaptersByBook={chapters.filter(cap => cap.id_libro === selectedBook.id_producto)}
                    onToggleFavorite={handleToggleFavorite}
                    isFavorite={isFavorite}
                />
            )}
            <LoadingPage
                isLoading={isLoading}
            />
        </div>
    );
}