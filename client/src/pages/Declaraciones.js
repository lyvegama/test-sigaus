import React from 'react';
import Nav from '../components/Header/Nav';
import Encabezado from '../components/Info/Encabezado';
import Botones from '../components/Content/Botones';
import Configuracion from '../components/Info/Configuracion';
import Tabla from '../components/Content/Tabla';
import Paginacion from '../components/Info/Paginacion';
import Filtro from '../components/Info/Filtro';
import Leyenda from '../components/Info/Leyenda';

const Declaraciones = () => {

  return (
    <div className='page home'>
      <Nav/>
      <Encabezado/>
      <Configuracion/>
      <Botones/>
      <Filtro/>
      <Tabla/>
      <Paginacion/>
      <Leyenda/>
    </div>
  )
}

export default Declaraciones;