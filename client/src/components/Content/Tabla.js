import React from 'react';

const Tabla = () => {

    const tabla = [
        {
            "referencia": "DCS452586685524855",
            "tipo": "B",
            "cantidad": "25.140 Kkg",
            "origen": "BARCELONA",
            "fecha": "02/08/2022",
            "oleoso": "20",
            "incidencia": "0",
            "acciones": ""
        },
        {
            "referencia": "DCS452586685524855",
            "tipo": "B",
            "cantidad": "25.140 Kkg",
            "origen": "BARCELONA",
            "fecha": "02/08/2022",
            "oleoso": "20",
            "incidencia": "0",
            "acciones": ""
        },
        {
            "referencia": "DCS452586685524855",
            "tipo": "B",
            "cantidad": "25.140 Kkg",
            "origen": "BARCELONA",
            "fecha": "02/08/2022",
            "oleoso": "20",
            "incidencia": "0",
            "acciones": ""
        },
        {
            "referencia": "DCS452586685524855",
            "tipo": "B",
            "cantidad": "25.140 Kkg",
            "origen": "BARCELONA",
            "fecha": "02/08/2022",
            "oleoso": "20",
            "incidencia": "0",
            "acciones": ""
        },
        {
            "referencia": "DCS452586685524855",
            "tipo": "B",
            "cantidad": "25.140 Kkg",
            "origen": "BARCELONA",
            "fecha": "02/08/2022",
            "oleoso": "20",
            "incidencia": "0",
            "acciones": ""
        },
        {
            "referencia": "DCS452586685524855",
            "tipo": "B",
            "cantidad": "25.140 Kkg",
            "origen": "BARCELONA",
            "fecha": "02/08/2022",
            "oleoso": "20",
            "incidencia": "0",
            "acciones": ""
        },
        {
            "referencia": "DCS452586685524855",
            "tipo": "B",
            "cantidad": "25.140 Kkg",
            "origen": "BARCELONA",
            "fecha": "02/08/2022",
            "oleoso": "20",
            "incidencia": "0",
            "acciones": ""
        },
        {
            "referencia": "DCS452586685524855",
            "tipo": "B",
            "cantidad": "25.140 Kkg",
            "origen": "BARCELONA",
            "fecha": "02/08/2022",
            "oleoso": "20",
            "incidencia": "0",
            "acciones": ""
        },
        {
            "referencia": "DCS452586685524855",
            "tipo": "B",
            "cantidad": "25.140 Kkg",
            "origen": "BARCELONA",
            "fecha": "02/08/2022",
            "oleoso": "20",
            "incidencia": "0",
            "acciones": ""
        },
        {
            "referencia": "DCS452586685524855",
            "tipo": "B",
            "cantidad": "25.140 Kkg",
            "origen": "BARCELONA",
            "fecha": "02/08/2022",
            "oleoso": "20",
            "incidencia": "0",
            "acciones": ""
        }
    ]
    return (
        <div>
            <ul className='ulLista'>
                <li>Nº REFERENCIA<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M322 606V290L202 410l-42-42 193-193 193 193-42 42-122-121v317h-60Zm285 369L414 781l42-41 120 120V544h60v317l122-121 42 42-193 193Z" /></svg>
                </li>
                <li>TIPO<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M322 606V290L202 410l-42-42 193-193 193 193-42 42-122-121v317h-60Zm285 369L414 781l42-41 120 120V544h60v317l122-121 42 42-193 193Z" /></svg>
                </li>
                <li>CANTIDAD<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M322 606V290L202 410l-42-42 193-193 193 193-42 42-122-121v317h-60Zm285 369L414 781l42-41 120 120V544h60v317l122-121 42 42-193 193Z" /></svg>
                </li>
                <li>ORIGEN (PROVINCIA)<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M322 606V290L202 410l-42-42 193-193 193 193-42 42-122-121v317h-60Zm285 369L414 781l42-41 120 120V544h60v317l122-121 42 42-193 193Z" /></svg>
                </li>
                <li>FECHA<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M322 606V290L202 410l-42-42 193-193 193 193-42 42-122-121v317h-60Zm285 369L414 781l42-41 120 120V544h60v317l122-121 42 42-193 193Z" /></svg>
                </li>
                <li>% OLEOSO<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M322 606V290L202 410l-42-42 193-193 193 193-42 42-122-121v317h-60Zm285 369L414 781l42-41 120 120V544h60v317l122-121 42 42-193 193Z" /></svg>
                </li>
                <li>INCIDENCIA</li>
                <li>ACCIONES</li>
            </ul>
            {tabla.length > 0 ? tabla.map((dato, i) => (
                <div key={i} className='divLydia'>
                    <ul className='ulLydia'>
                        <li>{dato.referencia}</li>
                        <li>{dato.tipo}</li>
                        <li>{dato.cantidad}</li>
                        <li>{dato.origen}</li>
                        <li>{dato.fecha}</li>
                        <li>{dato.oleoso}</li>
                        <li>{dato.incidencia}</li>
                        <li><svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M452 854h60V653l82 82 42-42-156-152-154 154 42 42 84-84v201ZM220 976q-24 0-42-18t-18-42V236q0-24 18-42t42-18h361l219 219v521q0 24-18 42t-42 18H220Zm331-554V236H220v680h520V422H551ZM220 236v186-186 680-680Z"/></svg>Ver PDF</li>
                        <li><svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M479.858 896Q460 896 446 881.858q-14-14.141-14-34Q432 828 446.142 814q14.141-14 34-14Q500 800 514 814.142q14 14.141 14 34Q528 868 513.858 882q-14.141 14-34 14Zm0-272Q460 624 446 609.858q-14-14.141-14-34Q432 556 446.142 542q14.141-14 34-14Q500 528 514 542.142q14 14.141 14 34Q528 596 513.858 610q-14.141 14-34 14Zm0-272Q460 352 446 337.858q-14-14.141-14-34Q432 284 446.142 270q14.141-14 34-14Q500 256 514 270.142q14 14.141 14 34Q528 324 513.858 338q-14.141 14-34 14Z"/></svg></li>
                    </ul>
                </div>

            )) : ""}
        </div>
    )
}
export default Tabla;