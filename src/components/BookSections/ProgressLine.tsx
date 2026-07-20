interface ProgressLineProps {
    percentage: number;
}

export default function ProgressLine({ percentage }: ProgressLineProps) {
    // Nos aseguramos de que el valor siempre esté entre 0 y 100
    const safePercentage = Math.min(Math.max(percentage, 0), 100);

    return (
        <svg
            width="100%"
            height="8"
            xmlns="http://www.w3.org/2000/svg"
            style={{ borderRadius: '4px', display: 'block' }}
        >
            {/* LÍNEA DE FONDO (Gris oscuro) */}
            <rect
                width="100%"
                height="100%"
                fill="#333333"
                rx="4"
            />

            {/* LÍNEA DE PROGRESO */}
            <rect
                width={`${safePercentage}%`}
                height="100%"
                fill="#76eaff"
                rx="4"
            />
        </svg>
    );
}