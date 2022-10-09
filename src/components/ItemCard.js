import React from 'react'
import { Link } from 'react-router-dom'

const ItemCard = ({id, nombre, precio}) => {
  return (
    <Link to={`/item/${id}`}>
        <div className='m-5'>
          <div>{id}</div>
          <div>{nombre}</div>
          <div>Precio: ${precio}</div>
        </div>
    </Link>
  )
}

export default ItemCard