import styled from "styled-components";
import { useState , useEffect } from "react";
import validate from "./validate";
import {useDispatch} from "react-redux";
import { getActivities , getCountries , postActivity} from "../../Components/Redux/actions";
import { useSelector } from "react-redux";

const FormDiv = styled.div`
background-color:grey;
border-radius:25px;
border: 3px solid rgb(99, 99, 99);
margin: 150px 400px;
box-shadow: 10px 5px 5px black;
`;

const Pe = styled.p`
color: red;
front-size: 10px;
font-weight:bold;
background-color:rgb(181, 181, 181);
margin: 10px 110px;
font-style: italic;
box-shadow: 5px 2px 2px rgb(99, 99, 99);
border-radius:25px;
`
const BnCheto = styled.button`
padding:5px;
border-radius:120px;
background-color:black;
color: white;
font-size:20px;
font-family:Verdana,Helvetica;
font-weight:bold;
display:inline;
margin-left:25px;
margin-bottom: -7px;
`;

export default function Form () {
const dispatch = useDispatch()


const countries = useSelector(state => state.countries).sort((a, b) => {
    if(a.name < b.name){
        return -1;
    }
    if(a.name > b.name){
        return 1;
    }
    return 0;
})

const [userData, setUserData] = useState({
    name: "",
    difficulty:"",
    duration:"",
    season:"",
    idPais:[],
})

const [errors, setErrors] = useState({
    name: "",
    difficulty:"",
    duration:"",
    season:"",
    idPais:[],
})

useEffect(() => {
    dispatch(getCountries())
}, [dispatch])

useEffect(() => {
    dispatch(getActivities())
}, [dispatch])


const handleInputChange = (event) => {
    setUserData({
        ...userData,
        [event.target.name]: event.target.value,
    })
    setErrors(validate({
        ...userData,
        [event.target.name]: event.target.value,
    }))

};

function handleSelectDifficulty(e) {
    setUserData({
        ...userData,
        difficulty: e.target.value
    })
} 

function handleSelectSeason(e) {
    setUserData({
        ...userData,
        season: e.target.value
    })
} 

function handleSelectCountries(id) {
    setUserData({
        ...userData,
        idPais: [...userData.idPais , id.target.value]
        
    })
} 

const handleSubmit = (evento)=>{
    evento.preventDefault()
    dispatch(postActivity(userData))
};

    return(
        <div>
    <FormDiv>
    <form onSubmit={handleSubmit}>
    <h2>Create your activity!</h2>
    
    <label>
           Name :
           <input type="text" value={userData.name} name="name" placeholder="Put a name to create the activity" onChange={handleInputChange}/>
           <Pe>{errors.name}</Pe>
        </label>
        <br/>
    <label>
            Difficulty :
            <select  name="difficulty"  onChange={handleSelectDifficulty}>
            <option value="" hidden> Select </option>
            <option value="1">1 - Very easy</option>
            <option value="2">2 - Easy </option>
            <option value="3">3 - Regular</option>
            <option value="4">4 - Difficult</option>
            <option value="5">5 - Veri difficult</option>
            </select>
            <Pe>{errors.difficulty}</Pe>
    </label>
    <br/>

    <label>
            Duration :
            <input type="number" value={userData.duration} name="duration" placeholder="Put the duration in hours" onChange={handleInputChange} min="1" max="24"/>
            <Pe>{errors.duration}</Pe>
    </label>
    <br/>

    <label>
            Season :
            <select name="season" onChange={handleSelectSeason}>
            <option value="" hidden> Select </option>
            <option value="Summer"> Summer </option>
            <option value="Autumn">Autumn</option>
            <option value="Winter">Winter</option>
            <option value="Spring">Spring</option>
            </select>
    </label>
    <br/>

    <label>
            Countries :
            <select name="countries" onChange={handleSelectCountries}>
            <option value="" hidden> Select </option>
            {countries.map(e => (
                <option value={[e.id]} name="countries" key={e.id} >{e.name}</option>
                ))}
             </select>
            <Pe>{errors.countries}</Pe>
     </label>
    <br/>

    <BnCheto type="submit">Submit</BnCheto>

    </form>
    </FormDiv>
        </div>
    )
};


// Este formulario debe ser controlado completamente con JavaScritp. No se pueden utilizar validaciones HTML, ni utilizar librerías especiales para esto. Debe contar con los siguientes campos:

// Nombre.
// Dificultad.
// Duración.
// Temporada.
// Posibilidad de seleccionar/agregar varios países en simultáneo.
// Botón para crear la actividad turística.