import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import './Nav.css'
import SearchBar from "./SearchBar"

function Nav ({onSearch}) {
    const location= useLocation();

    return (
        <div className="div">
            <Link to={'/'} className="link">
                <button className="BnNav" name="btonCountries" key="btonCountries">Henry Countries</button >
            </Link>

            <Link to={"/about"} className="link">
                <button className="BnNav" name="btonAbout" key="btonAbout"> About me</button >
            </Link>

            <div className="lef">
                { location.pathname !== "/create" && <Link to={"/create"} className="link">
                    <button className="BnNav" name="btonCreate" key="btonCreate">Add Activity</button>
                    </Link>}
                    
                { location.pathname === "/create" &&  <Link to={"/home"} className="link">
                    <button className="BnNav" name="btonHome" key="btonHome"> Home </button >
                    </Link> }
                { location.pathname === "/about" &&  <Link to={"/home"} className="link">
                    <button className="BnNav" name="btonHome" key="btonHome"> Home </button >
                    </Link> }
            </div>

            { location.pathname === "/home" &&< SearchBar onSearch={onSearch} name="SearchBar" key="SearchBar"/>}
        </div>
    )
};

export default Nav;