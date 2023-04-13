import React from 'react';

const Paginacion = () => {


    return (
        <div className='paginacion'>
            <p>Mostrando 1 a 10 de 46 declaraciones</p>
            <span class="material-symbols-outlined">keyboard_double_arrow_left</span>
            <span class="material-symbols-outlined">chevron_left</span>
            <div className='botonesPaginacion'>
            <button id='active'>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            </div>
            <span class="material-symbols-outlined">chevron_right</span>
            <span class="material-symbols-outlined">keyboard_double_arrow_right</span>
        </div>
    )
}

export default Paginacion;