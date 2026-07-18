import { useEffect } from 'react';
import type Book from '../../types/Book';
import styles from './ProductDescription.module.css'
import type Chapter from '../../types/Chapter';

interface Props{
    book: Book;
    onClose: ()=>void;
    chapters: Chapter[]
};

export default function ProductDescription({book, onClose, chapters}: Props){
    useEffect(()=>{
        // Al montar el componente ocultamos el scroll
        document.body.style.overflow = 'hidden';

        // Cuando se cierra mostramos el scroll
        return()=>{
            document.body.style.overflow = 'auto';
        }
    },[])
    return(
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
                style={{backgroundImage: `linear-gradient(to top, rgba(24, 24, 24, 0.9) 40%, rgba(24, 24, 24, 0.5) 70%, rgba(24, 24, 24, 0.3) 100%), url('${book.direccion_portada}')`}}
            >
                <button
                    className={styles.close_button}
                    onClick={onClose}
                    aria-label='Cerrar'
                > {/* El padre controla cuando cerrar el popup */}
                    <span aria-hidden='true'>&times;</span>
                </button>
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
                </div>

                <div></div>
            </div>
        </div>
    );
}