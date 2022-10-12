import React from 'react'

const CatCard = ({id, nombre, genero}) => {
  return (
    <div className='m-5'>
        <div>{id}</div>
        <div>{nombre}</div>
        <div>{genero}</div>
    </div>
  )
}

export default CatCard