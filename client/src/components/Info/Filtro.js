import React from 'react';
import Buscador from './Buscador';

const Filtro = () => {

    function funcionMeses(e) {
        e.preventDefault();
        console.log(e)
        console.log(e.target[0].__reactProps$zlo6ivvqxzr)
        console.log(`Pulsado en el mes ${e.type}`);
    }

    return (
        <div className='page home'>
            <h2>Filtrar</h2>



            <form onSubmit={funcionMeses}>
                <button type="ENE">ENE</button>
                <button type="FEB">FEB</button>
                <button type="MAR">MAR</button>
                <button type="ABR">ABR</button>
                <button type="MAY">MAY</button>
                <button type="JUN">JUN</button>
                <button type="JUL">JUL</button>
                <button type="AGO">AGO</button>
                <button type="SEP">SEP</button>
                <button type="OCT">OCT</button>
                <button type="NOV">NOV</button>
                <button type="DIC">DIC</button>
            </form>
            <Buscador />
        </div>
    )
}

export default Filtro;