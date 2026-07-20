import type Chapter from '../../types/Chapter';
import styles from './Chapters.module.css'
import { useBookNavigation } from '../../Hooks/useBookNavigation';
import type Book from '../../types/Book';

interface ChapterProps{
    chaptersByBook: Chapter[]
    selectedBook: Book;
    actualChapter: number | null
}

export default function Chapters({
    chaptersByBook,
    selectedBook,
    actualChapter
}:ChapterProps){
    const { handleReadBook } = useBookNavigation();
    return(
        <div className={styles.chapters_container}>
            <ul>
                {
                    chaptersByBook.map(chapter=>(
                        <li
                            key={chapter.id_capitulo}
                            className={`${styles.chapter_li} ${chapter.numero_capitulo === actualChapter ? styles.active_chapter : ''}`}
                            onClick={()=>handleReadBook(selectedBook, chapter.numero_capitulo)}
                        >
                            <article>
                                <header
                                    className={styles.chapter_header}
                                >
                                    <h3>
                                        Capitulo {chapter.numero_capitulo}:
                                        &nbsp;{chapter.titulo_capitulo}
                                    </h3>
                                    <span>
                                        {chapter.cantidad_paginas} pags. estimadas
                                    </span>
                                </header>
                                <p>{chapter.sinapsis}</p>
                            </article>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};