import { motion, AnimatePresence } from 'framer-motion';

export const FavoriteButton = ({ isFavorite, onToggle }: { isFavorite: boolean, onToggle: () => void }) => (
    <motion.button
        onClick={onToggle}
        whileTap={{ scale: 0.9 }}
        aria-label={isFavorite ? 'Favorito' : 'No favorito'}
    >
        <motion.svg preserveAspectRatio="none" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"
            style={{ originY: 0, filter: 'drop-shadow(0px 2px 6px var(--shadow-filter))' }}
            animate={{
                scaleY: isFavorite ? [0.9, 1.15, 0.95, 1] : 0.7,
                scaleX: isFavorite ? [1, 0.9, 1.05, 1] : 1,
                y: isFavorite ? [0, 4, -1, 0] : 0,
                fill: isFavorite ? "var(--accent)" : "transparent",
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            <path d="M 20 0 H 44 C 48.4 0 52 3.6 52 8 V 60 L 32 46 L 12 60 V 8 C 12 3.6 15.6 0 20 0 Z"
                stroke="var(--accent)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </motion.svg>
    </motion.button>
);

export const SaveButton = ({ isSaved, onToggle, className }: { isSaved: boolean, onToggle: () => void, className: string }) => (
    <motion.button
        onClick={onToggle}
        className={`${className} ${isSaved ? 'activeButton' : ''}`} // Ajusta el estilo activo según corresponda
        whileTap={{ scale: 0.9 }}
    >
        <AnimatePresence mode="wait" initial={false}>
            {isSaved ? (
                <motion.svg key="saved"
                    initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.5, rotate: 45 }}
                    transition={{ duration: 0.2 }}
                    xmlns="http://www.w3.org/2000/svg" viewBox="2 3 19 19" width="35" height="35" fill="none"
                    stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"
                >
                    <path d="M12 8v4l2 2" />
                    <path d="M12 5 A 7 7 0 1 0 19 12 M17 14 L19 12 L21 14" />
                </motion.svg>
            ) : (
                <motion.svg key="unsaved"
                    initial={{ opacity: 0, scale: 0.5, rotate: 45 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.5, rotate: -45 }}
                    transition={{ duration: 0.2 }}
                    xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 22 26" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                >
                    <path d="M10 19.7A8 8 0 1 1 18.5 14" />
                    <path d="M12 6v6l3.5 3.5" />
                    <path d="M14 19l2.5 2.5 5 -7.5" />
                </motion.svg>
            )}
        </AnimatePresence>
    </motion.button>
);

export const ReadButton = ({ isReading, onClick, className }: { isReading: boolean, onClick: () => void, className: string }) => (
    <button
        onClick={onClick}
        className={className}
        aria-label={isReading ? 'Continuar leyendo' : 'Leer ahora'}
    >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width={14} height={14}>
            <path d="M16.6582 9.28638C18.098 10.1862 18.8178 10.6361 19.0647 11.2122C19.2803 11.7152 19.2803 12.2847 19.0647 12.7878C18.8178 13.3638 18.098 13.8137 16.6582 14.7136L9.896 18.94C8.29805 19.9387 7.49907 20.4381 6.83973 20.385C6.26501 20.3388 5.73818 20.0469 5.3944 19.584C5 19.053 5 18.1108 5 16.2264V7.77357C5 5.88919 5 4.94701 5.3944 4.41598C5.73818 3.9531 6.26501 3.66111 6.83973 3.6149C7.49907 3.5619 8.29805 4.06126 9.896 5.05998L16.6582 9.28638Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
        </svg>
        {isReading ? 'Continuar leyendo' : 'Leer ahora'}
    </button>
);