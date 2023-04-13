import React from 'react';
import { NavLink } from "react-router-dom";
import Nav from '../components/Header/Nav';


const Declaraciones = () => {

  return (
    <div className='declaracionesHome'>
      <div className='headerWhite'>
        <Nav />
      </div>
      <div className='container prueba'>
      <NavLink to="/declaraciones">Pulsa aquí, o en el navbar en la palabra "Declaraciones" para acceder a la página de la prueba. Muchas gracias.</NavLink>
      </div>
    </div>
  )
}

export default Declaraciones;