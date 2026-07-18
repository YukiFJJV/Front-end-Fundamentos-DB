import { useState } from "react";
import SearchWrapper from '../components/Search/SearchWrapper';
import type Book from '../types/Book';
import type Chapter from '../types/Chapter'
import CategorySection from '../components/BookSections/CategorySection';
import ProductDescription from '../components/BookSections/ProductDescription';

// Capitulos de prueba
const mockChapters: Chapter[] = [
    {
        id_capitulo: 1,
        id_libro: 1,
        numero_capitulo: 1,
        titulo_capitulo: "Cenizas del Cielo",
        contenido: "La ceniza caía del cielo de forma constante, como si el mundo entero estuviera en un duelo perpetuo. Kelsier caminaba por los campos de la plantación, con las botas hundiéndose en el barro grisáceo, observando a los skaa trabajar bajo un sol rojo y opresivo que apenas lograba penetrar la densa capa de humo. Llevaban siglos así, agachados, temerosos, convencidos de que su destino era servir al Lord Legislador hasta que la muerte les concediera el descanso. Kelsier se detuvo junto a uno de los barracones y sonrió. Era una sonrisa peligrosa, la de un hombre que ya no tenía nada que perder. Había sobrevivido a los Pozos de Hathsin, un lugar del que nadie regresaba, y ahora, en su interior, sentía el poder de los metales latiendo con fuerza. Había llegado el momento de enseñarles a los skaa que incluso los dioses pueden sangrar."
    },
    {
        id_capitulo: 2,
        id_libro: 1,
        numero_capitulo: 2,
        titulo_capitulo: "La Banda de Ladrones",
        contenido: "En los húmedos e iluminados bajos fondos de Luthadel, el aire olía a hollín, sudor y secretos. Vin se acurrucó en la esquina de la taberna, intentando hacerse lo más invisible posible. Era una habilidad en la que había destacado desde niña: pasar desapercibida era la clave para no recibir palizas. Observaba a Camon, el líder de su banda, fanfarronear frente a un grupo de mercenarios. Vin sabía que el golpe que estaban planeando era un suicidio, pero no tenía voz ni voto. Lo único que tenía era su 'Suerte'. No sabía de dónde venía ni cómo funcionaba realmente, pero a veces, si se concentraba lo suficiente, podía empujar suavemente las emociones de las personas, hacer que confiaran un poco más, que estuvieran un poco menos enojados. Lo que Vin no sabía, y estaba a punto de descubrir esa misma noche cuando la puerta de la taberna se abrió de golpe dejando entrar las brumas, es que su 'Suerte' tenía un nombre: Alomancia."
    },
    {
        id_capitulo: 3,
        id_libro: 1,
        numero_capitulo: 3,
        titulo_capitulo: "El Secreto de los Metales",
        contenido: "El frasco de cristal contenía un líquido turbio en el que flotaban diminutas esquirlas de metal. Vin lo miró con desconfianza. Kelsier le había explicado que el agua solo era para que no se atragantara con las virutas de estaño, peltre, hierro y acero. 'Bebe', le ordenó con esa sonrisa confiada que nunca parecía abandonarlo. Vin tragó el contenido. Al principio no sintió nada, solo el sabor metálico y rasposo bajando por su garganta. Entonces, Kelsier le enseñó a buscar en su interior. Le dijo que imaginara una reserva de energía en su estómago. Cuando Vin lo hizo, sintió de repente un calor abrasador, como si hubiera tragado brasas ardientes. 'Ahora, quema el estaño', susurró Kelsier. El mundo explotó a su alrededor. Pudo escuchar el aleteo de una polilla a tres habitaciones de distancia, la textura de la madera bajo sus dedos se volvió áspera y detallada, y la tenue luz de la vela la cegó por un instante. Había despertado."
    }
];

