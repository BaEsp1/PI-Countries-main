import { Link } from "react-router-dom"

export default function Card (props){

    return (
        <div>
            <Link> to={`/detail/${props.id}`}
            <img src={props.flags} alt = {props.name}/>
            <h2>{props.name}</h2>
            <h2>{props.continent}</h2>
            </Link>
        </div>)
};

