import React from 'react';

const Leyenda = () => {

    return (
        <div className='page home'>
            <p><svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="48"><path d="M124 489q0-81 34-153.5T255 212l41 45q-53 43-82.5 103.5T184 489h-60Zm653 0q0-68-28-128.5T668 257l41-45q62 52 95 124t33 153h-60ZM160 856v-60h84V490q0-84 49.5-149.5T424 258v-29q0-23 16.5-38t39.5-15q23 0 39.5 15t16.5 38v29q81 17 131 82.5T717 490v306h83v60H160Zm320-295Zm0 415q-32 0-56-23.5T400 896h160q0 33-23.5 56.5T480 976ZM304 796h353V490q0-74-51-126t-125-52q-74 0-125.5 52T304 490v306Z"/></svg>Notificación pendiente</p>
            <p><svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="48"><path d="M477 936q-149 0-253-105.5T120 575h60q0 125 86 213t211 88q127 0 215-89t88-216q0-124-89-209.5T477 276q-68 0-127.5 31T246 389h105v60H142V241h60v106q52-61 123.5-96T477 216q75 0 141 28t115.5 76.5Q783 369 811.5 434T840 574q0 75-28.5 141t-78 115Q684 879 618 907.5T477 936Zm128-197L451 587V373h60v189l137 134-43 43Z"/></svg>
Notificación en espera</p>
        </div>
    )
}

export default Leyenda;