import React from 'react';
import Nav from '../components/Header/Nav';
import Encabezado from '../components/Header/Encabezado';
import Botones from '../components/Header/Botones';
import Configuracion from '../components/Info/Configuracion';
import Paginacion from '../components/Info/Paginacion';
import Leyenda from '../components/Info/Leyenda';
import Filtrado from '../components/Info/Filtrado';

const Declaraciones = () => {

  return (
    <div className='declaracionesHome'>
      <Nav />
      <div className='headerDeclaraciones'>
      <Encabezado />
      <Configuracion />
      </div>
      <Botones />
      <div className='colorBody'>
      <div className='cuerpoDeclaraciones'>  
        <Filtrado />
        <div className='footerDeclaraciones'>
        <Paginacion />
        <Leyenda />
        </div>
      </div>
      </div>
    </div>
  )
}

export default Declaraciones;