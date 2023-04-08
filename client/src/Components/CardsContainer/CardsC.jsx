
import styled from "styled-components";
import { useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import { getCountries } from "../Redux/actions";
import { Link } from "react-router-dom";

const DivCard = styled.div`
border: 1px solid black;
width: fit-content;
height: fit-content;
border-radious:10px;
`

const Conta = styled.div`
border:1px solid black;
display:flex;
flex-direction: row;
corder-radius: 15px;
flex-wrap: wrap;
gap: 2em;
margin:auto;
`;

const CardsContainer = () => {
    const countries = useSelector((state) => state.countries);
    const dispatch = useDispatch();

    
    //Paginado
    const [currentPage, setCurrentPage] = useState(0);
    
    let nextPage = () => {
        if (countries.length <= currentPage + 10) {
        setCurrentPage(currentPage);
        } else setCurrentPage(currentPage + 10);
    };

    let prevPage = () => {
        if (currentPage < 9) {
        setCurrentPage(0);
        } else {
        setCurrentPage(currentPage - 10);
        }
    };

    const firstPage = () => {
        setCurrentPage(0);
    };

    const lastPage = () => {
        setCurrentPage(countries.length - 10);
        console.log(currentPage);
    };

    useEffect(() => {
        firstPage()
    }, [countries]);
    
    
    const filteredC = countries.slice(currentPage, currentPage + 10);
    
    useEffect(() => {
    dispatch(getCountries())
    }, [dispatch])

    return(
        <Conta>
            <div>
            <button onClick={firstPage}> {'<<'} </button>
            <button onClick={prevPage}> {'<'} </button>
            <label> {currentPage/10+1} </label>
            <button onClick={nextPage}> {'>'} </button>
            <button onClick={lastPage}> {'>>'} </button>
            </div>
            {filteredC.map((country) => {
                        return (
                            <DivCard>
                        <Link to={`/detail/${country.id}`}>
                        <img src={country.flags} alt={country.name}/>
                        <h2>{country.name}</h2>
                        <h2>{country.continent}</h2>
                        </Link>
                            </DivCard>
                            )})}
        </Conta>
    )
}


export default CardsContainer;

// <Card 
// id ={country.id}
// flags = {country.flags.png}
// name = {country.name.common}
// continents = {country.continents}
//         />