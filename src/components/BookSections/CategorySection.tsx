import { useMemo } from 'react';
import type Book from '../../types/Book';
import style from './CategorySection.module.css'
import BookCards from './BookCards';

interface CategorySectionProps{
    poolBooks: Book[]
    onSelect: (book: Book) =>void
    selectedCategories: (string[]);
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
                            <div key={category} className={style.category_section}>
                                <h2>{category}</h2>
                                <ul>
                                    {
                                        poolBooks.map((book: Book)=>(
                                            <li key={book.id_producto}>
                                                <BookCards
                                                    book={book}
                                                    onSelect={onSelect}
                                                />
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        )
                    )
                )
            }
        </div>
    );
}