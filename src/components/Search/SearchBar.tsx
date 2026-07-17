import type Book from "../../types/Book";
import styles from "./SearchBar.module.css";
import { useOutletContext } from "react-router-dom";

interface SearchBarProps {
    search: string;
    onSearchChange: (value: string) => void;
    showResults: boolean;
    onShowResultsChange: (value: boolean) => void;
    results: Book[];
    onSelect: (book: Book) => void;
}

interface LayoutContext{
    setIsSearchActive: (isActive: boolean) => void
}

export default function SearchBar({
    search,
    onSearchChange,
    showResults,
    onShowResultsChange,
    results,
    onSelect,
}: SearchBarProps){
    const {setIsSearchActive} = useOutletContext<LayoutContext>();

    // Función para resaltar texto dinámicamente extraída
    const highlightMatch = (text: string, query: string) => {
        if (!query) return text;
        const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
        const regex = new RegExp(`(${escapedQuery})`, 'gi');
        const parts = text.split(regex);

        return parts.map((part, index) =>
            part.toLowerCase() === query.toLowerCase() ? (
                <strong key={index} style={{ color: '#9628aa' }}>{part}</strong>
            ) : (
                part
            )
        );
    };

    // Función auxiliar para limpiar la búsqueda
    const handleClear = () => {
        onSearchChange("");
        onShowResultsChange(false);
        setIsSearchActive(false);
    };

    return (
        <div className={`${styles.search_container} ${search.trim().length > 0 ? styles.search_active : ""}`}>
            <div className={styles.search_input_wrapper}>
                <svg
                    className={styles.search_icon}
                    width="22px"
                    height="22px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M16 16L22 22"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                    />

                    <path
                        d="M9 7H17 M7 10.5H18 M9 14H17"
                        stroke="currentColor"
                        stroke-width="1"
                        stroke-linecap="round"
                    />

                    <circle
                        cx="10.5"
                        cy="10.5"
                        r="7.5"
                        stroke="currentColor"
                        stroke-width="2.5"
                    />
                </svg>

                <input
                    type="text"
                    value={search}
                    onChange={(e) => {
                        const valor = e.target.value;
                        onSearchChange(valor);
                        if (valor.trim().length === 0) {
                            onShowResultsChange(false);
                            setIsSearchActive(false); //Pasa el context al layout
                        }
                    }}
                    placeholder="Buscar por título, autor o ISBN..."
                    className={styles.search_input}
                />

                {search.trim().length > 0 && (
                    <button className={styles.clear_button} onClick={handleClear}>
                        &times;
                    </button>
                )}

                {/* El dropdown solo aparece cuando showResults es true */}
                {showResults && (
                    <ul className={`${styles.search_dropdown} ${styles.fade_in}`}>
                        {results.length > 0 ? (
                            results.map((book) => (
                                <li
                                    key={book.id_producto}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        onSelect(book);
                                        handleClear(); // Limpia y cierra el buscador
                                    }}
                                >
                                    <span>
                                        {highlightMatch(book.titulo, search)} - {highlightMatch(book.autor, search)}
                                    </span>
                                </li>
                            ))
                        ) : (
                            <li className={styles.no_results}>Sin coincidencias</li>
                        )}
                    </ul>
                )}
            </div>
        </div>
    );
}