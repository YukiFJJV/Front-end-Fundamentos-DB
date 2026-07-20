import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { getUserBooks, getBookByTitle, getChaptersByBook } from '../services/bookService';
import type Book from '../types/Book';
import type Chapter from '../types/Chapter';
import type UserBooks from '../types/UserBooks';
import { useReadingProgress } from '../Hooks/useReadingProgress';
import styles from './ReadingPage.module.css'

export default function ReadingPage(){
    // Extraemos el parámetro de la URL
    const { titulo } = useParams<{ titulo: string }>();
    const tituloDecodificado = titulo ? decodeURIComponent(titulo) : '';
    const navigate = useNavigate();
    // Le asignamos un Map para poder guardar numeros enteros en la llave
    // index: contenido
    const chaptersRefs = useRef<Map<number, HTMLElement>>(new Map());
    // Saber si el usuario está de nuevo donde se quedó
    const scrollRestored = useRef(false);

    const [book, setBook] = useState<Book | null>(null);
    const [chapters, setChapters] = useState<Chapter[] | []>([]);
    const [isLoading, setIsLoading] = useState(true);

    const [isAuthorized, setIsAuthorized] = useState(false);
    const [userBookData, setUserBookData] = useState<UserBooks | null>(null);

    // Cambiar a la API cuando esté lista
    useEffect(() => {
        const loadData = async () => {
            setIsLoading(true);
            try {
                const foundBook:Book = await getBookByTitle(tituloDecodificado);
                setBook(foundBook);

                if (foundBook) {
                    // Buscamos la biblioteca del usuario actual
                    const userLibrary = await getUserBooks();
                    const foundUserBooks:UserBooks = userLibrary.find((ub:UserBooks)=>ub.libro.id_producto === foundBook.id_producto);

                    setUserBookData(foundUserBooks || null);

                    // Si se encontró el libro y el user compró
                    if(foundUserBooks && foundUserBooks.es_comprado){
                        setIsAuthorized(true);
                        const foundChapters = await getChaptersByBook(foundBook.id_producto);
                        setChapters(foundChapters);
                    }else{
                        setIsAuthorized(false);
                    }
                };
            }catch (error){
                console.log("Error conectando a la API: ", error)
            }finally{
                setIsLoading(false)
            }
        }
        if (tituloDecodificado) {
                loadData();
            }
    }, [tituloDecodificado]);

    useReadingProgress(book, chapters);

    // Restaurar la última lectura del usuario
    useEffect(()=>{
        if(chapters.length > 0 && userBookData && !scrollRestored.current){
            // Esperamos a que se terminen de renderizar los parrafos
            setTimeout(()=>{
                const targetID =
                    `cap_${userBookData.capitulo_actual}_p_${userBookData.parrafo_actual}`

                const targetElement = document.getElementById(targetID);

                if(targetElement){
                    targetElement.scrollIntoView({
                        behavior: 'auto', // salto instantaneo
                        block: 'start' // se alinea al inicio de la pantalla
                    });
                    scrollRestored.current=true;
                }
            },150);
        };
    },[chapters, userBookData])

    if (isLoading) return <div className={styles.statusContainer}>Cargando datos del libro...</div>;

    if (!book) return <div className={styles.statusContainer}>El libro no existe.</div>;

    if (!isAuthorized) {
        return (
            <div className={styles.statusContainer}>
                <h2>{book.titulo}</h2>
                <p>Aún no tienes acceso a este libro.</p>
                <button
                    className={styles.statusButton}
                    onClick={() => navigate('/store')}>Ir a la tienda
                </button>
            </div>
        );
    }

    // Mostrar la lectura
    return (
        <div className={styles.pageWrapper}>
            <div className={styles.readingContainer}>
                <header className={styles.readingHeader}>
                    <h1>{book.titulo}</h1>
                    {userBookData?.es_favorito && <span className={styles.favoriteBadge}>❤️ Favorito</span>}
                </header>

                <main className="reading-content">
                    {chapters.length > 0 ? (
                    chapters.map((chapter) => (
                        <article
                            key={chapter.id_capitulo}
                            className="chapter"
                            ref={(node)=>{
                                if(!chaptersRefs.current)
                                    return;
                                if(node){
                                    chaptersRefs.current.set(chapter.id_capitulo, node)
                                }else{
                                    chaptersRefs.current.delete(chapter.id_capitulo)
                                }
                            }}
                        >
                        <h2>Capítulo {chapter.numero_capitulo}: {chapter.titulo_capitulo}</h2>
                        <div
                            className="chapter_text"
                            role='textbox'
                        >
                            {chapter.contenido.split("\n").map((paragraph:string, index)=>{
                                if(paragraph.trim()==='')
                                    return null;
                                return(
                                    <p
                                        key={index}
                                        id={`cap_${chapter.numero_capitulo}_p_${index}`}
                                        className={styles.observableParagraph}
                                    >
                                        {paragraph}
                                    </p>
                                );
                            })}
                        </div>
                        </article>
                    ))
                    ) : (
                    <p>
                        Este libro aún no tiene capítulos disponibles.
                    </p>
                    )}
                </main>
            </div>
        </div>
    );
}