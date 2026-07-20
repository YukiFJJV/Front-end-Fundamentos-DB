import { useEffect } from 'react';
import type Book from '../../types/Book';
import styles from './ProductDescription.module.css'
import type Chapter from '../../types/Chapter';
import type UserBooks from '../../types/UserBooks';
import Chapters from './Chapters';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ProgressLine from './ProgressLine';

interface ProductDescriptionProps{
    book: Book;
    onClose: ()=>void;
    chaptersByBook: Chapter[]
    userBookInfo: UserBooks | null;
    onClickRead: () => void;
    onToggleFavorite: () => void;
    isFavorite: boolean;
    onToggleSave: () => void;
    isSaved: boolean;
};

export default function ProductDescription({
    book,
    onClose,
    chaptersByBook,
    userBookInfo,
    onClickRead,
    onToggleFavorite,
    isFavorite,
    onToggleSave,
    isSaved
}: ProductDescriptionProps){

    useEffect(()=>{
        // Al montar el componente ocultamos el scroll
        document.body.style.overflow = 'hidden';

        // Cuando se cierra mostramos
        return()=>{
            document.body.style.overflow = 'auto';
        }
    },[])
    // Usamos como referencia el body para que no se renderice a mitad de pantalla
    return createPortal(
        <div className={styles.modal_container}>
            <div
                className={styles.modal_backdrop}
                onClick={onClose}
                aria-hidden='true'
            >
            </div>
            <div
                className={styles.modal_content}
                onClick={(e)=>e.stopPropagation()}
                role='dialog'
                aria-modal='true'
                aria-labelledby='modal-title' // Conecta el modal con el título
            >
                <div
                    className={styles.top_banner}
                    role='img'
                    style={{backgroundImage:
                        `linear-gradient(
                            to bottom,
                            rgba(24, 24, 24, 0) 0%,
                            rgba(24, 24, 24, 0.3) 60%,
                            rgba(24, 24, 24, 0.5) 80%,
                            rgba(24, 24, 24, 1) 100%),
                            url('${book.direccion_portada}'
                        )`
                    }}
                />
                <button
                    className={styles.close_button}
                    onClick={onClose}
                    aria-label='Cerrar'
                >
                    <span aria-hidden='true'>&times;</span>
                </button>

                {
                    userBookInfo?.es_comprado?
                    (
                        <div
                        className={styles.button_group}
                        role='group'
                        aria-label='Acciones del libro'
                    >
                        <div
                            className={styles.top_group}
                            role='group'
                        >
                            {/* Marcar/desmarcar como fav */}
                            <motion.button
                                onClick={onToggleFavorite}
                                whileTap={{ scale: 0.9}} // Se encoje
                                aria-label={isFavorite?
                                    'Favorito': 'No favorito'
                                }
                            >
                                <motion.svg
                                    preserveAspectRatio="none"
                                    viewBox="0 0 64 64"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{
                                        originY: 0,
                                        filter: 'drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.8))'
                                    }}
                                    animate={{
                                        // Si no es fav, se queda corto (0.6). Si es fav, hace la secuencia de estirarse hacia abajo y regresar a 1
                                        scaleY: isFavorite ? [0.9, 1.15, 0.95, 1] : 0.7,
                                        // Para darle más realismo (efecto gelatina), se hace más delgado cuando se estira
                                        scaleX: isFavorite ? [1, 0.9, 1.05, 1] : 1,
                                        // Le agregamos un pequeño desplazamiento físico en Y para que se note más el tirón
                                        y: isFavorite ? [0, 4, -1, 0] : 0,
                                        // Cambio de color
                                        fill: isFavorite ? "#fffa5c" : "transparent",
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        ease: "easeInOut"
                                    }}
                                >
                                    <path
                                        d="M 20 0 H 44 C 48.4 0 52 3.6 52 8 V 60 L 32 46 L 12 60 V 8 C 12 3.6 15.6 0 20 0 Z"
                                        stroke="#fffa5c"
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </motion.svg>
                            </motion.button>
                        </div>
                        <div
                            role='group'
                            className={styles.bottom_group}
                        >
                            <div
                                className={styles.progress_container}
                                role='progressbar'
                            >
                                <ProgressLine
                                    percentage={userBookInfo?.progreso}
                                />
                            </div>
                            {/* Botón para leer */}
                            <div
                                role='group'
                                className={styles.bottom_button_group}
                            >
                                <button
                                    onClick={onClickRead}
                                    className={styles.read_button}
                                    aria-label={(userBookInfo?.estado === 'LEYENDO')?
                                            'Continuar leyendo' :  'Leer ahora'}
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={14}
                                        height={14}
                                    >
                                        <path
                                            d="M16.6582 9.28638C18.098 10.1862 18.8178 10.6361 19.0647 11.2122C19.2803 11.7152 19.2803 12.2847 19.0647 12.7878C18.8178 13.3638 18.098 13.8137 16.6582 14.7136L9.896 18.94C8.29805 19.9387 7.49907 20.4381 6.83973 20.385C6.26501 20.3388 5.73818 20.0469 5.3944 19.584C5 19.053 5 18.1108 5 16.2264V7.77357C5 5.88919 5 4.94701 5.3944 4.41598C5.73818 3.9531 6.26501 3.66111 6.83973 3.6149C7.49907 3.5619 8.29805 4.06126 9.896 5.05998L16.6582 9.28638Z"
                                            stroke="#000000"
                                            strokeWidth="2"
                                            strokeLinejoin="round"
                                        >
                                        </path>
                                    </svg>
                                    {
                                        (userBookInfo?.estado === 'LEYENDO')?
                                            'Continuar leyendo' :  'Leer ahora'
                                    }
                                </button>
                                <motion.button
                                    onClick={onToggleSave}
                                    className={`${styles.readLater} ${isSaved ? styles.activeButton : ''}`}
                                    whileTap={{ scale: 0.9 }} // Efecto al presionar el botón completo
                                >
                                    {/* mode="wait" asegura que un SVG termine de desaparecer antes de que el otro aparezca */}
                                    <AnimatePresence mode="wait" initial={false}>
                                        {isSaved ? (
                                            <motion.svg
                                                key="saved"
                                                initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                                exit={{ opacity: 0, scale: 0.5, rotate: 45 }}
                                                transition={{ duration: 0.2 }}
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                width="24"
                                                height="24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M12 8v4l2 2" />
                                                <path d="M12 5 A 7 7 0 1 0 19 12 M17 14 L19 12 L21 14" />
                                            </motion.svg>
                                        ) : (
                                            <motion.svg
                                                key="unsaved"
                                                initial={{ opacity: 0, scale: 0.5, rotate: 45 }}
                                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                                exit={{ opacity: 0, scale: 0.5, rotate: -45 }}
                                                transition={{ duration: 0.2 }}
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M10 19.7A8 8 0 1 1 18.5 14" />
                                                <path d="M12 6v6l3.5 3.5" />
                                                <path d="M14 19l2.5 2.5 5 -7.5" />
                                            </motion.svg>
                                        )}
                                    </AnimatePresence>
                                </motion.button>
                            </div>
                        </div>
                    </div>
                    ):(
                        <div
                            className={styles.button_group}
                            role='group'
                            aria-label='Opciones de compra'
                        >
                            <div className={styles.bottom_group}>
                                <button
                                    aria-label='Comprar Libro'
                                >
                                    Comprar Libro
                                </button>
                            </div>
                        </div>
                    )
                }

                <div className={styles.modal_info}>
                    <h2 id='modal-title'>{book.titulo}</h2>
                    <div className={styles.modal_meta}>
                        <span>Autor: {book.autor}</span>
                        <br />
                        <span>
                            Publicado en: {' '}
                            <time
                                dateTime={book.fecha_publicacion.replace(' ', 'T')}
                            >
                                {book.fecha_publicacion}
                            </time>
                        </span>
                    </div>
                    <span className={styles.modal_tag}>{book.genero}</span>
                    <p className={styles.modal_description}>{book.descripcion}</p>
                    <Chapters
                        chaptersByBook={chaptersByBook}
                    />
                </div>
            </div>
        </div>,
        document.body
    );
}