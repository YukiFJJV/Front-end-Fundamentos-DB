import { useMemo, useRef } from 'react';
import type Book from '../../types/Book';
import style from './CategorySection.module.css'
import BookCards from './BookCards';

interface CategorySectionProps{
    poolBooks: Book[]
    onSelect: (book: Book) =>void
    selectedCategories: (string[]);
}

// Subcomponente para manejar el scroll en cada categoria
const CategoryRow = ({
    category,
    books,
    onSelect
}:{
    category: string,
    books: Book[],
    onSelect: (book: Book) => void
}) =>{
    const scrollRef = useRef<HTMLUListElement>(null);

    const scroll = (direction: 'left' | 'right') =>{
        if(scrollRef.current){
            const scrollAmount = 700; // Pixeles
            scrollRef.current.scrollBy({
                left: direction === 'left'? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            })
        }
    }

    return(
        <div className={style.category_section}>
            <h2>{category}</h2>
            <div className={style.carousel_container}>
                {/* Botón izq */}
                <button
                    className={style.scroll_button}
                    onClick={()=> scroll('left')}
                    aria-label="Scroll left"
                >
                    &#10094;
                </button>

                <ul
                    ref={scrollRef}
                    className={style.book_list}
                >
                    {
                        books.map((book:Book)=>(
                            <li
                                key={book.id_producto}
                                className={style.book_item}
                            >
                                <BookCards
                                    book={book}
                                    onSelect={onSelect}
                                />
                            </li>
                        ))
                    }
                </ul>

                {/* Botón der */}
                <button
                    className={style.scroll_button}
                    onClick={()=> scroll('right')}
                    aria-label="Scroll right"
                >
                    &#10095;
                </button>
            </div>
        </div>
    );
}

export default function CategorySection({
    poolBooks,
    onSelect,
    selectedCategories
}:CategorySectionProps){
    const filteredByCategory = useMemo(()=>{
        if(!poolBooks)
            return{};

        // Acumulamos los libros por categoria
        return poolBooks.reduce((accumulator: Record<string, Book[]>, book:Book)=>{
            const category:string = book.genero;

            // Si la categoria no existe la creamos
            if(!accumulator[category])
                accumulator[category] =[];

            // Pusheamos el libro dentro de su respectiva categoria
            accumulator[category].push(book);

            return accumulator;
        }, {} as Record<string, Book[]>) //Objeto-> Categoria: Libros
    },[poolBooks]);

    return(
        <div className={style.catalog_container}>
            {
                Object.entries(filteredByCategory).map(
                    // Ordena el array en ese orden-> 0 category, 1 Book[]
                    ([category, poolBooks])=>(
                        (selectedCategories.length===0 || selectedCategories.includes(category)) && (
                            <CategoryRow
                                key={category}
                                category={category}
                                books={poolBooks}
                                onSelect={onSelect}
                            />
                        )
                    )
                )
            }
        </div>
    );
}