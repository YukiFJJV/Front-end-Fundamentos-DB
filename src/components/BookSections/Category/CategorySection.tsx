import { useEffect, useMemo, useRef } from 'react';
import type Book from '../../../types/Book';
import style from './CategorySection.module.css'
import BookCards from '../BookCards';

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

    const isInfinite = books.length > 5;

    // Si hay más de 4 libros, entonces repertimos la lista para el scroll "infinito"
    const displayBooks = isInfinite? [...books, ...books, ...books] : books;

    useEffect(()=>{
        const container = scrollRef.current;
        if(!container || !isInfinite)
            return;

        // Calculamos un solo bloque (el original)
        const singleBlockWidth = container.scrollWidth / 3;

        // Empezamos en el bloque del medio
        container.scrollLeft = singleBlockWidth;

        const handleScroll = () =>{
            if(container.style.scrollBehavior === 'smooth')
                return;

            // Si llegamos al bloque 3, volvemos al 2
            if(container.scrollLeft >= singleBlockWidth *2){
                container.scrollLeft -= singleBlockWidth;
            }

            // Si llegamos al 1, volvemos al 2
            else if(container.scrollLeft<=0){
                container.scrollLeft += singleBlockWidth;
            };
        };

        container.addEventListener('scroll', handleScroll);

        return()=>{
            container.removeEventListener('scroll', handleScroll);
        }
    },[isInfinite, books])

    const scroll = (direction: 'left' | 'right') =>{
        const container = scrollRef.current;

        if(!container)
            return;

        // Animación solo para los botones
        container.style.scrollBehavior = 'smooth';
        const scrollAmount = 700; // pixeles

        container.scrollLeft += direction === 'left'?
            -scrollAmount : scrollAmount

        if(isInfinite){
            setTimeout(()=>{
                container.style.scrollBehavior = 'auto' // Quitamos el smooth
                const singleBlockWidth = container.scrollWidth / 3;

                if(container.scrollLeft >= singleBlockWidth * 2){
                    container.scrollLeft -=singleBlockWidth;
                }else if (container.scrollLeft <= 0){
                    container.scrollLeft += singleBlockWidth;
                }
            }, 300) //ms
        }
    }

    return(
        <section className={style.category_section}>
            <h2>{category}</h2>
            <div className={style.carousel_container}>
                {/* Botón izq */}
                <button
                    className={style.scroll_button}
                    onClick={()=> scroll('left')}
                    aria-label="Scroll left"
                    style={{ visibility: books.length > 4 ? 'visible' : 'hidden' }}
                >
                    &#10094;
                </button>

                <ul
                    ref={scrollRef}
                    className={style.book_list}
                >
                    {
                        displayBooks.map((book:Book, index)=>(
                            <li
                                // Evitamos renderizados bug por el triplicado de objetos
                                key={`${book.id_producto}-${index}`}
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
                    style={{ visibility: books.length > 4 ? 'visible' : 'hidden' }}
                >
                    &#10095;
                </button>
            </div>
        </section>
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