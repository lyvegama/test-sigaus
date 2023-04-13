import React from 'react';

const Buscador = props => {
  return (
    <form onSubmit={props.onSubmit}>
      <input className="holderBuscador" type="text" placeholder='Buscar' />

    </form>
  )
}

export default Buscador;