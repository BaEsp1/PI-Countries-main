import { useState , useEffect } from "react";
import validate from "./validate";
import {useDispatch} from "react-redux";
import { getActivities , getCountries , postActivity} from "../../Components/Redux/actions";
import { useSelector } from "react-redux";
import "./Form.css"
import styled from "styled-components"


let ListCountries = styled.select`
size: 5;
width: 200px;
height: 150px;
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
    season:"",
    duration: "",
    idPais:[],
})

const [errors, setErrors] = useState({
    name: "",
    difficulty:"",
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
    var form = true;
    if (userData["name"].length < 2) {
      form = false;
    } else if (!userData["idPais"].length >= 1) {
      form = false;
    } else if (userData["duration"] === "") {
    form = false;
  }
    if (form) {
        dispatch(postActivity(userData))

        .then(() => alert("Activity added"));
    } else {
      return alert("Please fill all the fields before creating a new activity");
    }
};

    return(
        <div>
    <div className="FormDiv">
    <form onSubmit={handleSubmit} className="formus">
    <h2 className="create">Create your activity!</h2>
    
    <label>
           Name :
           <input type="text" value={userData.name} name="name" placeholder="Put a name to create the activity" onChange={handleInputChange}/>
           <p className="pee">{errors.name}</p>
        </label>

    <label>
            Difficulty : 
            <select  name="difficulty"  onChange={handleSelectDifficulty}>
            <option value=""> Select </option>
            <option value="1">1 - Very easy</option>
            <option value="2">2 - Easy </option>
            <option value="3">3 - Regular</option>
            <option value="4">4 - Difficult</option>
            <option value="5">5 - Very difficult</option>
            </select>
            <p className="pee">{errors.difficulty}</p>
    </label>


    <label>
            Duration : 
            <input type="number" value={userData.duration} name="duration" placeholder="Put the duration in hours" onChange={handleInputChange} min="1" max="24"/>
    </label>


    <label>
            Season : 
            <select name="season" onChange={handleSelectSeason}>
            <option value=""> Select </option>
            <option value="Summer"> Summer </option>
            <option value="Autumn">Autumn</option>
            <option value="Winter">Winter</option>
            <option value="Spring">Spring</option>
            </select>
            <p className="pee">{errors.season}</p>
    </label>


    <label className="label12">
            Countries :
            <br/>
            <ListCountries name="countries" onChange={handleSelectCountries} value={userData.idPais}  multiple>
            <option value=""> Select </option>
            {countries.map(e => (
                <option value={[e.id]} name="countries" key={e.id} >{e.name}</option>
                ))}
                
            </ListCountries>
            
            <p className="pee">{errors.idPais}</p>

     </label>



    <button type="submit" className="BnCheto">Submit</button>

    </form>
    </div>
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