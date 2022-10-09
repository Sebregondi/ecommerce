import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from './products'

const ItemDetail = () => {

    const { id: itemId } = useParams()
    const [item, setItem] = useState({})

    useEffect(() => {
        getItemDetails().then( response => {
            setItem(response)
        })
    }, [])
    

    const getItemDetails = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve (products.find( p => p.id === Number (itemId) ) )
            }, 1000);
        })
    }

  return (
    <div className='m-8'>
        <div>{item.nombre}</div>
        <div>{item.autor}</div>
        <div>{item.precio}</div>
        <div>{item.genero}</div>
        <div>{item.pags}</div>
    </div>
  )
}

export default ItemDetail