import { useEffect, useState} from "react";

import BookCards from "../components/BookSections/BookCards";
import ProductDescription from "../components/BookSections/ProductDescription";
import TypeText from '../components/TypeText';
import styles from "./HomePage.module.css";
import SearchWrapper from '../components/Search/SearchWrapper';
import { Link } from 'react-router-dom';
import { useBookNavigation } from '../Hooks/useBookNavigation';
import { useBookModal } from '../Hooks/useBookModal';
import  { getBooks, getUserBooks, getChapters } from '../services/bookService';
import type Chapter from "../types/Chapter";
import type Book from '../types/Book';
import type UserBooks from "../types/UserBooks";
import LoadingPage from './LoadingPage';

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

    const continueReadingList = userLibrary.filter((item)=>item.estado === "LEYENDO");
    const notReadList = userLibrary.filter(item => item.estado==="SIN LEER");

    const currentUserBook = selectedBook
        ? userLibrary.find((ub) => ub.libro.id_producto === selectedBook.id_producto) 
        : null;

    const typeWritter = (
        <div className={styles.search_header}>
            < TypeText/>
            <span className={styles.cursor_text}>_</span>
        </div>
    )

    // Hacer una petición API a la DB
    useEffect(()=>{
        const fetchBooks = async () =>{
            try{
                const response = await fetch('/api/users/books');
                const data = await response.json();
                setUserLibrary(data);
            }catch(error){
                console.error("Error al importar los libros", error);
            }
        };
        fetchBooks();
    },[]);

    return(
        <>
            <SearchWrapper
                booksPool={books}
                onSelect={handleSelectBook}
                topContent={typeWritter}
            >
                <div className={styles.fade_in}>
                    {continueReadingList.length > 0 && (
                        <section>
                            <div className={styles.section_header}>
                                <h2>Continuar leyendo...</h2>
                                <span className={styles.see_all}>Ver todos &rarr;</span>
                            </div>
                            <div className={styles.continue_reading}>
                                {continueReadingList.map((userBook) => (
                                    <BookCards
                                        key={userBook.libro.id_producto}
                                        book={userBook.libro}
                                        onSelect={handleSelectBook}
                                    />
                                ))}
                            </div>
                        </section>
                    )}
                    <section>
                        <div className={styles.section_header}>
                            <h2>Explora más obras!</h2>
                            <span
                                className={styles.see_all}
                            >
                                <Link
                                    to='/Categories'
                                    className={styles.link_style}
                                >
                                    Ver todos &rarr;
                                </Link>
                            </span>
                        </div>
                        <div className={styles.explore_more}>
                            {notReadList.map((userBook) => (
                                <BookCards
                                    key={userBook.libro.id_producto}
                                    book={userBook.libro}
                                    onSelect={handleSelectBook}
                                />
                            ))}
                            </div>
                        </section>
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