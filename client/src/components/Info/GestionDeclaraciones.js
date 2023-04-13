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
                    <p id='pGrande'>58/</p>
                    <p id='pMini'>691.526,00 kg</p>
                </div>
                <div className='gestioncaja'>
                    <h3>NÚMERO SALIDAS</h3>
                    <p id='pGrande'>0/</p>
                    <p id='pMini'>0,00 kg</p>
                </div>
            </div>
            <div className='gestionExportar'>
                <a href="#"><span class="material-symbols-outlined">swap_vert</span>Exportar todas las declaraciones a Excel</a>
            </div>
        </div>
    )
}

export default GestionDeclaraciones;