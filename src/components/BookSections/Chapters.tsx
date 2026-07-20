import type Chapter from '../../types/Chapter';
import styles from './Chapters.module.css'

interface ChapterProps{
    chaptersByBook: Chapter[]
}

export default function Chapters({chaptersByBook}:ChapterProps){
    return(
        <div className={styles.chapters_container}>
            <ul>
                {
                    chaptersByBook.map(chapter=>(
                        <li
                            key={chapter.id_capitulo}
                            className={styles.chapter_li}
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