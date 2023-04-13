import React from 'react';
import { NavLink } from "react-router-dom";

const Botones = () => {

  return (
    <div className='botones'>
      <ul className="ulEncabezado">
                <li className="liEncabezado"><NavLink to="/"><span class="material-symbols-outlined">border_color</span>CREAR</NavLink></li>
                <li className="liEncabezado"><NavLink to="/"><span class="material-symbols-outlined">upload_file</span>SUBIR ARCHIVO</NavLink></li>
                <li className="liEncabezado"><NavLink to="/"><span class="material-symbols-outlined">history</span>HISTÓRICO DE ARCHIVOS</NavLink></li>
            </ul>
    </div>
  )
}

export default Botones;