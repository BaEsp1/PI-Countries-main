import CardsContainer from "../../Components/CardsContainer/CardsC";
import {useEffect} from "react";
import { useDispatch, useSelector , connect} from "react-redux";
import { filActivity, filContinent, getActivities, getCountries, orderASC,  orderPOA} from "../../Components/Redux/actions";
import { useState } from "react";
import styled from "styled-components";
import "./home.css"

const Container = styled.div`
display: flex;
`;

const DivOrder = styled.div`
background-color : rgb(217, 172, 245, .8);
margin: 10px 400px 5px 400px;
display: flex;
justify-content: space-between;
border-radius:120px;
border: 5px solid rgb(217, 172, 245);
padding: 5px;
height: 40px;
overflow: hidden;
`;


//Botones/Opciones para filtrar por continente y por tipo de actividad turística.
// Botones/Opciones para ordenar tanto ascendentemente como descendentemente los países por orden alfabético y por cantidad de población.
// Paginado: el listado de países se hará por partes. Tu SPA debe contar con un paginado que muestre un total de 10 países por página.

function Home () {

    const dispatch = useDispatch()

    const [sort, setSort] = useState("");
    const [filConti, setFilConti] = useState("");

    const filAct = useSelector(state => state.actividades)

    useEffect(() => {
        dispatch(getCountries())
        dispatch(getActivities())
    }, [dispatch])

    function handleOrder(e) {
        e.preventDefault();
        if (e.target.value) dispatch(orderASC(e.target.value))
        setSort(e.target.value)
    }

    function handleOrderPOA(e) {
        if (e.target.value !== "")
        dispatch(orderPOA(e.target.value))
        setSort(e.target.value)
    }

    useEffect(() =>{
        if (filConti === "all") getCountries();
        else dispatch(filContinent(filConti));
    },[filConti])

    useEffect(() =>{
        if (filAct === "all") getCountries();
        else filActivity();
    },[filAct])


    const activityHandler = (e) => {
        setSort(e.target.value)
    };
    
    return (
        <div>
            <DivOrder>

            <p className="ps">Sort by :</p>
            <select onChange={handleOrder} >
                <option value="">   -   </option>
                <option value='Asc' key='Asc'> A-Z </option>
                <option value='Desc' key='Desc'> Z-A </option>
            </select>
                <p className="ps">Sort by population :</p>
            <select onChange={handleOrderPOA}>
                <option value="">   -   </option>
                <option value="POA">↑ population</option>
                <option value="POE">↓ population</option>
            </select>

            <p className="ps"> Filter by Continent:</p>
            <select onChange={(e) => setFilConti(e.target.value)} >
                <option value="all" >  All  </option>
                <option value="South America">South America</option>
                <option value="North America">North America</option>
                <option value="Europe">Europe</option>
                <option value="Africa">Africa</option>
                <option value="Oceania">Oceania</option>
                <option value="Asia">Asia</option>
                <option value="Antarctica">Antarctica</option>
            </select>

            <p className="ps">Activity:</p>
            <select onChange={(e) => activityHandler(e.target.value)}>
                <option value="all">All</option>
                {filAct.map(e =>(
                    <option value={e}>{e}</option>
                ))}
            </select>

            </DivOrder>

                <Container>
                    <CardsContainer />
                </Container>
        </div>
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
      orderASC: () => dispatch(orderASC()),
      getCountries: () => dispatch(getCountries()),
      filContinent: () => dispatch(filContinent()),
      filActivity: () => dispatch(filActivity()),
      orderPOA: () => dispatch(orderPOA()),
    };
  };

  const mapStateToProps = (state) => {
    return {
      countries: state.countries,
    };
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(Home);