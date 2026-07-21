import type Book from '../../../types/Book';
import type UserBooks from '../../../types/UserBooks';
import BookCards from '../BookCards';
import styles from './UserSection.module.css'
import { Link } from 'react-router-dom';
import { useRef, useEffect } from 'react';

interface UserCategoryProps {
    listToShow: UserBooks[];
    handleSelectBook: (book: Book) => void;
    isAtHome?: boolean;
    linkTo?: string;
}

// Subcomponente para manejar el scroll en cada seccion del user
const CategoryRow = ({
    title,
    books,
    onSelect,
    isAtHome = false,
    linkTo
}: {
    title: string;
    books: Book[];
    onSelect: (book: Book) => void;
    isAtHome?: boolean;
    linkTo?: string;
}) => {
    const scrollRef = useRef<HTMLUListElement>(null);

    // Solo aplicamos scroll infinito si hay más de 5 libros Y NO estamos en el Home
    const isInfinite = books.length > 5;
    const shouldBeInfinite = isInfinite && !isAtHome;

    // Si es infinito, repetimos la lista 3 veces
    const displayBooks = shouldBeInfinite ? [...books, ...books, ...books] : books;

    useEffect(() => {
        const container = scrollRef.current;
        if (!container || !shouldBeInfinite) return;

        // Calculamos un solo bloque (el original)
        const singleBlockWidth = container.scrollWidth / 3;

        // Empezamos en el bloque del medio
        container.scrollLeft = singleBlockWidth;

        const handleScroll = () => {
            if (container.style.scrollBehavior === 'smooth') return;

            // Si llegamos al bloque 3, volvemos al 2
            if (container.scrollLeft >= singleBlockWidth * 2) {
                container.scrollLeft -= singleBlockWidth;
            }
            // Si llegamos al 1, volvemos al 2
            else if (container.scrollLeft <= 0) {
                container.scrollLeft += singleBlockWidth;
            }
        };

        container.addEventListener('scroll', handleScroll);

        return () => {
            container.removeEventListener('scroll', handleScroll);
        }
    }, [shouldBeInfinite, books]);

    const scroll = (direction: 'left' | 'right') => {
        const container = scrollRef.current;
        if (!container) return;

        // Animación solo para los botones
        container.style.scrollBehavior = 'smooth';
        const scrollAmount = 700; // pixeles

        container.scrollLeft += direction === 'left' ? -scrollAmount : scrollAmount;

        if (shouldBeInfinite) {
            setTimeout(() => {
                container.style.scrollBehavior = 'auto'; // Quitamos el smooth
                const singleBlockWidth = container.scrollWidth / 3;

                if (container.scrollLeft >= singleBlockWidth * 2) {
                    container.scrollLeft -= singleBlockWidth;
                } else if (container.scrollLeft <= 0) {
                    container.scrollLeft += singleBlockWidth;
                }
            }, 300); //ms
        }
    }

    return (
        <section className={styles.category_section}>
            <div className={styles.see_all}>
                <h2>{title}</h2>

                {isAtHome && linkTo && (
                    <Link to={linkTo} className={styles.link_style}>
                        Ver más &rarr;
                    </Link>
                )}
            </div>

            <div className={styles.carousel_container}>
                <button
                    className={styles.scroll_button}
                    onClick={() => scroll('left')}
                    aria-label="Scroll left"
                    style={{ visibility: books.length > 4 ? 'visible' : 'hidden' }}
                >
                    &#10094;
                </button>

                <ul
                    ref={scrollRef}
                    className={styles.book_list}
                >
                    {displayBooks.map((book: Book, index) => (
                        <li
                            key={`${book.id_producto}-${index}`}
                            className={styles.book_item}
                        >
                            <BookCards
                                book={book}
                                onSelect={onSelect}
                            />
                        </li>
                    ))}
                </ul>

                <button
                    className={styles.scroll_button}
                    onClick={() => scroll('right')}
                    aria-label="Scroll right"
                    style={{ visibility: books.length > 4 ? 'visible' : 'hidden' }}
                >
                    &#10095;
                </button>
            </div>
        </section>
    );
}

export default function UserSection({
    listToShow,
    handleSelectBook,
    isAtHome = false,
    linkTo = ''
}: UserCategoryProps) {

    // Extraemos las categorías lógicas
    const categorias = [
        {
            titulo: "Continuar Leyendo",
            libros: listToShow
                .filter((item) => item.estado === "LEYENDO")
                .map((item) => item.libro)
        },
        {
            titulo: "Tu colección",
            libros: listToShow
                .filter((item) => item.es_comprado)
                .map((item) => item.libro)
        },
        {
            titulo: "Tus favoritos",
            libros: listToShow
                .filter((item) => item.es_favorito)
                .map((item) => item.libro)
        },
        {
            titulo: "Leer más tarde...",
            libros: listToShow
                .filter((item) => item.estado === "PENDIENTE")
                .map((item) => item.libro)
        }
    ];

    return (
        <>
            {categorias.map((categoria, index) => {
                if (categoria.libros.length === 0) return null;

                return (
                    <CategoryRow
                        key={index}
                        title={categoria.titulo}
                        books={categoria.libros}
                        onSelect={handleSelectBook}
                        isAtHome={isAtHome}
                        linkTo={linkTo}
                    />
                );
            })}
        </>
    );
}