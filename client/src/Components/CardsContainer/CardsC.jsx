
import styled from "styled-components";
import { useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import { getCountries } from "../Redux/actions";
import { Link } from "react-router-dom";
import "./CardsC.css"

const DivCard = styled.div`
border: 5px solid rgb(255, 205, 140);
width: 350px;
height: 350px;
display:row;
background-color: rgb(255, 222, 180, .8);
-webkit-box-shadow: 7px 10px 35px -10px rgba(0,0,0,0.75);
-moz-box-shadow: 7px 10px 35px -10px rgba(0,0,0,0.75);
box-shadow: 7px 10px 35px -10px rgba(0,0,0,0.75);
`

const Conta = styled.div`
display:flex;
flex-direction: row;
border-radius: 15px;
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
            <div className="paginado">
            <button onClick={firstPage} className="boton"> {'<<'} </button>
            <button onClick={prevPage} className="boton"> {' < '} </button>
            <label> {currentPage/10+1} </label>
            <button onClick={nextPage} className="boton"> {' > '} </button>
            <button onClick={lastPage} className="boton"> {'>>'} </button>
            </div>

            {filteredC.map((country) => {
                        return (
                        <DivCard>
                        <Link to={`/detail/${country.id}`} className="Link">
                        <img src={country.flags} alt={country.name} className="flags"/>
                        <h2 className="h23">{country.name}</h2>
                        <h2 className="h23">{country.continent}</h2>
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