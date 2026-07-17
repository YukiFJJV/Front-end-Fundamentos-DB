import type React from "react";
import type Book from "../../types/Book";
import { useState, useEffect } from "react";
import SearchBar from './SearchBar';
import styles from './SearchWrapper.module.css'
import BookCards from '../BookSections/BookCards';
import Filter from './Filter';

interface SearchWrapperProps{
    children: React.ReactNode,
    booksPool: Book[],
    onSelect: (book: Book) => void,
    topContent?: React.ReactNode
}

export default function SearchWrapper({
    children,
    booksPool,
    onSelect,
    topContent
}:SearchWrapperProps){
    const [search, setSearch] = useState("");
    const [showResults, setShowResults] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    // Coordinador de animación asíncrono
    useEffect(() => {
        if (search.trim().length > 0) {
            const timer = setTimeout(() => {
                setShowResults(true);
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [search]);

    // Función utilitaria para la búsqueda
    const handleSearch = (value: string) =>{
        setSearch(value);
        if(value.trim.length===0){
            setShowResults(false);
        }
    };

    // Filtrar los libros por su nombre, autor o isbn
    const filteredResults = booksPool.filter((book) => {
        const cleanSearch = search.toLowerCase();

        const coincidences = (
            book.titulo.toLowerCase().includes(cleanSearch) ||
            book.autor.toLowerCase().includes(cleanSearch) ||
            book.isbn.toLowerCase().includes(cleanSearch)
        );

        const coincidencesCategory = selectedCategory?
            book.genero === selectedCategory
            : true

        return coincidences && coincidencesCategory
    }, [booksPool, search, selectedCategory]);

    return(
        <>
            {!showResults && topContent}

            <div className={styles.search}>
                <SearchBar
                    search={search}
                    onSearchChange={handleSearch}
                    showResults={showResults}
                    onShowResultsChange={setShowResults}
                    results={filteredResults}
                    onSelect={onSelect}
                />

                <Filter
                    booksPool={booksPool}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />
            </div>

            {/* El contenido principal cambia según showResults */}
            {showResults ? (
                <div className={`${styles.results_dashboard} ${styles.fade_in}`}>
                    <div className={styles.results_grid_area}>
                        <h2>Resultados para "{search}"</h2>
                        <div className={styles.results}>
                            {filteredResults.length > 0 ? (
                                filteredResults.map((book) => (
                                    <BookCards
                                        key={book.id_producto}
                                        book={book}
                                        onSelect={onSelect} />
                                ))
                            ) : (
                                <p className={styles.no_results_text}>No se encontraron libros para esta búsqueda.</p>
                            )}
                        </div>
                    </div>
                </div>
            ) :(children)
            }
        </>
    );
}