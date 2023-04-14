import styled from "styled-components";
import { useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import { getCountries } from "../Redux/actions";
import { Link } from "react-router-dom";
import "./CardsC.css"

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

    let pageActual= Math.floor(currentPage/10+1)
    
    useEffect(() => {
    dispatch(getCountries())
    }, [dispatch])

    return(
        <Conta>
            <div className="paginado">
                <button onClick={firstPage} className="boton"name="btonFirst" key="btonFirst"> {'<<'} </button>
                <button onClick={prevPage} className="boton"name="btonPrev" key="btonPrev"> {' < '} </button>
                <label className="labelPag" name="labelPag" key="labelPag"> {pageActual} </label>
                <button onClick={nextPage} className="boton"name="btonNext" key="btonNext"> {' > '} </button>
                <button onClick={lastPage} className="boton"name="btonLast" key="btonLast"> {'>>'} </button>
            </div>

            {filteredC.map((country) => {
                        return (
                        <div className="DivCard" name="Card" key="Card">
                        <Link to={`/detail/${country.id}`} className="Link">
                            <img src={country.flags} alt={country.name} className="flags"/>
                            <h2 className="h23" name="Card-Name" key="Card-Name">{country.name}</h2>
                            <h2 className="h23" name="Card-Continent" key="Card-Continent">{country.continent}</h2>
                        </Link>
                        </div>
                            )})}
        </Conta>
    )
}


export default CardsContainer;
