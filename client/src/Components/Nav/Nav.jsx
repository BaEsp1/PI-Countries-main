import { Link } from "react-router-dom";
import styled from "styled-components";
import './Nav.css'
import SearchBar from "./SearchBar"

const BnCheto = styled.button`
padding:5px;
border-radius:120px;
background-color:black;
color: white;
font-size:20px;
font-family:Verdana,Helvetica;
font-weight:bold;
display:inline;
box-shadow: 5px 2px 2px black;
`;

function Nav ({onSearch}) {

    return (
        <div>

            {/* <Link to={"/home"} className="link"><BnCheto> Home </BnCheto></Link> */}
            <Link to={'/'} className="link" ><BnCheto>Henry Countries</BnCheto></Link>
            <Link to={"/about"} className="link"><BnCheto> About me</BnCheto></Link>
            <Link to={"/create"} className="link"><BnCheto>Add Activity</BnCheto></Link>
 
            <SearchBar onSearch={onSearch}/>
        </div>
    )
};

export default Nav;