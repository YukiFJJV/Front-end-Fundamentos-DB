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
                        <li key={chapter.id_capitulo}>
                            <h3>
                                Capitulo {chapter.numero_capitulo}:
                                {chapter.titulo_capitulo}
                            </h3>
                            <p>{chapter.sinapsis}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};