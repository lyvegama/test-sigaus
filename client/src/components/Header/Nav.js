import React from 'react'
import { NavLink } from "react-router-dom";
import logo from '../../img/logo.png'

const Nav = () => {

    return (
        <div className="navDiv">
            <nav>
                <img src={logo} className='nav-img' />
                <div className="ulNavCenter">
                    <ul>
                        <li className="liNav"><NavLink to="/">INICIO</NavLink></li>
                        <li className="liNav"><NavLink to="/declaraciones">DECLARACIONES</NavLink></li>
                        <li className="liNav"><NavLink to="/instalaciones">INSTALACIONES</NavLink></li>
                        <li className="liNav"><NavLink to="/incidencias">INCIDENCIAS/ALERTAS</NavLink></li>
                        <li className="liNav"><NavLink to="/financiacion">FINANCIACIÓN</NavLink></li>
                        <li className="liNav"><NavLink to="/informes">INFORMES</NavLink></li>
                    </ul>
                </div>
                    <ul>
                        <li><svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 96 960 960" width="30"><path d="M124 489q0-81 34-153.5T255 212l41 45q-53 43-82.5 103.5T184 489h-60Zm653 0q0-68-28-128.5T668 257l41-45q62 52 95 124t33 153h-60ZM160 856v-60h84V490q0-84 49.5-149.5T424 258v-29q0-23 16.5-38t39.5-15q23 0 39.5 15t16.5 38v29q81 17 131 82.5T717 490v306h83v60H160Zm320-295Zm0 415q-32 0-56-23.5T400 896h160q0 33-23.5 56.5T480 976ZM304 796h353V490q0-74-51-126t-125-52q-74 0-125.5 52T304 490v306Z" /></svg>
                            INCIDENCIAS</li>
                        <li><svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 96 960 960" width="30"><path d="M141 836v-7 7-460 460Zm0 60q-24 0-42-18t-18-42V316q0-24 18-42t42-18h280l60 60h340q24 0 42 18t18 42v195q-14-11-28.5-19.5T821 536V376H141v460h327q4 16 9.143 30.915Q482.286 881.831 490 896H141Zm420 0v-19q0-42 42.5-65T721 789q75 0 117.5 23t42.5 65v19H561Zm160.08-174q-30.08 0-51.58-21.42-21.5-21.421-21.5-51.5 0-30.08 21.42-51.58 21.421-21.5 51.5-21.5 30.08 0 51.58 21.42 21.5 21.421 21.5 51.5 0 30.08-21.42 51.58-21.421 21.5-51.5 21.5Z" /></svg>PERFIL</li>
                        <li id="logout"><svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 96 960 960" width="30"><path d="M180 936q-24 0-42-18t-18-42V276q0-24 18-42t42-18h291v60H180v600h291v60H180Zm486-185-43-43 102-102H375v-60h348L621 444l43-43 176 176-174 174Z" /></svg></li>
                    </ul>
            </nav>
        </div>
    )
}

export default Nav;