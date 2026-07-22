import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import type Book from '../../../types/Book';
import type Chapter from '../../../types/Chapter';
import type UserBooks from '../../../types/UserBooks';
import styles from './ProductDescription.module.css';
import Chapters from '../Chapters';
import ProgressLine from '../ProgressLine';
import { FavoriteButton, SaveButton, ReadButton } from './ProductButtons'; // O donde decidas extraerlos

interface ProductDescriptionProps {
    book: Book;
    onClose: () => void;
    chaptersByBook: Chapter[];
    userBookInfo: UserBooks | null;
    onClickRead: () => void;
    onToggleFavorite: () => void;
    isFavorite: boolean;
    onToggleSave: () => void;
    isSaved: boolean;
}

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
}: ProductDescriptionProps) {

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = 'auto'; }
    }, []);

    const isReading = userBookInfo?.estado === 'LEYENDO';

    return createPortal(
        <div className={styles.modal_container}>
            <div
                className={styles.modal_backdrop}
                onClick={onClose}
                aria-hidden='true' />

            <div
                className={styles.modal_content}
                onClick={(e) => e.stopPropagation()}
                role='dialog'
                aria-modal='true'
                aria-labelledby='modal-title'>

                {/* Banner y Botón Cerrar */}
                <div
                    className={styles.top_banner}
                    role='img'
                    style={{ backgroundImage: `linear-gradient(to bottom, var(--banner-gradient-start) 0%, var(--banner-gradient-mid) 60%, var(--banner-gradient-mid2) 80%, var(--banner-gradient-end) 100%), url('${book.direccion_portada}')` }}
                />

                <button
                    className={styles.close_button}
                    onClick={onClose}
                    aria-label='Cerrar'
                >
                    <span aria-hidden='true'>&times;</span>
                </button>

                {/* Zona de Controles */}
                {userBookInfo?.es_comprado ? (
                    <div
                        className={styles.button_group}
                        role='group'
                        aria-label='Acciones del libro'
                    >
                        <div
                            className={styles.top_group}
                            role='group'
                        >
                            <FavoriteButton
                                isFavorite={isFavorite}
                                onToggle={onToggleFavorite}
                            />
                        </div>
                        <div
                            role='group'
                            className={styles.bottom_group}
                        >
                            <div
                                className={styles.progress_container} role='progressbar'
                            >
                                <ProgressLine
                                    percentage={userBookInfo?.progreso}
                                />
                            </div>
                            <div
                                role='group'
                                className={styles.bottom_button_group}
                            >
                                <ReadButton
                                    isReading={isReading}
                                    onClick={onClickRead}
                                    className={styles.read_button} />
                                <SaveButton isSaved={isSaved} onToggle={onToggleSave} className={styles.read_Later} />
                            </div>
                        </div>
                    </div>
                ) : (
                    <div
                        className={styles.button_group}
                        aria-label='Comprar'
                    >
                        <div
                            className={styles.bottom_group}
                        >
                            <button
                                aria-label='Comprar Libro'
                            >
                                Comprar Libro
                            </button>
                        </div>
                    </div>
                )}

                {/* Información del Libro */}
                <div className={styles.modal_info}>
                    <h2 id='modal-title'>{book.titulo}</h2>

                    <div className={styles.modal_meta}>
                        <span>Autor: {book.autor}</span><br />
                        <span>
                            Publicado en: <time dateTime={book.fecha_publicacion.replace(' ', 'T')}>{book.fecha_publicacion}</time>
                        </span>
                    </div>
                    <span
                        className={styles.modal_tag}
                    >
                        {book.genero}
                    </span>
                    <p
                        className={styles.modal_description}
                    >
                        {book.descripcion}
                    </p>
                    <Chapters
                        chaptersByBook={chaptersByBook}
                        actualChapter={userBookInfo?.capitulo_actual ?? null}
                        selectedBook={book}
                    />
                </div>
            </div>
        </div>,
        document.body
    );
}