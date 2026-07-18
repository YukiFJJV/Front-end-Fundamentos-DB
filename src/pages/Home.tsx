import { useEffect, useState} from "react";
import type UserBooks from "../types/UserBooks";
import BookCards from "../components/BookSections/BookCards";
import type Book from '../types/Book';
import ProductDescription from "../components/BookSections/ProductDescription";
import TypeText from '../components/TypeText';
import styles from "./Home.module.css";
import SearchWrapper from '../components/Search/SearchWrapper';
import { Link } from 'react-router-dom';

// Datos de prueba (recordar borrarlos luego)
const mockBooks: Book[] = [
    {
        id_producto: 1,
        tipo_producto: "Libro Físico",
        autor: "Brandon Sanderson",
        genero: "Fantasía Épica",
        editorial: "Nova",
        titulo: "El Imperio Final",
        descripcion: "En un mundo donde la ceniza cae del cielo y un lord legislador domina con mano de hierro.",
        isbn: "978-8417347291",
        fecha_publicacion: "2006-07-17",
        direccion_portada: "https://placehold.co/150x220?text=Mistborn"
    },
    {
        id_producto: 2,
        tipo_producto: "Ebook",
        autor: "Frank Herbert",
        genero: "Ciencia Ficción",
        editorial: "DeBolsillo",
        titulo: "Dune",
        descripcion: "La especia debe fluir. Una aventura épica en el peligroso planeta desierto de Arrakis.",
        isbn: "978-8497596824",
        fecha_publicacion: "1965-08-01",
        direccion_portada: "https://placehold.co/150x220?text=Dune"
    },
    {
        id_producto: 3,
        tipo_producto: "AudioLibro",
        autor: "Gabriel García Márquez",
        genero: "Realismo Mágico",
        editorial: "Literatura Random House",
        titulo: "Cien años de soledad",
        descripcion: "Muchos años después, frente al pelotón de fusilamiento...",
        isbn: "978-8439728398",
        fecha_publicacion: "1967-05-30",
        direccion_portada: "https://placehold.co/150x220?text=Cien años soledad"
    }
];

export default function Home(){
    const [selectedBook, setSelectedBook] = useState<Book | null>(null);
    const [userLibrary, setUserLibrary] = useState<UserBooks[]>([]);

    // Hacer una petición API a la DB
    useEffect(()=>{
        const fetchBooks = async () =>{
            try{
                const response = await fetch('/api/users/books');
                const data = await response.json();
                setUserLibrary(data);
            }catch(error){
                console.error("Error al importar los libros", error);
            }
        };
        fetchBooks();
    },[]);

    const continueReadingList = userLibrary.filter((item)=>item.estado === "LEYENDO");
    const notReadList = userLibrary.filter(item => item.estado==="SIN LEER");

    const handleSelectBook = (book:Book) =>{
        setSelectedBook(book);
    };

    const typeWritter = (
        <div className={styles.search_header}>
            < TypeText/>
            <span className={styles.cursor_text}>_</span>
        </div>
    )

    return(
        <>
            <SearchWrapper
                booksPool={mockBooks}
                onSelect={handleSelectBook}
                topContent={typeWritter}
            >
                <div className={styles.fade_in}>
                    {continueReadingList.length > 0 && (
                        <section>
                            <div className={styles.section_header}>
                                <h2>Continuar leyendo...</h2>
                                <span className={styles.see_all}>Ver todos &rarr;</span>
                            </div>
                            <div className={styles.continue_reading}>
                                {mockBooks.map((userBook) => (
                                    <BookCards
                                        key={userBook.id_producto}
                                        book={userBook}
                                        onSelect={handleSelectBook}
                                    />
                                ))}
                            </div>
                        </section>
                    )}
                    <section>
                        <div className={styles.section_header}>
                            <h2>Explora más obras!</h2>
                            <span
                                className={styles.see_all}
                            >
                                <Link
                                    to='/Categories'
                                >
                                    Ver todos &rarr;
                                </Link>
                            </span>
                        </div>
                        <div className={styles.explore_more}>
                            {mockBooks.map((userBook) => (
                                <BookCards
                                    key={userBook.id_producto}
                                    book={userBook}
                                    onSelect={handleSelectBook}
                                />
                            ))}
                            </div>
                        </section>
                        <footer className={styles.home_footer}>
                            <section className={styles.mision}>
                                <h3>Mision</h3>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam pariatur tenetur voluptatum magnam totam dolore natus? Unde laudantium, dolorum magni saepe nesciunt, illo dignissimos illum quaerat asperiores, voluptatibus error quidem.
                                </p>
                            </section>
                            <section className={styles.vision}>
                                <h3>Vision</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur odio quod eaque at iusto molestiae non! Aperiam maxime earum aspernatur, repudiandae adipisci quidem iusto quis eveniet eaque, facilis, incidunt inventore.
                                </p>
                            </section>
                        </footer>
                    </div>
            </SearchWrapper>
            {/* Popup de descripción */}
            {selectedBook && (
                <ProductDescription
                    book={selectedBook}
                    onClose={() => setSelectedBook(null)}
                />
            )}
        </>
    );
}