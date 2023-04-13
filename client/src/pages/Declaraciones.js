import React from 'react';
import Nav from '../components/Header/Nav';
import Encabezado from '../components/Header/Encabezado';
import Botones from '../components/Header/Botones';
import Configuracion from '../components/Info/Configuracion';
import Paginacion from '../components/Info/Paginacion';
import Leyenda from '../components/Info/Leyenda';
import Filtrado from '../components/Content/Filtrado';

const Declaraciones = () => {

  return (
    <div className='declaracionesHome'>
      <div className='headerWhite'>
        <Nav />
        <div className='encabezado container'>
          <Encabezado />
          <Configuracion />
        </div>
        <div className='container'>
          <Botones />
        </div>
      </div>
      <div className='datosTabla container'>
        <Filtrado />
        <div className='footer container'>
          <Paginacion />
          <Leyenda />
        </div>
      </div>
    </div>
  )
}

export default Declaraciones;