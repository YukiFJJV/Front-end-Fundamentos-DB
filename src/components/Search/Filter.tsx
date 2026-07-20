import { useEffect, useMemo, useRef, useState } from 'react';
import type Book from '../../types/Book';
import styles from './Filter.module.css'
import { motion, AnimatePresence } from 'framer-motion';

interface FilteredResultsProps{
    booksPool: Book[];
    selectedCategories: (string[]);
    setSelectedCategories: (selectedCategories: string[]) => void;
};

export default function FilteredResults({
    booksPool,
    selectedCategories,
    setSelectedCategories,
}: FilteredResultsProps){
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const filterRef = useRef<HTMLDivElement>(null);

    useEffect(()=>{
        const handleClickOutside = (event: MouseEvent) =>{
            if(filterRef.current && !filterRef.current.contains(event.target as Node)){
                setIsFilterOpen(false)
            }
        }

        if(isFilterOpen){
            document.addEventListener('mousedown', handleClickOutside)
        }

        // Limpiamos cuando se desmonta
        return ()=>{
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [isFilterOpen]);

    const categories:string[] = useMemo(()=>{
        const allCategories = booksPool.map(book => book.genero)

        // Elimina todos los repetidos con Set y ... lo convierte en array de nuevo
        return [... new Set(allCategories)].sort();
    }, [booksPool])

    const handleToggleCategory = (selectedCategory: string)=>{
        if(selectedCategories.includes(selectedCategory)){
            setSelectedCategories(selectedCategories.filter(c=>
                c!== selectedCategory
            ));
        } else{
            setSelectedCategories([...selectedCategories, selectedCategory]);
        }
    }

    const handleOpen = () =>{
        setIsFilterOpen(prev => !prev)
    }

    const handleClear = () =>{
        setSelectedCategories([]);
    }

    return(
        <div ref={filterRef} className={styles.filter_wrapper}>
            <button
                id={styles.open_filter}
                onClick={()=>handleOpen()}
                className={isFilterOpen ? styles.filter_is_open : ""}
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

            <AnimatePresence>
                {
                    isFilterOpen && (
                        <motion.div
                            className={styles.dropdown_menu}
                            role='group'

                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{
                                duration: 0.25,
                                ease: [0.22, 1, 0.36, 1] // Curva para que se sienta "elástica"
                            }}
                        >
                            <button
                                id={styles.clear_filter}
                                className={selectedCategories.length===0  ?
                                    "" : styles.active_btn}
                                onClick={handleClear}
                            >
                                limpiar
                            </button>

                            <div className={styles.categories_container}>
                                {
                                    categories.map((category)=>(
                                        <button
                                            key={category}
                                            className={selectedCategories.includes(category)
                                                ? styles.active_btn : ""}
                                            onClick={()=> handleToggleCategory(category)}
                                        >
                                            {category}
                                        </button>
                                    ))
                                }
                            </div>
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </div>
    );
}