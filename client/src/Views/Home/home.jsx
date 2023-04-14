import CardsContainer from "../../Components/CardsContainer/CardsC";
import {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { filActivity, filContinent, getActivities, getCountries, orderASC,  orderPOA} from "../../Components/Redux/actions";
import { useState } from "react";
import styled from "styled-components";
import "./home.css"

const Container = styled.div`
display: flex;
`;

function Home () {
    const dispatch = useDispatch()

    const [sort, setSort] = useState("");
    const [filConti, setFilConti] = useState("");

    const filAct = useSelector(state => state.actividades)

    useEffect(() => {
        dispatch(getCountries())
        dispatch(getActivities())
    }, [dispatch])


    const handleOrder = (e) => {
		dispatch(orderASC(e.target.value));
        setSort(e.target.value);
	};

	const handleOrderPOA = (e) => {
		dispatch(orderPOA(e.target.value));
        setSort(e.target.value);
	};

    function handleFilteredContinent(e) {
		dispatch(filContinent(e.target.value))
        setFilConti();
	}

	function handleFilterActi(e) {
		e.target.value === ""
			? dispatch(getActivities())
			: dispatch(filActivity(e.target.value));
        setFilConti()
	}
    
    return (
        <div name="ContainerHome" key="ContainerHome">
            <div className="DivOrder" name="Order/Filter" key="Order/Filter">

            <p className="ps" name="SortByName" key="SortByName">Sort by :</p>
            <select onChange={(e) =>handleOrder(e)} name="SelectOrderAsc" key="SelectOrderAsc">
                <option value="" key="-" name="-">   -   </option>
                <option value='asc' key='asc' name="asc"> A-Z </option>
                <option value='Desc' key='Desc' name="dsc"> Z-A </option>
            </select>

                <p className="ps" name="SortByPopulation" key="SortByPopulation">Sort by population :</p>
            <select onChange={(e) =>handleOrderPOA(e)} name="SelectOrderPOA" key="SelectOrderPOA">
                <option value="" name="--" key="--">   -   </option>
                <option value="POA" name="POA" key="POA">↑ population</option>
                <option value="POE" name="POE" key="POE">↓ population</option>
            </select>

            <p className="ps" name="FilterByContinent" key="FilterByContinent"> Filter by Continent:</p>
            <select onChange={handleFilteredContinent} name="SelectFilterContinent" key="SelectFilterContinent">
                <option value="all"  name="AllContinents" key="AllContinents">  All  </option>
                <option value="South America" name="OptSouthAmerica" key="OptSouthAmerica">South America</option>
                <option value="North America" name="OptNorth America" key="OptNorth America">North America</option>
                <option value="Europe" name="OptEurope" key="OptEurope">Europe</option>
                <option value="Africa" name="OptAfrica" key="OptAfrica">Africa</option>
                <option value="Oceania" name="OptOceania" key="OptOceania">Oceania</option>
                <option value="Asia" name="OptAsia" key="OptAsia">Asia</option>
                <option value="Antarctica" name="OptAntarctica" key="OptAntarctica">Antarctica</option>
            </select>

            <p className="ps" name="FilterActivities" key="FilterActivities">Activity:</p>
            <select onChange={handleFilterActi} name="SelectFilterActivities" key="SelectFilterActivities">
                <option value="" name="AllActivities" key="AllActitivies">All</option>
                {filAct.map(e =>(
                    <option value={e} name={e} key={e}>{e}</option>
                ))}
            </select>

            </div>

                <Container name="DivCards" key="DivCards">
                    <CardsContainer name="Card" key="Card" />
                </Container>
        </div>
    )
};


export default Home;