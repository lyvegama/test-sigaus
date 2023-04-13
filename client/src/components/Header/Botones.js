import React from 'react';
import { NavLink } from "react-router-dom";

const Botones = () => {

  return (
    <div className='botones'>
      <ul className="ulEncabezado">
                <li className="liEncabezado"><NavLink to="/"><svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="48"><path d="M80 1056V935h800v121H80Zm82-227V696l373-373 133 133-373 373H162Zm60-60h45l315-315-45-45-315 315v45Zm490-357L579 279l84-84q11-13 25-13.5t28 13.5l78 78q13 13 13 27.5T796 328l-84 84ZM222 769Z"/></svg>CREAR</NavLink></li>
                <li className="liEncabezado"><NavLink to="/"><svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="48"><path d="M452 854h60V653l82 82 42-42-156-152-154 154 42 42 84-84v201ZM220 976q-24 0-42-18t-18-42V236q0-24 18-42t42-18h361l219 219v521q0 24-18 42t-42 18H220Zm331-554V236H220v680h520V422H551ZM220 236v186-186 680-680Z"/></svg>SUBIR ARCHIVO</NavLink></li>
                <li className="liEncabezado"><NavLink to="/"><svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="48"><path d="M477 936q-149 0-253-105.5T120 575h60q0 125 86 213t211 88q127 0 215-89t88-216q0-124-89-209.5T477 276q-68 0-127.5 31T246 389h105v60H142V241h60v106q52-61 123.5-96T477 216q75 0 141 28t115.5 76.5Q783 369 811.5 434T840 574q0 75-28.5 141t-78 115Q684 879 618 907.5T477 936Zm128-197L451 587V373h60v189l137 134-43 43Z"/></svg>HISTÓRICO DE ARCHIVOS</NavLink></li>
            </ul>
    </div>
  )
}

export default Botones;