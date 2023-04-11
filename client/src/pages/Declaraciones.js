import React from 'react';
import Nav from '../components/Header/Nav';
import Encabezado from '../components/Info/Encabezado';
import Botones from '../components/Content/Botones';
import Configuracion from '../components/Info/Configuracion';
import Tabla from '../components/Content/Tabla';
import Paginacion from '../components/Info/Paginacion';
import Filtro from '../components/Info/Filtro';

const Declaraciones = () => {

  return (
    <div className='page home'>
      <Nav/>
      <Encabezado/>
      <Configuracion/>
      <Botones/>
      <Tabla/>
      <Paginacion/>
      <Filtro/>
    </div>
  )
}

export default Declaraciones;