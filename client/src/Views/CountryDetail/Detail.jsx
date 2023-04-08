import { useParams } from "react-router-dom";
import {React, useEffect} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { getDetail } from "../../Components/Redux/actions";
import { useDispatch } from "react-redux";
import activityDetail from "../../Components/Activity/ActivityDetail"

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
`;

const Hu = styled.h1`
color:black;
font-style: italic;
font-weight:bold;
`;


export default function Detail() {
    const detail = useSelector((state) => state.detail);
    const dispatch = useDispatch();
  
    let { id } = useParams();
    useEffect(() => {
      dispatch(getDetail(id));
    }, [id]);
   
  
   console.log(detail, "COUNTRY DETAIL")

        return (
        <DiStyle> 
                <div>
                <Link to="/home"><BtAgrega> Volver </BtAgrega> </Link>
                    <Hu>{detail.name}</Hu>
                <ImgPioli  src={detail.flags} alt={detail.name} /> 
                <Tit> ID : {detail.id} </Tit>
                <Tit> Capital : {detail.capital}  </Tit>
                <Tit> Region : {detail.region}  </Tit>
                <Tit> Sub Region: {detail.subregion}</Tit>
                <Tit> Continent : {detail.continent}  </Tit>
                <Tit> Area : {detail.area}  </Tit>
                <Tit> Population : {detail.population}  </Tit>

                <ctivityDetail countryName={detail.name} activities={detail.activities} />          
                </div>
            
        </DiStyle>
        
        );
    }

//     📍 DETAIL PAGE | en esta vista se deberá mostrar toda la información específica de un país:

// ID (Código de tres letras).
// Nombre.
// Imagen de la bandera.
// Continente.
// Capital.
// Subregión (si tiene).
// Área (si tiene).
// Población.