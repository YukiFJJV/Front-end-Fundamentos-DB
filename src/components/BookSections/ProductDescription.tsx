import { useEffect } from 'react';
import type Book from '../../types/Book';
import styles from './ProductDescription.module.css'

interface Props{
    book: Book;
    onClose: ()=>void;
};

export default function ProductDescription({book, onClose}: Props){
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
            >
            </div>
            <div
                className={styles.modal_content}
                onClick={(e)=>e.stopPropagation()}
                style={{backgroundImage: `linear-gradient(to top, rgba(24, 24, 24, 0.9) 40%, rgba(24, 24, 24, 0.5) 70%, rgba(24, 24, 24, 0.3) 100%), url('${book.direccion_portada}')`}}
            >
                <button
                    className={styles.close_button}
                    onClick={()=>onClose()}
                > {/* El padre controla cuando cerrar el popup */}
                    &times;
                </button>
                <div className={styles.modal_info}>
                    <h3>{book.titulo}</h3>
                    <div className={styles.modal_meta}>
                        <span>Autor: {book.autor}</span>
                        <span>&middot;</span>
                        <span>Publicado en: {book.fecha_publicacion}</span>
                    </div>
                    <span className={styles.modal_tag}>{book.genero}</span>
                    <p className={styles.modal_description}>{book.descripcion}</p>
                </div>
            </div>
        </div>
    );
}