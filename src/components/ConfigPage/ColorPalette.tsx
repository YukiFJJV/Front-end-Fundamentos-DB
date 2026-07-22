import styles from './ColorPalette.module.css'

interface ColorPallete {
    paletteName: string;
    dataColor: string;
    dataTheme: string;
    onClick: () => void;
}

function Circle() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="11" fill="currentColor"/>
        </svg>
    );
}

export default function ColorPalette({
    paletteName,
    dataColor,
    dataTheme,
    onClick
}: ColorPallete) {
    return (
        <article
            data-color={dataColor}
            data-theme={dataTheme}
            className={styles.palette_card}
            onClick={onClick}
        >
            <h3 className={styles.palette_title}>{paletteName}</h3>
            <ul className={styles.color_list}>
                <li
                    className={styles.background}
                    title="Fondo"
                >
                    <Circle/>
                </li>
                <li
                    className={styles.titles}
                    title="Títulos"
                >
                    <Circle/>
                </li>
                <li
                    className={styles.text}
                    title="Texto"
                >
                    <Circle/>
                </li>
                <li
                    className={styles.accent}
                    title="Acento"
                >
                    <Circle/>
                </li>
                <li
                    className={styles.border}
                    title="Bordes">
                    <Circle/>
                </li>
            </ul>
        </article>
    );
};