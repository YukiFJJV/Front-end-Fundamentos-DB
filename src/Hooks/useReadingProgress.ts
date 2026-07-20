import { useEffect, useRef } from 'react';
import { updateReadingProgress } from '../services/bookService';
import type Book from '../types/Book';
import type Chapter from '../types/Chapter';

export const useReadingProgress = (book: Book | null, chapters: Chapter[]) => {
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        if (chapters.length === 0 || !book) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const idObservedParagraph = entry.target.id;

                    if (timerRef.current) clearTimeout(timerRef.current);

                    timerRef.current = setTimeout(() => {
                        const parts = idObservedParagraph.split('_');
                        const chapter = parseInt(parts[1], 10);
                        const paragraph = parseInt(parts[3], 10);

                        updateReadingProgress(book.id_producto, chapter, paragraph)
                            .catch(err => console.error("Fallo al guardar progreso: ", err));
                    }, 3000);
                }
            });
        }, {
            root: null,
            rootMargin: '-50% 0px -50% 0px',
            threshold: 0
        });

        const paragraphs = document.querySelectorAll('.observable_paragraph');
        paragraphs.forEach((p) => observer.observe(p));

        return () => {
            paragraphs.forEach((p) => observer.unobserve(p));
            observer.disconnect();
            if (timerRef.current) clearTimeout(timerRef.current); // Limpiamos el timer al desmontar
        };
    }, [chapters, book]);
};