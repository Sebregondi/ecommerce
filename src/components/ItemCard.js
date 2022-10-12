import React from 'react'
import { Link } from 'react-router-dom'

const ItemCard = ({id, nombre, autor, genero, pags}) => {
  return (
    <Link to={`/item/${id}`}>
        <div className='m-5'>
          <div><strong>{nombre}</strong></div>
          <div>{autor}</div>
          <div>Categoría: {genero}</div>
          <div>Páginas: {pags}</div>
        </div>
    </Link>
  )
}

export default ItemCard

