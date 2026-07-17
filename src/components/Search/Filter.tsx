import { useMemo, useState } from 'react';
import type Book from '../../types/Book';
import styles from './Filter.module.css'

interface FilteredResultsProps{
    booksPool: Book[];
    selectedCategory: (string | null);
    setSelectedCategory: (selectedCategory: string | null) => void;
};

export default function FilteredResults({
    booksPool,
    selectedCategory,
    setSelectedCategory
}: FilteredResultsProps){
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const categories:string[] = useMemo(()=>{
        const allCategories = booksPool.map(book => book.genero)

        // Elimina todos los repetidos con Set y ... lo convierte en array de nuevo
        return [... new Set(allCategories)];
    }, [booksPool])

    const handleFilter = (selectedCategory: string | null)=>{
        setSelectedCategory(selectedCategory)
    }

    const handleOpen = () =>{
        setIsFilterOpen(prev => !prev)
    }

    return(
        <>
            <button
                id={styles.open_filter}
                onClick={()=>handleOpen()}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    width={20}
                    height={20}
                    shapeRendering="crispEdges"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1}
                >
                    <path
                        d="M0 4h2 M7 4h13 M3 2h3 M3 6h3 M2 3h1 M2 4h1 M2 5h1 M6 3h1 M6 4h1 M6 5h1 M0 10h11 M16 10h4 M12 8h3 M12 12h3 M11 9h1 M11 10h1 M11 11h1 M15 9h1 M15 10h1 M15 11h1 M0 16h2 M7 16h13 M3 14h3 M3 18h3 M2 15h1 M2 16h1 M2 17h1 M6 15h1 M6 16h1 M6 17h1"
                    />
                </svg>
            </button>

            {
                isFilterOpen && (
                    <>
                        <button
                            id={styles.clear_filter}
                            className={selectedCategory === null ?
                                styles.active_btn : ""}
                            onClick={()=>handleFilter(null)}
                        >
                            &times;
                        </button>

                        {
                            categories.map((category)=>(
                                <button
                                    key={category}
                                    className={selectedCategory === category
                                        ? styles.active_btn : ""}
                                    onClick={()=> handleFilter(category)}
                                >
                                    {category}
                                </button>
                            ))
                        }
                    </>
                )
            }
        </>
    );
}