import { useState } from 'react';
import ThemeSwitcher from '../components/ConfigPage/ThemeSwitcher';
import BookCards from '../components/BookSections/BookCards';
import type Book from '../types/Book';

export default function Settings() {
    const [activePreview, setActivePreview] = useState<'card' | 'reading'>('card');
    const [fontFamily, setFontFamily] = useState<'sans' | 'serif'>('serif');

    const sampleBook: Book = {
        id_producto: 1,
        titulo: 'Esto es una prueba',
        autor: 'Autor Desconocido',
        genero: 'Imagina un género',
        direccion_portada: 'https://placehold.co/150x220?text=Prueba',
        descripcion: 'En un mundo donde existe StackBooks..',
        fecha_publicacion: '2006-07-17',
        editorial: 'StackBooks Inc.',
        isbn: '978-84-17347-62-8'
    };

    const renderPreviewComponent = () => {
        switch (activePreview) {
            case 'card':
                return <BookCards book={sampleBook} onSelect={() => {}} />;
            case 'reading':
                return (
                    <div style={{
                        height: 400,
                        width: '100%',
                        maxWidth: '600px',
                        overflowY: 'auto',
                        background: 'var(--bg)',
                        border: '1px solid var(--border)',
                        borderRadius: '8px',
                        padding: '24px',
                        fontFamily: fontFamily === 'serif' ? 'var(--serif)' : 'var(--sans)',
                        textAlign: 'left'
                    }}>
                        <h1 style={{ color: 'var(--text-h)' , fontSize:40}}>Esto es un título de capítulo</h1>
                        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '16px 0' }} />
                        <p style={{ color: 'var(--text)', lineHeight: '1.6' }}>
                            Esto es un texto de prueba para evaluar la legibilidad de la tipografía. <br /><br />
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores fugiat quae aut distinctio repellendus numquam perspiciatis, repudiandae consequuntur explicabo eius fugit impedit soluta ut temporibus cum optio! <br /><br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam accusamus similique inventore neque excepturi quod ea unde adipisci nostrum temporibus. <br /> <br />
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut magni id maiores iste aperiam totam quisquam voluptate ullam fugiat ipsum nobis sit quos, minima quasi accusamus unde quas perferendis animi.
                        </p>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '20px' }}>
            <h2>Configuración de Apariencia</h2>
            <p style={{ color: 'var(--text)', marginBottom: '24px', opacity: 0.8 }}>
                Personaliza la paleta de colores y la tipografía de lectura a tu gusto.
            </p>

            {/* Controles de Pestañas de Vista Previa */}
            <div
                role='group'
                style={{ display: 'flex', gap: '12px', marginBottom: '16px', borderBottom: '1px solid var(--border)', paddingBottom: '12px' }}
            >
                <button
                    onClick={() => setActivePreview('card')}
                    style={{ fontWeight: activePreview === 'card' ? 'bold' : 'normal', background: 'none', border: 'none', color: 'var(--text)', cursor: 'pointer' }}
                >
                    Ver Tarjeta
                </button>
                <button
                    onClick={() => setActivePreview('reading')}
                    style={{ fontWeight: activePreview === 'reading' ? 'bold' : 'normal', background: 'none', border: 'none', color: 'var(--text)', cursor: 'pointer' }}
                >
                    Ver Lectura
                </button>
            </div>

            {/* Controles secundarios específicos para el modo lectura */}
            {activePreview === 'reading' && (
                <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text)' }}>Tipografía:</span>
                    <button
                        onClick={() => setFontFamily('serif')}
                        style={{ padding: '4px 12px', background: fontFamily === 'serif' ? 'var(--accent)' : 'transparent', color: fontFamily === 'serif' ? 'var(--bg)' : 'var(--text)', border: '1px solid var(--border)', borderRadius: '4px', cursor: 'pointer' }}
                    >
                        Serif
                    </button>
                    <button
                        onClick={() => setFontFamily('sans')}
                        style={{ padding: '4px 12px', background: fontFamily === 'sans' ? 'var(--accent)' : 'transparent', color: fontFamily === 'sans' ? 'var(--bg)' : 'var(--text)', border: '1px solid var(--border)', borderRadius: '4px', cursor: 'pointer' }}
                    >
                        Sans-Serif
                    </button>
                </div>
            )}

            {/* Envuelve la sandbox */}
            <ThemeSwitcher
                currentFont={fontFamily}
            >
                <div style={{
                    minHeight: '380px',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '10px'
                }}>
                    {renderPreviewComponent()}
                </div>
            </ThemeSwitcher>
        </div>
    );
}