import CardsContainer from "../../Components/CardsContainer/CardsC";

//Botones/Opciones para filtrar por continente y por tipo de actividad turística.
// Botones/Opciones para ordenar tanto ascendentemente como descendentemente los países por orden alfabético y por cantidad de población.
// Paginado: el listado de países se hará por partes. Tu SPA debe contar con un paginado que muestre un total de 10 países por página.

export default function Home (props) {

    return (
        <div>
            <h1>Soy el Home</h1>
            <div><CardsContainer/></div>
        </div>
    )
};

