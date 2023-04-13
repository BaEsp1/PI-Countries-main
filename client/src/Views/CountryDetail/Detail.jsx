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
                <div className="DiStyle" name="ContainerCardDetail" key="ContainerCardDetail">
                    <Link to="/home"><button className="BtHome" name="btonBack" key="btonBack"> Home </button> </Link>

                    <Hu>{detail.name}</Hu>
                    <img  src={detail.flags} alt={detail.name} className="ImgPioli" name="FlagDetail" key="FlagDetail"/> 
                    <Tit name="tittleId" key="Id"> ID : {detail.id} </Tit>
                    <Tit name="tittleCapital" key="Capital"> Capital : {detail.capital}  </Tit>
                    <Tit name="tittleRegion" key="Region"> Region : {detail.region}  </Tit>
                    <Tit name="tittleSub-region" key="Sub-region"> Sub Region: {detail.subregion}</Tit>
                    <Tit name="tittleContinent" key="Continent"> Continent : {detail.continent}  </Tit>
                    <Tit name="tittleArea" key="Area"> Area : {detail.area}  </Tit>
                    <Tit name="tittlePopulation" key="Population"> Population : {detail.population}  </Tit>
                </div>
                    
        );
    }
