import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { getCountry, getCountries } from "../Redux/actions";



const InpT = styled.input`
background-color: rgb(205, 205, 205);
color: black;
font-size:15px;
font-family:Verdana,Helvetica;
font-weight:bold;
width: 20%;
border-radius:150px;
border:rgb(169, 169, 169), 5px;
`;

const BtAgrega = styled.button`
border-radius:150px;
background-color:black;
color: white;
font-size:15px;
font-family:Verdana,Helvetica;
font-weight:bold;
`;

export default function SearchBar() {

const [text,setText] = useState("");
const dispatch = useDispatch();

const inputHandler = (e) => {
    setText(e.target.value);
};

const onClickHandler = () => {
    dispatch(getCountry(text));
}

const countrieshandler = () => {
    dispatch(getCountries());
}


    return (
        <div>
            <h4>Start looking for the country you want!</h4>
            <InpT type='search' value={text} onChange={inputHandler} placeholder="Search a country by ID"/>
        <BtAgrega onClick={() => onClickHandler(text)}>Search</BtAgrega> 
        <BtAgrega onClick={() => countrieshandler()}>Reset</BtAgrega>
        </div>
    );
}
