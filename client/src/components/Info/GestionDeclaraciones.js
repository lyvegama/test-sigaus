import React from 'react';

const GestionDeclaraciones = () => {

    return (
        <div className='gestiondeclaraciones'>
        <div className='gestionfecha'>
            <p>Gestión de declaraciones</p>
                <h2>ago 1, 2022 - ago 31, 2022</h2>
                </div>
            <div className='gestioncajas'>
                <div className='gestioncaja'>
                    <h3>NÚMERO ENTRADAS</h3>
                    <p>58/691.526,00 kg</p>
                </div>
                <div className='gestioncaja'>
                    <h3>NÚMERO SALIDAS</h3>
                    <p>0/0,00 kg</p>
                </div>
            </div>
                <a href="#"><svg id='flecha' xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="48"><path d="M322 606V290L202 410l-42-42 193-193 193 193-42 42-122-121v317h-60Zm285 369L414 781l42-41 120 120V544h60v317l122-121 42 42-193 193Z" /></svg>Exportar todas las declaraciones a Excel</a>
        </div>
    )
}

export default GestionDeclaraciones;