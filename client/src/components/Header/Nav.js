import React from 'react'
import { NavLink } from "react-router-dom";

const Nav = () => {

    return (
        <nav className="nav">
            <ul className="ulNav">
                <li className="liNav"><NavLink to="/">INICIO</NavLink></li>
                <li className="liNav"><NavLink to="/declaraciones">DECLARACIONES</NavLink></li>
                <li className="liNav"><NavLink to="/instalaciones">INSTALACIONES</NavLink></li>
                <li className="liNav"><NavLink to="/incidencias">INCIDENCIAS/ALERTAS</NavLink></li>
                <li className="liNav"><NavLink to="/financiacion">FINANCIACIÓN</NavLink></li>
                <li className="liNav"><NavLink to="/informes">INFORMES</NavLink></li>
            </ul>
        </nav>

    )
}

export default Nav;