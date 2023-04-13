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
		e.preventDefault();
		e.target.value === ""
			? dispatch(getActivities())
			: dispatch(filActivity(e.target.value));
        setFilConti()
	}
    
    return (
        <div className="White">
            <div className="DivOrder">

            <p className="ps">Sort by :</p>
            <select onChange={(e) =>handleOrder(e)} >
                <option value="">   -   </option>
                <option value='asc' key='asc'> A-Z </option>
                <option value='Desc' key='Desc'> Z-A </option>
            </select>
                <p className="ps">Sort by population :</p>
            <select onChange={(e) =>handleOrderPOA(e)}>
                <option value="">   -   </option>
                <option value="POA">↑ population</option>
                <option value="POE">↓ population</option>
            </select>

            <p className="ps"> Filter by Continent:</p>
            <select onChange={handleFilteredContinent} >
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
            <select onChange={handleFilterActi}>
                <option value="all">All</option>
                {filAct.map(e =>(
                    <option value={e}>{e}</option>
                ))}
            </select>

            </div>

                <Container>
                    <CardsContainer />
                </Container>
        </div>
    )
};


export default Home;