import styled from "styled-components";
import { useState } from "react";
import validate from "./validate";
import { Link } from "react-router-dom";

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

export default function Form (data) {

const [userData, setUserData] = useState({
    name: "",
    difficulty:"",
    duration:"",
    season:"",
    countries:"",
})

const [errors, setErrors] = useState({
    name: "",
    difficulty:"",
    duration:"",
    season:"",
    countries:"",
})

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

const handleSubmit = (evento)=>{
    evento.preventDefault()
    data(userData)
};

    return(
        <div>
        <br/>
        <Link to="/home"><button>Back to home</button></Link>
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
            <select value={userData.difficulty} name="difficulty"  onChange={handleInputChange}>
            <option value=""> Select </option>
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
            <select value={userData.season} name="season" onChange={handleInputChange}>
            <option value=""> Select </option>
            <option value="Summer"> Summer </option>
            <option value="Autumn">Autumn</option>
            <option value="Winter">Winter</option>
            <option value="Spring">Spring</option>
            </select>
            <Pe>{errors.season}</Pe>
    </label>
    <br/>

    <label>
            Countries :
            <input type="text" value={userData.countries} name="countries" placeholder="Select the country or countries" onChange={handleInputChange}/>
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