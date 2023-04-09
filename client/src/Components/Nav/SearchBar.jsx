import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { getCountry, getCountries } from "../Redux/actions";

const InpT = styled.input`
background-color: white;
color: black;
font-size:25px;
font-family:Verdana,Helvetica;
font-weight:bold;
width: 20%;
border-radius:150px;
border:rgb(169, 169, 169), 5px;
`;

const BtAgrega = styled.button`
border-radius:150px;
background-color: rgb(11, 178, 255, .7);
color: white;
font-size:23px;
font-family:Verdana,Helvetica;
font-weight:bold;
border: 1px solid rgb(11, 178, 255);
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
            <h3>Start looking for the country you want!</h3>
            <InpT type='search' value={text} onChange={inputHandler} placeholder="Search a country by ID"/>
        <BtAgrega onClick={() => onClickHandler(text)}>Search</BtAgrega> 
        <BtAgrega onClick={() => countrieshandler()}>Reset</BtAgrega>
        </div>
    );
}
