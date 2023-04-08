import CardsContainer from "../../Components/CardsContainer/CardsC";
import {useEffect} from "react";
import { useDispatch, useSelector , connect} from "react-redux";
import { filActivity, filContinent, getActivity, getCountries, orderASC, orderDSC, orderPOA, orderPOD} from "../../Components/Redux/actions";
import { useState } from "react";
//import paginado


//Botones/Opciones para filtrar por continente y por tipo de actividad turística.
// Botones/Opciones para ordenar tanto ascendentemente como descendentemente los países por orden alfabético y por cantidad de población.
// Paginado: el listado de países se hará por partes. Tu SPA debe contar con un paginado que muestre un total de 10 países por página.

function Home () {

    const dispatch = useDispatch()

    const [sort, setOrder] = useState("");
    const [region, setRegion] = useState("");

    const activity = useSelector(state => state.actividades)

    useEffect(() => {
        dispatch(getCountries());
    }, [dispatch])

    useEffect(() => {
        if (region) {
            getCountries();
        if (region !== "all") {
            setTimeout(() => {
            dispatch(filContinent(region));
            }, 20);
        }
        }
    }, [region]);

    useEffect(() => {
        if (sort === "all") getCountries();
        else if (sort === "a-z") orderASC();
        else if (sort === "z-a") orderDSC();
        else if (sort === "↑ population") orderPOA();
        else if (sort === "↓ population") orderPOD();
    }, [sort]);

    const activityHandler = (e) => {
        e.preventDefault();
        dispatch(filActivity(e.target.value))
        setOrder(e.target.value)
    };
    
    // const searchActHandler = (e) => {
    //     e.preventDefault();
    //     getCountries();
    //     setTimeout(() => {
    //     dispatch(getActivity(activity));
    //     }, 200);
    
        // console.log(activity);
        // setActivity("");

    return (
        <div>

            <p>Sort by:</p>
            <select onChange={(event) => setOrder(event.target.value)}>
                <option value="All">-</option>
                <option value="a-z">A - Z</option>
                <option value="z-a">Z - A</option>
                <option value="↑ population">↑ population</option>
                <option value="↓ population">↓ population</option>
            </select>

            <p> Filter by Continent:</p>
            <select onChange={(e) => setRegion(e.target.value)}>
                <option value="All">All</option>
                <option value="South America">South America</option>
                <option value="North America">North America</option>
                <option value="Europe">Europe</option>
                <option value="Africa">Africa</option>
                <option value="Oceania">Oceania</option>
                <option value="Asia">Asia</option>
                <option value="Antarctica">Antarctica</option>
            </select>

            <p>Activity:</p>
            <select onChange={activityHandler}>
                <option value="all">All</option>
                {activity.map(e =>(
                    <option value={e}>{e}</option>
                ))}
            </select>

                <div>
                <CardsContainer />
                </div>
        </div>
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
      orderASC: () => dispatch(orderASC()),
      getCountries: () => dispatch(getCountries()),
      filContinent: (region) => dispatch(filContinent(region)),
      orderDSC: () => dispatch(orderDSC()),
      filActivity: (payload) => dispatch(filActivity(payload)),
      orderPOA: () => dispatch(orderPOA()),
      orderPOD: () => dispatch(orderPOD()),
    };
  };

  const mapStateToProps = (state) => {
    return {
      countries: state.countries,
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Home);
  