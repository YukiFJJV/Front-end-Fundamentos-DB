import { useState, type ReactNode } from "react";
import ColorPalette from "./ColorPalette";
import styles from './ThemeSwitcher.module.css'

interface ThemeSwitcherProps {
    children: ReactNode;
    currentFont?: 'sans' | 'serif';
}

export default function ThemeSwitcher({
    children,
    currentFont
}: ThemeSwitcherProps){
    const availableDarkThemes = [
        {name: 'Morado Nocturno', dataColor: 'morado', dataTheme: 'oscuro'},
        {name: 'Azul Oceano', dataColor: 'azul', dataTheme: 'oscuro'},
        {name: 'Verde Bosque', dataColor: 'verde', dataTheme: 'oscuro'},
        {name: 'Turquesa Profundo', dataColor: 'turquesa', dataTheme: 'oscuro'},
        {name: 'Ambar Abisal', dataColor: 'ambar', dataTheme: 'oscuro'},
        {name: 'Rojo Sangre', dataColor: 'rojo', dataTheme: 'oscuro'}
    ]

    const availableLightThemes =[
        {name: 'Morado', dataColor: 'morado', dataTheme: 'claro'},
        {name: 'Azul', dataColor: 'azul', dataTheme: 'claro'},
        {name: 'Verde Bosque', dataColor: 'verde', dataTheme: 'claro'},
        {name: 'Turquesa', dataColor: 'turquesa', dataTheme: 'claro'},
        {name: 'Ambar', dataColor: 'ambar', dataTheme: 'claro'},
        {name: 'Rojo', dataColor: 'rojo', dataTheme: 'claro'}
    ]

    const [activeColor, setActiveColor] = useState(()=>{
        return localStorage.getItem('data-color') || 'morado';
    });

    const [activeTheme, setActiveTheme] = useState(()=>{
        return localStorage.getItem('data-theme') || 'oscuro';
    });

    const [previewColor, setPreviewColor] = useState(activeColor);
    const [previewTheme, setPreviewTheme] = useState(activeTheme);

    const [isShowingLightThemes, setIsShowingLightThemes] = useState(false);

    const [animationState, setAnimationState] = useState<'idle' | 'exiting' | 'entering'>('idle');

    const handleApplyTheme = () => {
        setActiveColor(previewColor);
        setActiveTheme(previewTheme);

        document.documentElement.setAttribute('data-color', previewColor);
        document.documentElement.setAttribute('data-theme', previewTheme);
        localStorage.setItem('data-color', previewColor);
        localStorage.setItem('data-theme', previewTheme);

        if (currentFont) {
            document.documentElement.setAttribute('data-font', currentFont);
            localStorage.setItem('data-font', currentFont);
        }
    };

    const handleToggleThemes = () => {
        if (animationState !== 'idle') return;

        setAnimationState('exiting');

        setTimeout(() => {
            setIsShowingLightThemes(prev => !prev);
            setAnimationState('entering');

            setTimeout(() => {
                setAnimationState('idle');
            }, 300);
        }, 300);
    };

    const currentThemes = isShowingLightThemes ? availableLightThemes : availableDarkThemes;
    const currentTitle = isShowingLightThemes ? 'Temas Claros' : 'Temas Oscuros';
    const toggleButtonText = isShowingLightThemes ? 'Ver colores oscuros' : 'Ver colores claros';

    return(
        <div className={styles.switcher_container}>
            <div className={styles.layout_row}>
                <div className={styles.sidebar}>

                    <div className={styles.sidebar_header}>
                        <button
                            className={styles.toggle_button}
                            onClick={handleToggleThemes}
                        >
                            {toggleButtonText}
                        </button>
                    </div>
                    <hr className={styles.divider_line} />

                    <div className={styles.theme_section}>
                        <h3 className={styles.section_title}>{currentTitle}</h3>

                        <div className={styles.animation_wrapper}>
                            <div className={`
                                ${styles.palette_grid}
                                ${animationState === 'exiting' ? styles.slide_out : ''}
                                ${animationState === 'entering' ? styles.slide_in : ''}
                            `}>
                                {currentThemes.map((themeItem)=>(
                                    <ColorPalette
                                        key={themeItem.name}
                                        paletteName={themeItem.name}
                                        dataColor={themeItem.dataColor}
                                        dataTheme={themeItem.dataTheme}
                                        onClick={() => {
                                            setPreviewColor(themeItem.dataColor);
                                            setPreviewTheme(themeItem.dataTheme);
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.main_content}>
                    <div className={styles.preview_header}>
                        <h3 className={styles.section_title}>Vista Previa</h3>
                    </div>

                    <div
                        data-color={previewColor}
                        data-theme={previewTheme}
                        className={styles.children_grid}
                    >
                        {children}
                    </div>
                </div>
            </div>

            <div className={styles.save_container}>
                <button
                    onClick={handleApplyTheme}
                    className={styles.save_button}
                >
                    Guardar y Aplicar Tema
                </button>
            </div>
        </div>
    );
}