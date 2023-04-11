import React from 'react'
import { NavLink } from "react-router-dom";

const Nav = () => {

    return (
        <nav className="nav">
            <ul className="ulNav">
                <li className="liNav"><NavLink to="/">hola1</NavLink></li>
                <li className="liNav">hola</li>
            </ul>
        </nav>

    )
}

export default Nav;