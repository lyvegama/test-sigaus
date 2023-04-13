import React, { useEffect, useState } from 'react'
import Buscador from '../Info/Buscador';
import GestionDeclaraciones from '../Info/GestionDeclaraciones';
import cv from '../../pdf_files/Curriculum-lydia-vega.FullStack.pdf';
import { tabla } from '../../data/tabla';

const Filtrado = () => {

    const [answers, setAnswers] = useState("");
    const [palabra, setPalabra] = useState("")
    const [estado, setEstado] = useState("")

    const [checkbox, setCheckbox] = useState(false);

    function visuatdzarCheckbox(event) {
        setCheckbox(event.target.checkbox);
    }

    const [mes, setMes] = useState({
        "mes": "enero",
        "referencia": "DCS452586685524855",
        "tipo": "B",
        "cantidad": "25.140 Kkg",
        "origen": "BARCELONA",
        "fecha": "02/08/2022",
        "oleoso": "20",
        "incidencia": ["0", "0"],
        "acciones": ""
    })

    const months = [
        { text: 'ENE', value: '01/01/2023 - 31/01/2023', sinta: 'enero' },
        { text: 'FEB', value: '01/02/2023 - 28/02/2023', sinta: 'febrero' },
        { text: 'MAR', value: '01/03/2023 - 31/03/2023', sinta: 'marzo' },
        { text: 'ABR', value: '01/04/2023 - 30/04/2023', sinta: 'abril' },
        { text: 'MAY', value: '01/05/2023 - 31/05/2023', sinta: 'mayo' },
        { text: 'JUN', value: '01/06/2023 - 30/06/2023', sinta: 'junio' },
        { text: 'JUL', value: '01/07/2023 - 31/07/2023', sinta: 'julio' },
        { text: 'AGO', value: '01/08/2023 - 31/08/2023', sinta: 'agosto' },
        { text: 'SEP', value: '01/09/2023 - 30/09/2023', sinta: 'septiembre' },
        { text: 'OCT', value: '01/10/2023 - 31/10/2023', sinta: 'octubre' },
        { text: 'NOV', value: '01/11/2023 - 30/11/2023', sinta: 'noviembre' },
        { text: 'DIC', value: '01/12/2023 - 31/12/2023', sinta: 'diciembre' },
    ]

    const selectMonth = async ({ target }) => {

        const currentMonth = await target.value;
        console.log(currentMonth);
        setAnswers(currentMonth)

        const miPropiedad = await target.dataset.sinta
        setPalabra(miPropiedad)
        console.log(miPropiedad)
        mesRenderizado()
        return miPropiedad;
    }

    const mesRenderizado = () => {
        const everyMonth = tabla.filter(element => element.mes === palabra);
        console.log(everyMonth)
        setMes(everyMonth)
    }

    return (
        <>
            <div className='filtrado'>
                <div className='filtro'>
                    <div>
                        <h3>Filtrar</h3>
                    </div>
                    <div className="border">
                        <input className='holderMeses' type="text" defaultValue={answers} />
                    </div>
                    <div className="meses">
                        {months ? months.map((month) => (
                            <div key={month.text}>
                                <button onClick={selectMonth} data-sinta={month.sinta} value={month.value}>{month.text}</button>
                            </div>
                        )) : ""}
                    </div>
                    <Buscador />
                </div>
            </div>
            <GestionDeclaraciones />
            <table cellPadding="20" className='tabla'>
                <thead>
                    <tr className='tablaCabecera'>
                        <th>
                            <input className='checkbox'
                                type="checkbox"
                                checkbox={checkbox}
                                onChange={visuatdzarCheckbox}
                            />
                        </th>
                        <th>
                            Nº REFERENCIA<span class="material-symbols-outlined">swap_vert</span>
                        </th>
                        <th>TIPO<span class="material-symbols-outlined">swap_vert</span>
                        </th>
                        <th>CANTIDAD<span class="material-symbols-outlined">swap_vert</span>
                        </th>
                        <th>ORIGEN (PROVINCIA)<span class="material-symbols-outlined">swap_vert</span>
                        </th>
                        <th>FECHA<span class="material-symbols-outlined">swap_vert</span>
                        </th>
                        <th>% OLEOSO<span class="material-symbols-outlined">swap_vert</span>
                        </th>
                        <th>INCIDENCIA</th>
                        <th>&nbsp;</th>
                        <th>ACCIONES</th>
                    </tr>
                </thead>
                <tbody>
                    {mes.length > 1 ? mes.map((everyMonth) => (
                        <tr className='trTabla' key={everyMonth.referencia}>
                            <td><input className="checkbox"
                                type="checkbox"
                                checkbox={checkbox}
                                onChange={visuatdzarCheckbox}
                            /></td>
                            <td>{everyMonth.referencia}</td>
                            <td>{everyMonth.tipo}</td>
                            <td>{everyMonth.cantidad}</td>
                            <td>{everyMonth.origen}</td>
                            <td>{everyMonth.fecha}</td>
                            <td>{everyMonth.oleoso}</td>
                            <td><span class="material-symbols-outlined notificacionesTabla">notifications_active</span>{everyMonth.incidencia[0]}
                                <span class="material-symbols-outlined notificacionesTabla">update</span>{everyMonth.incidencia[1]}</td>
                            <td><span class="material-symbols-outlined">draft</span><a href={cv} target="_blank">Ver PDF<i className="pdf"></i>
                            </a></td>
                            <td><span class="material-symbols-outlined">more_vert</span></td>
                        </tr>
                    )) : tabla.slice(0, 10).map((month) => (
                        <tr className='trTabla' key={month.referencia}>
                            <td><input className="checkbox"
                                type="checkbox"
                                checkbox={checkbox}
                                onChange={visuatdzarCheckbox}
                            /></td>
                            <td>{month.referencia}</td>
                            <td>{month.tipo}</td>
                            <td>{month.cantidad}</td>
                            <td>{month.origen}</td>
                            <td>{month.fecha}</td>
                            <td>{month.oleoso}</td>
                            <td><span class="material-symbols-outlined notificacionesTabla">notifications_active</span>{month.incidencia[0]}
                                <span class="material-symbols-outlined notificacionesTabla">update</span>{month.incidencia[1]}</td>
                            <td><span class="material-symbols-outlined">draft</span><a href={cv} target="_blank">Ver PDF<i className="pdf"></i>
                            </a></td>
                            <td><span class="material-symbols-outlined">more_vert</span></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
export default Filtrado;