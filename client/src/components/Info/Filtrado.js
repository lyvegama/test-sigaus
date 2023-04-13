import React, { useEffect, useState } from 'react'
import Buscador from './Buscador';
import GestionDeclaraciones from './GestionDeclaraciones';
import cv from '../../pdf_files/Curriculum-lydia-vega.FullStack.pdf';


const Filtrado = () => {

    const [answers, setAnswers] = useState("");
    const [palabra, setPalabra] = useState("")
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
        "incidencia": "0",
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


    const tabla = [
        {
            "mes": "enero",
            "referencia": "DCS452586685524855",
            "tipo": "B",
            "cantidad": "25.140 kg",
            "origen": "BARCELONA",
            "fecha": "02/08/2022",
            "oleoso": "20",
            "incidencia": [0, 0],
            "acciones": ""
        },
        {
            "mes": "enero",
            "referencia": "DCS452586685524365",
            "tipo": "B",
            "cantidad": "25.140 kg",
            "origen": "VALENCIA",
            "fecha": "02/08/2022",
            "oleoso": "92,87",
            "incidencia": [0, 0],
            "acciones": ""
        },
        {
            "mes": "enero",
            "referencia": "DCS452586685524885",
            "tipo": "B",
            "cantidad": "25.140 kg",
            "origen": "ALAVA",
            "fecha": "02/08/2022",
            "oleoso": "92,69",
            "incidencia": [0, 0],
            "acciones": ""
        },
        {
            "mes": "enero",
            "referencia": "DCS452586685524836",
            "tipo": "B",
            "cantidad": "25.140 kg",
            "origen": "ALBACETE",
            "fecha": "02/08/2022",
            "oleoso": "94,45",
            "incidencia": [0, 0],
            "acciones": ""
        },
        {
            "mes": "enero",
            "referencia": "DCS452586685524878",
            "tipo": "B",
            "cantidad": "25.140 kg",
            "origen": "CADIZ",
            "fecha": "02/08/2022",
            "oleoso": "96,45",
            "incidencia": [0, 0],
            "acciones": ""
        },
        {
            "mes": "enero",
            "referencia": "DCS452586685524845",
            "tipo": "B",
            "cantidad": "25.140 kg",
            "origen": "SEVILLA",
            "fecha": "02/08/2022",
            "oleoso": "93,2",
            "incidencia": [0, 0],
            "acciones": ""
        },
        {
            "mes": "febrero",
            "referencia": "DCS452586685524836",
            "tipo": "B",
            "cantidad": "25.140 kg",
            "origen": "GRANADA",
            "fecha": "02/08/2022",
            "oleoso": "92,9",
            "incidencia": [0, 0],
            "acciones": ""
        },
        {
            "mes": "febrero",
            "referencia": "DCS452586685524822",
            "tipo": "B",
            "cantidad": "25.140 kg",
            "origen": "MADRID",
            "fecha": "02/08/2022",
            "oleoso": "96",
            "incidencia": [0, 0],
            "acciones": ""
        },
        {
            "mes": "febrero",
            "referencia": "DCS452586685524815",
            "tipo": "B",
            "cantidad": "25.140 kg",
            "origen": "GRANADA",
            "fecha": "02/08/2022",
            "oleoso": "92,9",
            "incidencia": [0, 0],
            "acciones": ""
        },
        {
            "mes": "febrero",
            "referencia": "DCS452586685524877",
            "tipo": "B",
            "cantidad": "25.140 kg",
            "origen": "VALENCIA",
            "fecha": "02/08/2022",
            "oleoso": "92,3",
            "incidencia": [0, 0],
            "acciones": ""
        },
        {
            "mes": "febrero",
            "referencia": "DCS452586685524845",
            "tipo": "B",
            "cantidad": "25.140 kg",
            "origen": "SEVILLA",
            "fecha": "02/08/2022",
            "oleoso": "93,2",
            "incidencia": [0, 0],
            "acciones": ""
        },
        {
            "mes": "marzo",
            "referencia": "DCS452586685524836",
            "tipo": "B",
            "cantidad": "25.140 kg",
            "origen": "GRANADA",
            "fecha": "02/08/2022",
            "oleoso": "92,9",
            "incidencia": [0, 0],
            "acciones": ""
        },
        {
            "mes": "marzo",
            "referencia": "DCS452586685524822",
            "tipo": "B",
            "cantidad": "25.140 kg",
            "origen": "MADRID",
            "fecha": "02/08/2022",
            "oleoso": "96",
            "incidencia": [0, 0],
            "acciones": ""
        },
        {
            "mes": "marzo",
            "referencia": "DCS452586685524815",
            "tipo": "B",
            "cantidad": "25.140 kg",
            "origen": "GRANADA",
            "fecha": "02/08/2022",
            "oleoso": "92,9",
            "incidencia": [0, 0],
            "acciones": ""
        },
        {
            "mes": "marzo",
            "referencia": "DCS452586685524877",
            "tipo": "B",
            "cantidad": "25.140 kg",
            "origen": "VALENCIA",
            "fecha": "02/08/2022",
            "oleoso": "92,3",
            "incidencia": [0, 0],
            "acciones": ""
        },
        {
            "mes": "marzo",
            "referencia": "DCS452586685524878",
            "tipo": "B",
            "cantidad": "25.140 kg",
            "origen": "CADIZ",
            "fecha": "02/08/2022",
            "oleoso": "96,45",
            "incidencia": [0, 0],
            "acciones": ""
        },
        {
            "mes": "abril",
            "referencia": "DCS452586685524845",
            "tipo": "B",
            "cantidad": "25.140 kg",
            "origen": "SEVILLA",
            "fecha": "02/08/2022",
            "oleoso": "93,2",
            "incidencia": [0, 0],
            "acciones": ""
        },
        {
            "mes": "abril",
            "referencia": "DCS452586685524836",
            "tipo": "B",
            "cantidad": "25.140 kg",
            "origen": "GRANADA",
            "fecha": "02/08/2022",
            "oleoso": "92,9",
            "incidencia": [0, 0],
            "acciones": ""
        },
        {
            "mes": "abril",
            "referencia": "DCS452586685524822",
            "tipo": "B",
            "cantidad": "25.140 kg",
            "origen": "MADRID",
            "fecha": "02/08/2022",
            "oleoso": "96",
            "incidencia": [0, 0],
            "acciones": ""
        },
        {
            "mes": "abril",
            "referencia": "DCS452586685524815",
            "tipo": "B",
            "cantidad": "25.140 kg",
            "origen": "GRANADA",
            "fecha": "02/08/2022",
            "oleoso": "92,9",
            "incidencia": [0, 0],
            "acciones": ""
        },
        {
            "mes": "abril",
            "referencia": "DCS452586685524877",
            "tipo": "B",
            "cantidad": "25.140 kg",
            "origen": "VALENCIA",
            "fecha": "02/08/2022",
            "oleoso": "92,3",
            "incidencia": [0, 0],
            "acciones": ""
        },
        {
            "mes": "mayo",
            "referencia": "DCS452586685524845",
            "tipo": "B",
            "cantidad": "25.140 kg",
            "origen": "SEVILLA",
            "fecha": "02/08/2022",
            "oleoso": "93,2",
            "incidencia": [0, 0],
            "acciones": ""
        },
        {
            "mes": "mayo",
            "referencia": "DCS452586685524836",
            "tipo": "B",
            "cantidad": "25.140 kg",
            "origen": "GRANADA",
            "fecha": "02/08/2022",
            "oleoso": "92,9",
            "incidencia": [0, 0],
            "acciones": ""
        },
        {
            "mes": "mayo",
            "referencia": "DCS452586685524822",
            "tipo": "B",
            "cantidad": "25.140 kg",
            "origen": "MADRID",
            "fecha": "02/08/2022",
            "oleoso": "96",
            "incidencia": [0, 0],
            "acciones": ""
        },
        {
            "mes": "mayo",
            "referencia": "DCS452586685524815",
            "tipo": "B",
            "cantidad": "25.140 kg",
            "origen": "GRANADA",
            "fecha": "02/08/2022",
            "oleoso": "92,9",
            "incidencia": [0, 0],
            "acciones": ""
        },
        {
            "mes": "junio",
            "referencia": "DCS452586685524877",
            "tipo": "B",
            "cantidad": "25.140 kg",
            "origen": "VALENCIA",
            "fecha": "02/08/2022",
            "oleoso": "92,3",
            "incidencia": [0, 0],
            "acciones": ""
        },
        {
            "mes": "junio",
            "referencia": "DCS452586685524836",
            "tipo": "B",
            "cantidad": "25.140 kg",
            "origen": "GRANADA",
            "fecha": "02/08/2022",
            "oleoso": "92,9",
            "incidencia": [0, 0],
            "acciones": ""
        },
        {
            "mes": "junio",
            "referencia": "DCS452586685524822",
            "tipo": "B",
            "cantidad": "25.140 kg",
            "origen": "MADRID",
            "fecha": "02/08/2022",
            "oleoso": "96",
            "incidencia": [0, 0],
            "acciones": ""
        },
        {
            "mes": "julio",
            "referencia": "DCS452586685524815",
            "tipo": "B",
            "cantidad": "25.140 kg",
            "origen": "GRANADA",
            "fecha": "02/08/2022",
            "oleoso": "92,9",
            "incidencia": [0, 0],
            "acciones": ""
        },
        {
            "mes": "julio",
            "referencia": "DCS452586685524877",
            "tipo": "B",
            "cantidad": "25.140 kg",
            "origen": "VALENCIA",
            "fecha": "02/08/2022",
            "oleoso": "92,3",
            "incidencia": [0, 0],
            "acciones": ""
        },
        {
            "mes": "julio",
            "referencia": "DCS452586685524878",
            "tipo": "B",
            "cantidad": "25.140 kg",
            "origen": "CADIZ",
            "fecha": "02/08/2022",
            "oleoso": "96,45",
            "incidencia": [0, 0],
            "acciones": ""
        },
        {
            "mes": "julio",
            "referencia": "DCS452586685524845",
            "tipo": "B",
            "cantidad": "25.140 kg",
            "origen": "SEVILLA",
            "fecha": "02/08/2022",
            "oleoso": "93,2",
            "incidencia": [0, 0],
            "acciones": ""
        },
        {
            "mes": "agosto",
            "referencia": "DCS452586685524836",
            "tipo": "B",
            "cantidad": "25.140 kg",
            "origen": "GRANADA",
            "fecha": "02/08/2022",
            "oleoso": "92,9",
            "incidencia": [0, 0],
            "acciones": ""
        },
        {
            "mes": "agosto",
            "referencia": "DCS452586685524822",
            "tipo": "B",
            "cantidad": "25.140 kg",
            "origen": "MADRID",
            "fecha": "02/08/2022",
            "oleoso": "96",
            "incidencia": [0, 0],
            "acciones": ""
        },
        {
            "mes": "agosto",
            "referencia": "DCS452586685524815",
            "tipo": "B",
            "cantidad": "25.140 kg",
            "origen": "GRANADA",
            "fecha": "02/08/2022",
            "oleoso": "92,9",
            "incidencia": [0, 0],
            "acciones": ""
        },
        {
            "mes": "agosto",
            "referencia": "DCS452586685524877",
            "tipo": "B",
            "cantidad": "25.140 kg",
            "origen": "VALENCIA",
            "fecha": "02/08/2022",
            "oleoso": "92,3",
            "incidencia": [0, 0],
            "acciones": ""
        },
        {
            "mes": "septiembre",
            "referencia": "DCS452586685524845",
            "tipo": "B",
            "cantidad": "25.140 kg",
            "origen": "SEVILLA",
            "fecha": "02/08/2022",
            "oleoso": "93,2",
            "incidencia": [0, 0],
            "acciones": ""
        },
        {
            "mes": "septiembre",
            "referencia": "DCS452586685524836",
            "tipo": "B",
            "cantidad": "25.140 kg",
            "origen": "GRANADA",
            "fecha": "02/08/2022",
            "oleoso": "92,9",
            "incidencia": [0, 0],
            "acciones": ""
        },
        {
            "mes": "septiembre",
            "referencia": "DCS452586685524822",
            "tipo": "B",
            "cantidad": "25.140 kg",
            "origen": "MADRID",
            "fecha": "02/08/2022",
            "oleoso": "96",
            "incidencia": [0, 0],
            "acciones": ""
        },
        {
            "mes": "septiembre",
            "referencia": "DCS452586685524815",
            "tipo": "B",
            "cantidad": "25.140 kg",
            "origen": "GRANADA",
            "fecha": "02/08/2022",
            "oleoso": "92,9",
            "incidencia": [0, 0],
            "acciones": ""
        },
        {
            "mes": "octubre",
            "referencia": "DCS452586685524877",
            "tipo": "B",
            "cantidad": "25.140 kg",
            "origen": "VALENCIA",
            "fecha": "02/08/2022",
            "oleoso": "92,3",
            "incidencia": [0, 0],
            "acciones": ""
        },
        {
            "mes": "octubre",
            "referencia": "DCS452586685524836",
            "tipo": "B",
            "cantidad": "25.140 kg",
            "origen": "GRANADA",
            "fecha": "02/08/2022",
            "oleoso": "92,9",
            "incidencia": [0, 0],
            "acciones": ""
        },
        {
            "mes": "octubre",
            "referencia": "DCS452586685524822",
            "tipo": "B",
            "cantidad": "25.140 kg",
            "origen": "MADRID",
            "fecha": "02/08/2022",
            "oleoso": "96",
            "incidencia": [0, 0],
            "acciones": ""
        },
        {
            "mes": "noviembre",
            "referencia": "DCS452586685524815",
            "tipo": "B",
            "cantidad": "25.140 kg",
            "origen": "GRANADA",
            "fecha": "02/08/2022",
            "oleoso": "92,9",
            "incidencia": [0, 0],
            "acciones": ""
        },
        {
            "mes": "noviembre",
            "referencia": "DCS452586685524877",
            "tipo": "B",
            "cantidad": "25.140 kg",
            "origen": "VALENCIA",
            "fecha": "02/08/2022",
            "oleoso": "92,3",
            "incidencia": [0, 0],
            "acciones": ""
        },
        {
            "mes": "noviembre",
            "referencia": "DCS452586685524836",
            "tipo": "B",
            "cantidad": "25.140 kg",
            "origen": "GRANADA",
            "fecha": "02/08/2022",
            "oleoso": "92,9",
            "incidencia": [0, 0],
            "acciones": ""
        },
        {
            "mes": "noviembre",
            "referencia": "DCS452586685524822",
            "tipo": "B",
            "cantidad": "25.140 kg",
            "origen": "MADRID",
            "fecha": "02/08/2022",
            "oleoso": "96",
            "incidencia": [0, 0],
            "acciones": ""
        },
        {
            "mes": "noviembre",
            "referencia": "DCS452586685524815",
            "tipo": "B",
            "cantidad": "25.140 kg",
            "origen": "GRANADA",
            "fecha": "02/08/2022",
            "oleoso": "92,9",
            "incidencia": [0, 0],
            "acciones": ""
        },
        {
            "mes": "noviembre",
            "referencia": "DCS452586685524877",
            "tipo": "B",
            "cantidad": "25.140 kg",
            "origen": "VALENCIA",
            "fecha": "02/08/2022",
            "oleoso": "92,3",
            "incidencia": [0, 0],
            "acciones": ""
        },
        {
            "mes": "noviembre",
            "referencia": "DCS452586685524878",
            "tipo": "B",
            "cantidad": "25.140 kg",
            "origen": "CADIZ",
            "fecha": "02/08/2022",
            "oleoso": "96,45",
            "incidencia": [0, 0],
            "acciones": ""
        },
        {
            "mes": "diciembre",
            "referencia": "DCS452586685524845",
            "tipo": "B",
            "cantidad": "25.140 kg",
            "origen": "SEVILLA",
            "fecha": "02/08/2022",
            "oleoso": "93,2",
            "incidencia": [0, 0],
            "acciones": ""
        },
        {
            "mes": "diciembre",
            "referencia": "DCS452586685524836",
            "tipo": "B",
            "cantidad": "25.140 kg",
            "origen": "GRANADA",
            "fecha": "02/08/2022",
            "oleoso": "92,9",
            "incidencia": [0, 0],
            "acciones": ""
        },
        {
            "mes": "diciembre",
            "referencia": "DCS452586685524822",
            "tipo": "B",
            "cantidad": "25.140 kg",
            "origen": "MADRID",
            "fecha": "02/08/2022",
            "oleoso": "96",
            "incidencia": [0, 0],
            "acciones": ""
        },
        {
            "mes": "diciembre",
            "referencia": "DCS452586685524815",
            "tipo": "B",
            "cantidad": "25.140 kg",
            "origen": "GRANADA",
            "fecha": "02/08/2022",
            "oleoso": "92,9",
            "incidencia": [0, 0],
            "acciones": ""
        },
        {
            "mes": "diciembre",
            "referencia": "DCS452586685524877",
            "tipo": "B",
            "cantidad": "25.140 kg",
            "origen": "VALENCIA",
            "fecha": "02/08/2022",
            "oleoso": "92,3",
            "incidencia": [0, 0],
            "acciones": ""
        },
        {
            "mes": "diciembre",
            "referencia": "DCS452586685524845",
            "tipo": "B",
            "cantidad": "25.140 kg",
            "origen": "SEVILLA",
            "fecha": "02/08/2022",
            "oleoso": "93,2",
            "incidencia": [0, 0],
            "acciones": ""
        },
        {
            "mes": "diciembre",
            "referencia": "DCS452586685524836",
            "tipo": "B",
            "cantidad": "25.140 kg",
            "origen": "GRANADA",
            "fecha": "02/08/2022",
            "oleoso": "92,9",
            "incidencia": [0, 0],
            "acciones": ""
        },
        {
            "mes": "diciembre",
            "referencia": "DCS452586685524822",
            "tipo": "B",
            "cantidad": "25.140 kg",
            "origen": "MADRID",
            "fecha": "02/08/2022",
            "oleoso": "96",
            "incidencia": [0, 0],
            "acciones": ""
        },
        {
            "mes": "diciembre",
            "referencia": "DCS452586685524815",
            "tipo": "B",
            "cantidad": "25.140 kg",
            "origen": "GRANADA",
            "fecha": "02/08/2022",
            "oleoso": "92,9",
            "incidencia": [0, 0],
            "acciones": ""
        },
        {
            "mes": "diciembre",
            "referencia": "DCS452586685524877",
            "tipo": "B",
            "cantidad": "25.140 kg",
            "origen": "VALENCIA",
            "fecha": "02/08/2022",
            "oleoso": "92,3",
            "incidencia": [0, 0],
            "acciones": ""
        }
    ]

    const selectMonth = async ({ target }) => {

        const currentMonth = await target.value;
        setAnswers(currentMonth)

        const miPropiedad = await target.dataset.sinta
        setPalabra(miPropiedad)


        return miPropiedad;
    }

    const mesRenderizado = () => {
        const mesecito = tabla.filter(element => element.mes == palabra);
        console.log(mesecito)
        setMes(mesecito)

    }

    useEffect(() => {
        mesRenderizado()
    }, [selectMonth])

    return (
        <div className='filtrado'>
            <div className='filtro'>
                <div className="border">
                    <h3>Filtrar</h3>
                </div>
                <div className="border">
                    <input className='holderMeses' type="text" defaultValue={answers} />
                </div>
                <div className="meses">
                    {months ? months.map((month, i) => (
                        <div key={i}>
                            <button onClick={selectMonth} data-sinta={month.sinta} value={month.value}>{month.text}</button>
                        </div>
                    )) : ""}
                </div>
                <Buscador />
            </div>
            <GestionDeclaraciones />
            <div className='tabla'>
                <hr></hr>
                <tr className='tablaCabecera'>
                    <th>
                        <input className='checkbox'
                            type="checkbox"
                            checkbox={checkbox}
                            onChange={visuatdzarCheckbox}
                        />
                    </th>Nº REFERENCIA<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="48"><path d="M322 606V290L202 410l-42-42 193-193 193 193-42 42-122-121v317h-60Zm285 369L414 781l42-41 120 120V544h60v317l122-121 42 42-193 193Z" /></svg>
                    <th>
                    </th>

                    <th>TIPO<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="48"><path d="M322 606V290L202 410l-42-42 193-193 193 193-42 42-122-121v317h-60Zm285 369L414 781l42-41 120 120V544h60v317l122-121 42 42-193 193Z" /></svg>
                    </th>
                    <th>CANTIDAD<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="48"><path d="M322 606V290L202 410l-42-42 193-193 193 193-42 42-122-121v317h-60Zm285 369L414 781l42-41 120 120V544h60v317l122-121 42 42-193 193Z" /></svg>
                    </th>
                    <th>ORIGEN (PROVINCIA)<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="48"><path d="M322 606V290L202 410l-42-42 193-193 193 193-42 42-122-121v317h-60Zm285 369L414 781l42-41 120 120V544h60v317l122-121 42 42-193 193Z" /></svg>
                    </th>
                    <th>FECHA<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="48"><path d="M322 606V290L202 410l-42-42 193-193 193 193-42 42-122-121v317h-60Zm285 369L414 781l42-41 120 120V544h60v317l122-121 42 42-193 193Z" /></svg>
                    </th>
                    <th>% OLEOSO<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="48"><path d="M322 606V290L202 410l-42-42 193-193 193 193-42 42-122-121v317h-60Zm285 369L414 781l42-41 120 120V544h60v317l122-121 42 42-193 193Z" /></svg>
                    </th>
                    <th>INCIDENCIA</th>
                    <th></th>
                    <th>ACCIONES</th>
                </tr>
                <hr></hr>

                {mes.length > 1 ? mes.map((mesecito, i) => (
                    <div className='divTabla' key={i}>
                        <tr className='trTabla'>
                            <td><input
                                type="checkbox"
                                checkbox={checkbox}
                                onChange={visuatdzarCheckbox}
                            /></td>
                            <td>{mesecito.referencia}</td>
                            <td>{mesecito.tipo}</td>
                            <td>{mesecito.cantidad}</td>
                            <td>{mesecito.origen}</td>
                            <td>{mesecito.fecha}</td>
                            <td>{mesecito.oleoso}</td>
                            <td><svg className="notificacionesTabla" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="48"><path d="M124 489q0-81 34-153.5T255 212l41 45q-53 43-82.5 103.5T184 489h-60Zm653 0q0-68-28-128.5T668 257l41-45q62 52 95 124t33 153h-60ZM160 856v-60h84V490q0-84 49.5-149.5T424 258v-29q0-23 16.5-38t39.5-15q23 0 39.5 15t16.5 38v29q81 17 131 82.5T717 490v306h83v60H160Zm320-295Zm0 415q-32 0-56-23.5T400 896h160q0 33-23.5 56.5T480 976ZM304 796h353V490q0-74-51-126t-125-52q-74 0-125.5 52T304 490v306Z" /></svg>{mesecito.incidencia[0]}</td>
                            <td><svg className="notificacionesTabla" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="48"><path d="M477 936q-149 0-253-105.5T120 575h60q0 125 86 213t211 88q127 0 215-89t88-216q0-124-89-209.5T477 276q-68 0-127.5 31T246 389h105v60H142V241h60v106q52-61 123.5-96T477 216q75 0 141 28t115.5 76.5Q783 369 811.5 434T840 574q0 75-28.5 141t-78 115Q684 879 618 907.5T477 936Zm128-197L451 587V373h60v189l137 134-43 43Z" /></svg>{mesecito.incidencia[1]}</td>
                            <td><svg className="pdf" xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 96 960 960" width="48"><path d="M452 854h60V653l82 82 42-42-156-152-154 154 42 42 84-84v201ZM220 976q-24 0-42-18t-18-42V236q0-24 18-42t42-18h361l219 219v521q0 24-18 42t-42 18H220Zm331-554V236H220v680h520V422H551ZM220 236v186-186 680-680Z" /></svg><a href={cv} target="_blank">
                                Ver PDF <i className="pdf"></i>
                            </a></td>
                            <td><svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="48"><path d="M479.858 896Q460 896 446 881.858q-14-14.141-14-34Q432 828 446.142 814q14.141-14 34-14Q500 800 514 814.142q14 14.141 14 34Q528 868 513.858 882q-14.141 14-34 14Zm0-272Q460 624 446 609.858q-14-14.141-14-34Q432 556 446.142 542q14.141-14 34-14Q500 528 514 542.142q14 14.141 14 34Q528 596 513.858 610q-14.141 14-34 14Zm0-272Q460 352 446 337.858q-14-14.141-14-34Q432 284 446.142 270q14.141-14 34-14Q500 256 514 270.142q14 14.141 14 34Q528 324 513.858 338q-14.141 14-34 14Z" /></svg></td>
                        </tr>
                        <hr></hr>
                    </div>

                )) : tabla.map((month, i) => (
                    <div className='divTabla' key={i}>
                        <tr className='trTabla'>
                            <td><input
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
                            <td><svg className="notificacionesTabla" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="48"><path d="M124 489q0-81 34-153.5T255 212l41 45q-53 43-82.5 103.5T184 489h-60Zm653 0q0-68-28-128.5T668 257l41-45q62 52 95 124t33 153h-60ZM160 856v-60h84V490q0-84 49.5-149.5T424 258v-29q0-23 16.5-38t39.5-15q23 0 39.5 15t16.5 38v29q81 17 131 82.5T717 490v306h83v60H160Zm320-295Zm0 415q-32 0-56-23.5T400 896h160q0 33-23.5 56.5T480 976ZM304 796h353V490q0-74-51-126t-125-52q-74 0-125.5 52T304 490v306Z" /></svg>{month.incidencia[0]}</td>
                            <td><svg className="notificacionesTabla" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="48"><path d="M477 936q-149 0-253-105.5T120 575h60q0 125 86 213t211 88q127 0 215-89t88-216q0-124-89-209.5T477 276q-68 0-127.5 31T246 389h105v60H142V241h60v106q52-61 123.5-96T477 216q75 0 141 28t115.5 76.5Q783 369 811.5 434T840 574q0 75-28.5 141t-78 115Q684 879 618 907.5T477 936Zm128-197L451 587V373h60v189l137 134-43 43Z" /></svg>{month.incidencia[1]}</td>
                            <td><svg className="pdf" xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 96 960 960" width="48"><path d="M452 854h60V653l82 82 42-42-156-152-154 154 42 42 84-84v201ZM220 976q-24 0-42-18t-18-42V236q0-24 18-42t42-18h361l219 219v521q0 24-18 42t-42 18H220Zm331-554V236H220v680h520V422H551ZM220 236v186-186 680-680Z" /></svg><a href={cv} target="_blank">
                                Ver PDF <i className="pdf"></i>
                            </a></td>
                            <td><svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="48"><path d="M479.858 896Q460 896 446 881.858q-14-14.141-14-34Q432 828 446.142 814q14.141-14 34-14Q500 800 514 814.142q14 14.141 14 34Q528 868 513.858 882q-14.141 14-34 14Zm0-272Q460 624 446 609.858q-14-14.141-14-34Q432 556 446.142 542q14.141-14 34-14Q500 528 514 542.142q14 14.141 14 34Q528 596 513.858 610q-14.141 14-34 14Zm0-272Q460 352 446 337.858q-14-14.141-14-34Q432 284 446.142 270q14.141-14 34-14Q500 256 514 270.142q14 14.141 14 34Q528 324 513.858 338q-14.141 14-34 14Z" /></svg></td>
                        </tr>
                        <hr></hr>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Filtrado;