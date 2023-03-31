import { useState } from "react";
import styled from "styled-components";


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

export default function SearchBar(props) {

const [text,setText] = useState("");

function handleChange(event){
    setText(event.target.value)
    }

    return (
        <div>
            <h4>Start looking for the country you want!</h4>
            <InpT type='search' value={text} onChange={handleChange} placeholder="Search a country by ID"/>
        <BtAgrega onClick={() => props.onSearch(text)}>Search</BtAgrega> 
        </div>
    );
}
