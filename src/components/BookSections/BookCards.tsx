import type Book from "../../types/Book";
import styles from "./BookCards.module.css";

interface Props{
    book: Book;
    onSelect: (book: Book) => void
}

export default function BookCards({book, onSelect}: Props){
    return(
        <div className="container">
            <article
                className={styles.book_cards}
                onClick={()=>{onSelect(book)}}
            >{/* Le decimos al padre que se seleccionó este libro en especifico*/}
                <img
                    src={book.direccion_portada}
                    alt={book.titulo}
                />
                <h3>{book.titulo}</h3>
                <footer>{book.autor} &middot; {book.genero}</footer>
            </article>
        </div>
    );
}