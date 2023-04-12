import React from 'react';
import Nav from '../components/Header/Nav';
import Encabezado from '../components/Header/Encabezado';
import Botones from '../components/Header/Botones';
import Configuracion from '../components/Info/Configuracion';
import Tabla from '../components/Content/Tabla';
import Paginacion from '../components/Info/Paginacion';
import Filtro from '../components/Info/Filtro';
import Leyenda from '../components/Info/Leyenda';
import GestionDeclaraciones from '../components/Info/GestionDeclaraciones';


const Declaraciones = () => {

  return (
    <div className='declaracionesHome'>
      <Nav />
      <div className='headerDeclaraciones'>
      <Encabezado />
      <Configuracion />
      </div>
      <Botones />
      <div className='cuerpoDeclaraciones'>
        <Filtro />
        <GestionDeclaraciones />
        <Tabla />
        <div className='footerDeclaraciones'>
        <Paginacion />
        <Leyenda />
        </div>
      </div>
    </div>
  )
}

export default Declaraciones;