import React from 'react';

const Paginacion = () => {


    return (
        <div className='paginacion'>
            <p>Mostrando 1 a 10 de 46 declaraciones</p>
            <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="48"><path d="M453 815 213 575l240-240 42 42-198 198 198 198-42 42Zm253 0L466 575l240-240 42 42-198 198 198 198-42 42Z" /></svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="48"><path d="M561 816 320 575l241-241 43 43-198 198 198 198-43 43Z" /></svg>
            <div className='botonesPaginacion'>
            <button id='active'>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="48"><path d="m375 816-43-43 198-198-198-198 43-43 241 241-241 241Z" /></svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="48"><path d="m255 815-42-42 198-198-198-198 42-42 240 240-240 240Zm253 0-42-42 198-198-198-198 42-42 240 240-240 240Z" /></svg>
        </div>
    )
}

export default Paginacion;