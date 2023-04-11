import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import './Nav.css'
import SearchBar from "./SearchBar"

function Nav ({onSearch}) {
    const location= useLocation();

    return (
        <div className="div">
            <Link to={'/'} className="link" ><button className="BnNav">Henry Countries</button ></Link>
            <Link to={"/about"} className="link"><button className="BnNav"> About me</button ></Link>
            <div className="lef">
            { location.pathname !== "/create" && <Link to={"/create"} className="link"><button className="BnNav">Add Activity</button></Link>}
            { location.pathname === "/create" &&  <Link to={"/home"} className="link"><button className="BnNav"> Home </button ></Link> }
            </div>

            { location.pathname === "/home" &&<SearchBar onSearch={onSearch}/>}
        </div>
    )
};

export default Nav;