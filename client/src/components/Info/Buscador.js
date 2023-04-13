import React from 'react';
import img from '../../img/search_FILL0_wght400_GRAD0_opsz48.png';

const Buscador = props =>{
    return(
      <form onSubmit={props.onSubmit}>
        <input className='buscar' type="text" placeholder='buscar' />
     
      </form>
    )
}

export default Buscador;