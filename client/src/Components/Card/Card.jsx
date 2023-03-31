import { Link } from "react-router-dom"
import styled from "styled-components"

const DivCard = styled.div`
border: 1px solid black;
width: fit-content;
height: fit-content;
border-radious:10px;
`


export default function Card (props){

    return (
        <DivCard>

            <Link to={`/detail/${props.id}`}>
            <img src={props.flags} alt = {props.name}/>
            <h2>{props.name}</h2>
            <h2>{props.continents}</h2>
            </Link>

        </DivCard>)
};

