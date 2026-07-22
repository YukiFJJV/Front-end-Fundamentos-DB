import { useEffect, useState } from 'react';
import logo from '../../assets/logo.svg';
import styles from './Header.module.css';
import {motion} from 'framer-motion'

interface HeaderProps{
    isMenuOpen: boolean
    onToggle: () => void;
    isSearchActive: boolean;
}

export default function Header({isMenuOpen ,onToggle, isSearchActive}:HeaderProps){
    const [isVisible, setIsVisible] = useState(true);

    useEffect(()=>{
        let lastScrollY = window.scrollY;

        const handleScroll = () =>{
            const currentScrollY = window.scrollY;

            // Si scrolleamos abajo
            if(currentScrollY > lastScrollY){
                setIsVisible(false);
            } else{ // En cualquier otro caso
                setIsVisible(true)
            }

            // Actualizamos por cada cambio de posición
            lastScrollY = currentScrollY;
        }

        // Escuchamos el scroll
        window.addEventListener('scroll', handleScroll, {passive: true})

        // Limpiamos
        return()=>{
            window.addEventListener('scroll', handleScroll);
        }
    },[]); // Solo montamos al inicio de la página

    return(
        <>
            <header className={`${styles.header_container} ${isVisible ? '' : styles.scroll_down}`}>
                <div className={styles.right}>
                    <img src={logo} className={styles.logo}/>
                    <span>StackBooks</span>
                </div>

                <div className={styles.left}>
                    <button
                        onClick={(e)=>{
                            e.stopPropagation()
                            onToggle();
                        }}
                        style={{
                            pointerEvents: isSearchActive? 'none': 'auto'
                        }}
                        inert={isSearchActive}
                    >
                        {/* Menú hamburguesa */}
                        <motion.svg
                            width="40px"
                            height="40px"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                        >
                            {/* Linea superior */}
                            <motion.path
                                d="M4 6h16"
                                animate={{
                                    y: isMenuOpen ? 6 : 0,
                                    rotate: isMenuOpen ? 45 : 0,
                                    opacity: isSearchActive? 0 : 1
                                }}
                                // Esto asegura que la línea rote sobre su propio centro
                                style={{
                                    originX: "50%",
                                    originY: "50%",
                                }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                            ></motion.path>
                            {/* Linea del medio */}
                            <motion.path
                                d = "M4 12h16"
                                animate={{
                                    opacity: (isMenuOpen || isSearchActive)? 0:1
                                }}
                                transition={{ duration: 0.2 }}
                            ></motion.path>
                            <motion.path
                                d="M4 18h16"
                                animate={{
                                    y:  isMenuOpen ? -6:0,
                                    rotate: isMenuOpen? -45 :0,
                                    opacity: isSearchActive? 0:1
                                }}
                                style={{ originX: "50%", originY: "50%" }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                            ></motion.path>
                        </motion.svg>
                    </button>
                </div>
            </header>
        </>
    );
}