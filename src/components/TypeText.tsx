import { useEffect, useRef } from "react";
import styles from './TypeText.module.css';

interface TypeWitterProps{
    isAtLibrary?: boolean
}

export default function Typewriter({
    isAtLibrary
}:TypeWitterProps) {
    const textRef = useRef<HTMLSpanElement | null>(null);

    useEffect(() => {
        const phrases = !isAtLibrary? [
            "Compilando: Conocimiento...",
            "El conocimiento a tu disposición",
            "La pluma es más fuerte que la espada",
            "Conoce tu historia, no la repitas",
            "Redacta tus sueños",
            "Descubre mundos",
            "Acumula stacks de libros",
            "Explora nuevas ideas",
            "La lectura te hace libre",
            "Código y poesía",
            "Páginas llenas de magia",
            "Tu próxima aventura",
            "Sabiduría en cada línea",
            "Crea tu propio camino"
        ]:[
            "Tu libreria",
            "Tus mundos",
            "Tus lugares seguros en libros",
            "Decide tu proxima historia",
            "Tus heroes están aquí"
        ];

        // Inicializamos en un índice aleatorio basado en el tamaño del arreglo
        let indexPhrase = Math.floor(Math.random() * phrases.length);
        let indexChar = 0;
        let erasing = false;
        let timeOutId: ReturnType<typeof setTimeout>;

        const writeText = () => {
            if (!textRef.current) return;

            const actualPhrase = phrases[indexPhrase];
            let speed = Math.random() * (150 - 50) + 50;

            if (erasing) {
                speed = 40;
            }

            // Borrar o tipear
            if (erasing) {
                textRef.current.innerHTML = actualPhrase.substring(0, indexChar - 1);
                indexChar--;
            } else {
                textRef.current.innerHTML = actualPhrase.substring(0, indexChar + 1);
                indexChar++;
            }

            // Cambiar palabra
            if (!erasing && indexChar === actualPhrase.length) {
                erasing = true;
                speed = 3000;
            } else if (erasing && indexChar === 0) {
                erasing = false;
                indexPhrase++;
                speed = 500;
            }

            // Reiniciar la lista de frases si llegamos al final del arreglo
            if (indexPhrase === phrases.length) {
                indexPhrase = 0;
            }

            timeOutId = setTimeout(writeText, speed);
        };

        writeText();

        return () => {
            clearTimeout(timeOutId);
        }
    }, [isAtLibrary])

    return (
        <span
            className={styles.typewriterText}
            ref={textRef}
            id="animated_text"
        >
        </span>
    );
}