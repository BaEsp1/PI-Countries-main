import { useParams } from "react-router-dom";
import {React} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const DiStyle= styled.div`
background-color: white;
height:500px;
width:900px;
border-radius:25px;
box-shadow: 5px 2px 2px black;
margin: auto;
margin-top:80px;
border: 2px solid grey;
    `;

const ImgPioli = styled.img`
float: right;
border-radius:25px;
border: 2px solid grey;
margin-right:100px;
`;

const BtAgrega = styled.button`
margin:auto;
border-radius:150px;
background-color:black;
color: white;
font-size:15px;
font-family:Verdana,Helvetica;
font-weight:bold;
box-shadow: 5px 2px 2px black;
`;

const Tit = styled.h2`
color: Black;
position: absolute;
left: 80;
top: 50;
padding: 30px;
margin-right: 200px;
`;

const Hu = styled.h1`
color:black;
font-style: italic;
font-weight:bold;
`;


export default function Detail() {

    const {detailId} = useParams();

    const [country, setCountry] = React.useState({});

        React.useEffect(() => {
    fetch(`http://localhost:3001/countries/${detailId}`)
            .then((response) => response.json())
            .then((count) => {
                if (count.name) {
                    setCountry(count);
                } else {
                    window.alert('Country not found');
                }
            })
            .catch((err) => {
                window.alert('Country not found');
            });
            return setCountry({});
        }, [detailId]);

        

        return (
        <DiStyle> 
            <Link to="/home"> <BtAgrega> Volver </BtAgrega> </Link>
            
            <Hu>{country.name}</Hu>
            
            <ImgPioli  src={country.image} alt={country?.name} /> 
            <Tit> Status : {country.status} </Tit> <br/><br/><br/>
            <Tit> Specie : {country.species}  </Tit><br/><br/><br/>
            <Tit> Gender : {country.gender}  </Tit><br/><br/><br/>
            <Tit> Origin : {country.origin?.name}  </Tit>

        </DiStyle>
        
        );
    }