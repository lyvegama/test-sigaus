import React from 'react';

const Leyenda = () => {

    return (
        <div className='leyenda'>
            <p><span id='pendiente' class="material-symbols-outlined">
                notifications_active
            </span>Notificación pendiente</p>
            <p><span id='espera' class="material-symbols-outlined">
                update</span>Notificación en espera</p>
        </div>
    )
}

export default Leyenda;