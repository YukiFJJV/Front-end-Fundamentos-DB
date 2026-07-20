import { useEffect, useState } from "react";
import styles from './CategoriesPage.module.css'
import SearchWrapper from '../components/Search/SearchWrapper';
import CategorySection from '../components/BookSections/Category/CategorySection';
import ProductDescription from '../components/BookSections/ProductDescription';
import  { getBooks, getChapters, getUserBooks } from '../services/bookService';
import { useBookNavigation } from '../Hooks/useBookNavigation'
import { useBookModal } from '../Hooks/useBookModal';
import type UserBooks from "../types/UserBooks";
import type Book from '../types/Book';
import type Chapter from '../types/Chapter';
import LoadingPage from "./LoadingPage";

export default function Categories(){
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const { handleReadBook } = useBookNavigation();
    const [books, setBooks] = useState<Book[] | []>([]);
    const [chapters, setChapters] = useState<Chapter[] | []>([]);
    const [userLibrary, setUserLibrary] = useState<UserBooks[]| []>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        const loadData = async () =>{
            setIsLoading(true)
            try{
                const[booksData, chaptersData, userLibraryData] = await Promise.all([
                    getBooks(),
                    getChapters(),
                    getUserBooks()
                ])
                setBooks(booksData as Book[]);
                setChapters(chaptersData as Chapter[]);
                setUserLibrary(userLibraryData as UserBooks[]);
            }catch(error){
                console.log("Error al importar la información principal", error)
            }finally{
                setIsLoading(false);
            };
        };
        loadData();
    },[])
    const {
        selectedBook,
        isFavorite,
        handleSelectBook,
        handleToggleFavorite,
        closeBook,
        handleToggleSave,
        isSaved
    } = useBookModal(userLibrary);

    const currentUserBook = selectedBook
        ? userLibrary.find((ub) => ub.libro.id_producto === selectedBook.id_producto)
        : null;

    return(
        <div className={styles.fade_in}>
            <SearchWrapper
                onSelect={handleSelectBook}
                booksPool={books}
                selectedCategories={selectedCategories}
                setSelectedCategories={setSelectedCategories}
                hasFilter={true}
            >
                <CategorySection
                    poolBooks={books}
                    onSelect={handleSelectBook}
                    selectedCategories={selectedCategories}
                />
            </SearchWrapper>
            {selectedBook && (
                <ProductDescription
                    onToggleFavorite={handleToggleFavorite}
                    isSaved={isSaved}
                    onToggleSave={handleToggleSave}
                    isFavorite={isFavorite}
                    userBookInfo={currentUserBook ?? null}
                    book={selectedBook}
                    onClose={closeBook}
                    chaptersByBook={chapters.filter(cap => cap.id_libro === selectedBook.id_producto)}
                    onClickRead={()=> handleReadBook(selectedBook)}
                />
            )}

            <LoadingPage
                isLoading={isLoading}
            />
        </div>
    );
}