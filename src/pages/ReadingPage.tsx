import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { getUserBooks, getBookByTitle, getChaptersByBook } from '../services/bookService';
import type Book from '../types/Book';
import type Chapter from '../types/Chapter';
import type UserBooks from '../types/UserBooks';
import { useReadingProgress } from '../Hooks/useReadingProgress';
import styles from './ReadingPage.module.css'
import LoadingPage from './LoadingPage';

export default function ReadingPage(){
    // Extraemos el parámetro de la URL
    const { titulo, capitulo } = useParams<{ titulo: string; capitulo?:string }>();
    const currentChapterNum = capitulo? parseInt(capitulo, 10): 1;
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

                    if (foundUserBooks.estado === 'SIN LEER') {
                            foundUserBooks.capitulo_actual = 1;
                            foundUserBooks.parrafo_actual = 0;
                    }
                    setUserBookData(foundUserBooks || null);
                    // Si es link generico hacemos que regrese a su última lectura
                    if (!capitulo) {
                        navigate(`/Reading/${titulo}/${foundUserBooks.capitulo_actual}`, { replace: true });
                    };

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
    }, [tituloDecodificado, capitulo, navigate, titulo]);

    useReadingProgress(book, chapters);

    // Restaurar la última lectura del usuario
    useEffect(()=>{
        if (userBookData && currentChapterNum !== userBookData.capitulo_actual) {
            scrollRestored.current = true; // Lo marcamos como true para que deje de intentar
            return;
        }
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
    },[chapters, userBookData, currentChapterNum])

    if (isLoading) return(
        <div className={styles.status_container}>
            <LoadingPage
                isLoading={isLoading}
            />
            Cargando datos del libro...
        </div>
    );

    if (!book) return <div className={styles.status_container}>El libro no existe.</div>;

    if (!isAuthorized) {
        return (
            <div className={styles.status_container}>
                <h2>{book.titulo}</h2>
                <p>Aún no tienes acceso a este libro.</p>
                <button
                    className={styles.status_button}
                    onClick={() => navigate('/store')}>Ir a la tienda
                </button>
            </div>
        );
    }

    const currentChapterData = chapters.find(ch=> ch.numero_capitulo === currentChapterNum);
    const totalChapters = chapters.length

    // Mostrar la lectura
    return (
        <div className={styles.page_wrapper}>
            <div className={styles.reading_container}>
                <header className={styles.reading_header}>
                    <h1>{book.titulo}</h1>
                    {userBookData?.es_favorito && <span className={styles.favorite_badge}>❤️ Favorito</span>}
                </header>

                <main className={styles.reading_content}>
                    {currentChapterData ? (
                        <article
                            key={currentChapterData.id_capitulo}
                            className={styles.chapter}
                            ref={(node) => {
                                if (!chaptersRefs.current) return;
                                if (node) chaptersRefs.current.set(currentChapterData.id_capitulo, node);
                                else chaptersRefs.current.delete(currentChapterData.id_capitulo);
                            }}
                        >
                            <h2>Capítulo {currentChapterData.numero_capitulo}: {currentChapterData.titulo_capitulo}</h2>
                            <div className={styles.chapter_text} role='textbox'>
                                {currentChapterData.contenido.split("\n").map((paragraph: string, index) => {
                                    if (paragraph.trim() === '') return null;
                                    return (
                                        <p
                                            key={index}
                                            id={`cap_${currentChapterData.numero_capitulo}_p_${index}`}
                                            className={styles.observable_paragraph}
                                        >
                                            {paragraph}
                                        </p>
                                    );
                                })}
                            </div>

                            {/* Botones de navegacion*/}
                            <div className={styles.chapter_navigation_controls} style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
                                {currentChapterNum > 1 ? (
                                    <button
                                        className={styles.status_button}
                                        onClick={() => {
                                            window.scrollTo(0, 0); // Regresa arriba al cambiar
                                            navigate(`/Reading/${titulo}/${currentChapterNum - 1}`);
                                        }}
                                    >
                                        &larr; Anterior
                                    </button>
                                ) : <div />} {/* Div vacío para mantener el de "Siguiente" a la derecha */}

                                {currentChapterNum < totalChapters && (
                                    <button
                                        className={styles.status_button}
                                        onClick={() => {
                                            window.scrollTo(0, 0); // Regresa arriba al cambiar
                                            navigate(`/Reading/${titulo}/${currentChapterNum + 1}`);
                                        }}
                                    >
                                        Siguiente Capítulo &rarr;
                                    </button>
                                )}
                            </div>
                        </article>
                    ) : (
                        <p>Este capítulo no está disponible.</p>
                    )}
                </main>
            </div>
        </div>
    );
}