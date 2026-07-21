import { useEffect, useState, useMemo } from "react";

import ProductDescription from "../components/BookSections/ProductDescription";
import TypeText from '../components/TypeText';
import styles from "./HomePage.module.css";
import SearchWrapper from '../components/Search/SearchWrapper';
import { useBookNavigation } from '../Hooks/useBookNavigation';
import { useBookModal } from '../Hooks/useBookModal';
import  { getBooks, getUserBooks, getChapters } from '../services/bookService';
import type Chapter from "../types/Chapter";
import type Book from '../types/Book';
import type UserBooks from "../types/UserBooks";
import LoadingPage from './LoadingPage';
import UserSection from '../components/BookSections/UserSection/UserSection';

export default function Home(){
    const [books, setBooks] = useState<Book[]|[]>([]);
    const [chapters, setChapters] = useState<Chapter[]|[]>([]);
    const [userLibrary, setUserLibrary] = useState<UserBooks[]>([]);
    const { handleReadBook } = useBookNavigation();
    const [isLoading, setIsLoading] = useState(true);

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

    const typeWritter = (
        <div className={styles.search_header}>
            < TypeText/>
            <span className={styles.cursor_text}>_</span>
        </div>
    )

    return(
        <>
            <SearchWrapper
                booksPool={books}
                onSelect={handleSelectBook}
                topContent={typeWritter}
            >
                <div role='group' className={styles.fade_in}>
                    <UserSection
                        listToShow={userLibrary}
                        handleSelectBook={handleSelectBook}
                        linkTo="/Personal"
                        isAtHome={true}
                    />

                    <UserSection
                        listToShow={notReadList}
                        handleSelectBook={handleSelectBook}
                        linkTo="/Categories"
                        isAtHome={true}
                    />
                    <footer className={styles.home_footer}>
                        <section className={styles.mision}>
                            <h3>Mision</h3>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam pariatur tenetur voluptatum magnam totam dolore natus? Unde laudantium, dolorum magni saepe nesciunt, illo dignissimos illum quaerat asperiores, voluptatibus error quidem.
                            </p>
                        </section>
                        <section className={styles.vision}>
                            <h3>Vision</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur odio quod eaque at iusto molestiae non! Aperiam maxime earum aspernatur, repudiandae adipisci quidem iusto quis eveniet eaque, facilis, incidunt inventore.
                            </p>
                        </section>
                    </footer>
                </div>
            </SearchWrapper>
            {/* Popup de descripción */}
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
        </>
    );
}