// Datos de prueba (recordar borrarlos luego)
const mockBooks: Book[] = [
    // --- PROBAR SCROLL ---
    {
        id_producto: 1,
        autor: "Brandon Sanderson",
        genero: "Fantasía Épica",
        editorial: "Nova",
        titulo: "El Imperio Final",
        descripcion: "En un mundo donde la ceniza cae del cielo y un lord legislador domina con mano de hierro.",
        isbn: "978-8417347291",
        fecha_publicacion: "2006-07-17",
        direccion_portada: "https://placehold.co/150x220?text=Imperio+Final"
    },
    {
        id_producto: 4,
        autor: "Brandon Sanderson",
        genero: "Fantasía Épica",
        editorial: "Nova",
        titulo: "El Pozo de la Ascensión",
        descripcion: "El Lord Legislador ha sido derrocado, pero sobrevivir a las consecuencias será el verdadero reto.",
        isbn: "978-8417347307",
        fecha_publicacion: "2007-08-21",
        direccion_portada: "https://placehold.co/150x220?text=Pozo+Ascensión"
    },
    {
        id_producto: 5,
        autor: "Brandon Sanderson",
        genero: "Fantasía Épica",
        editorial: "Nova",
        titulo: "El Héroe de las Eras",
        descripcion: "Para salvar el mundo, Vin debe descubrir el verdadero significado detrás del Héroe de las Eras.",
        isbn: "978-8417347314",
        fecha_publicacion: "2008-10-14",
        direccion_portada: "https://placehold.co/150x220?text=Heroe+Eras"
    },
    {
        id_producto: 6,
        autor: "Patrick Rothfuss",
        genero: "Fantasía Épica",
        editorial: "Plaza & Janés",
        titulo: "El Nombre del Viento",
        descripcion: "He robado princesas a reyes agónicos. Incendié la ciudad de Trebon. He pasado la noche con Felurian...",
        isbn: "978-8401337208",
        fecha_publicacion: "2007-03-27",
        direccion_portada: "https://placehold.co/150x220?text=Nombre+Viento"
    },
    {
        id_producto: 7,
        autor: "Patrick Rothfuss",
        genero: "Fantasía Épica",
        editorial: "Plaza & Janés",
        titulo: "El Temor de un Hombre Sabio",
        descripcion: "El hombre había desaparecido. El mito no. Músico, mendigo, ladrón, estudiante, mago, héroe y asesino.",
        isbn: "978-8401339011",
        fecha_publicacion: "2011-03-01",
        direccion_portada: "https://placehold.co/150x220?text=Temor+Sabio"
    },
    {
        id_producto: 8,
        autor: "George R.R. Martin",
        genero: "Fantasía Épica",
        editorial: "Gigamesh",
        titulo: "Juego de Tronos",
        descripcion: "En el continente de Poniente, donde las estaciones duran décadas, las casas nobles luchan por el Trono de Hierro.",
        isbn: "978-8496208919",
        fecha_publicacion: "1996-08-01",
        direccion_portada: "https://placehold.co/150x220?text=Juego+Tronos"
    },
    {
        id_producto: 9,
        autor: "J.R.R. Tolkien",
        genero: "Fantasía Épica",
        editorial: "Minotauro",
        titulo: "La Comunidad del Anillo",
        descripcion: "Un hobbit recibe la misión de destruir un anillo de poder antes de que caiga en manos del Señor Oscuro.",
        isbn: "978-8445071401",
        fecha_publicacion: "1954-07-29",
        direccion_portada: "https://placehold.co/150x220?text=Comunidad+Anillo"
    },
    {
        id_producto: 10,
        autor: "J.R.R. Tolkien",
        genero: "Fantasía Épica",
        editorial: "Minotauro",
        titulo: "Las Dos Torres",
        descripcion: "La Comunidad se ha disuelto, pero la misión de destruir el Anillo Único debe continuar a toda costa.",
        isbn: "978-8445071418",
        fecha_publicacion: "1954-11-11",
        direccion_portada: "https://placehold.co/150x220?text=Dos+Torres"
    },

    // --- OTRAS CATEGORÍAS ---
    {
        id_producto: 2,
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
        autor: "Gabriel García Márquez",
        genero: "Realismo Mágico",
        editorial: "Literatura Random House",
        titulo: "Cien años de soledad",
        descripcion: "Muchos años después, frente al pelotón de fusilamiento...",
        isbn: "978-8439728398",
        fecha_publicacion: "1967-05-30",
        direccion_portada: "https://placehold.co/150x220?text=Cien+años+soledad"
    }
];

export default function Categories(){
    const [selectedBook, setSelectedBook] = useState<Book | null>(null);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const handleSelectBook = (book:Book) =>{
        setSelectedBook(book);
    };

    return(
        <>
            <SearchWrapper
                onSelect={handleSelectBook}
                booksPool={mockBooks}
                selectedCategories={selectedCategories}
                setSelectedCategories={setSelectedCategories}
                hasFilter={true}
            >
                <CategorySection
                    poolBooks={mockBooks}
                    onSelect={handleSelectBook}
                    selectedCategories={selectedCategories}
                />
            </SearchWrapper>
            {selectedBook && (
                <ProductDescription
                    book={selectedBook}
                    onClose={() => setSelectedBook(null)}
                    chapters={mockChapters}
                />
            )}
        </>
    );
}