import React from 'react'
import { Link } from 'react-router-dom'
import './inicio.css';


function Inicio() {
    return (
        <div name="DivLandingPage" key="DivLandingPage" className='DivLan'>

            <div className='titulo' name="TitleLanding" key="TitleLanding">
                <h1 className="tit"> Individual Project </h1>
                <h1 className="tit"> Henry Countries </h1>
            </div>

            <h2 className='h22'name="PLanding1" key="PLanding1"> Developed by Baesp </h2>
            <h2 className='h22' name="PLanding2" key="PLanding2">I hope you enjoy it!</h2>
            <Link to="/home" className='Link'><buttom name="btonEnter" key="btonEnter">Start</buttom></Link>
        

        </div>
    )
}

export default Inicio