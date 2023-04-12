import React, { useState } from 'react'
import Buscador from './Buscador';

const Filtro = () => {
        
        const [answers, setAnswers] = useState("");
        
        const months = [
    
            { text: 'ENE', value: '01/01/2023 - 31/01/2023' },
            { text: 'FEB', value: '01/02/2023 - 28/02/2023' },
            { text: 'MAR', value: '01/03/2023 - 31/03/2023' },
            { text: 'ABR', value: '01/04/2023 - 30/04/2023' },
            { text: 'MAY', value: '01/05/2023 - 31/05/2023' },
            { text: 'JUN', value: '01/06/2023 - 30/06/2023' },
            { text: 'JUL', value: '01/07/2023 - 31/07/2023' },
            { text: 'AGO', value: '01/08/2023 - 31/08/2023' },
            { text: 'SEP', value: '01/09/2023 - 30/09/2023' },
            { text: 'OCT', value: '01/10/2023 - 31/10/2023' },
            { text: 'NOV', value: '01/11/2023 - 30/11/2023' },
            { text: 'DIC', value: '01/12/2023 - 31/12/2023' },
        ]
    
    
        const selectMonth = (event) => {
    
            const currentMonth = event.target.value;
     
            setAnswers(localStorage.setItem('month', currentMonth))
    
        }
    
    
    
        return (
            <div>
    
                <form>
                    {months ? months.map((month, i) => (
    
                        <div key={i}>
    
                            <button onClick={selectMonth} value={month.value}>{month.text}</button>
    
    
                        </div>
    
                    )) : ""}
    
                    <input type="text" defaultValue={localStorage.getItem('month')} />
    
                </form>
    
    
            </div>
        )
    }

export default Filtro;