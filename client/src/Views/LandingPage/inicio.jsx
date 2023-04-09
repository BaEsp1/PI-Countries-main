import React from 'react'
import { Link } from 'react-router-dom'
import './inicio.css';


function Inicio() {
    return (
        <div >

        <div className='titulo'>
            <h1> Individual Project </h1>
            <h1> Henry Countries </h1>
        </div>
                <h2 className='h22'> Developed by Bárbara Espinola </h2>
                <h2 className='h22'>I hope you enjoy it!</h2>
                <Link to="/home" className='Link'><buttom>Start</buttom></Link>
        

        </div>
    )
}

export default Inicio