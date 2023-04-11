import { useParams, Link } from "react-router-dom";
import {React, useEffect} from "react";
import styled from "styled-components";
import { useSelector,  useDispatch } from "react-redux";
import { getDetail } from "../../Components/Redux/actions";
import "./Detail.css"

const Tit = styled.h2`
color: Black;
display:flex;
background-color:white;
`;

const Hu = styled.h1`
color:black;
font-style: italic;
font-weight:bold;
background-color:white;
`;

export default function Detail() {

    const detail = useSelector((state) => state.detail);
    const dispatch = useDispatch();

    let { id } = useParams();

    useEffect(() => {
        dispatch(getDetail(id));
        }, [id]);

        return ( 
                <div className="DiStyle">
                    <Link to="/home"><button className="BtHome"> Home </button> </Link>

                    <Hu>{detail.name}</Hu>
                    <img  src={detail.flags} alt={detail.name} className="ImgPioli"/> 
                    <Tit> ID : {detail.id} </Tit>
                    <Tit> Capital : {detail.capital}  </Tit>
                    <Tit> Region : {detail.region}  </Tit>
                    <Tit> Sub Region: {detail.subregion}</Tit>
                    <Tit> Continent : {detail.continent}  </Tit>
                    <Tit> Area : {detail.area}  </Tit>
                    <Tit> Population : {detail.population}  </Tit>
                </div>
                    
        );
    }
