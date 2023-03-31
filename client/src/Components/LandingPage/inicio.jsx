import React from 'react'
import { Link } from 'react-router-dom'
import './inicio.css';


function Inicio() {
    return (
        <div >
            <h1> Individual Project </h1>
            <h1>Henry Countries</h1>

            <div>
                <h2> Developed by Mi </h2>
                <h2>I hope you enjoy it!</h2>
                <Link to="/home"><buttom>Start</buttom></Link>
            </div>

        </div>
    )
}

export default Inicio