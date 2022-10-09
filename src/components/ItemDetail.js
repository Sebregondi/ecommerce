import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from './products'

const ItemDetail = () => {

    const { id: itemId } = useParams()
    const [item, setItem] = useState({})

    useEffect(() => {
        getItemDetails().then(response => {
            setItem(response)
        })
    }, [])


    const getItemDetails = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products.find(p => p.id === Number(itemId)))
            }, 1000);
        })
    }

    return (
        <div className="card card-side bg-base-50 shadow-xl">
            <figure><img className='min-w-0' src={item.img} alt={item.nombre} /></figure>
            <div className="card-body">
                <h2 className="card-title">{item.nombre}</h2>
                <strong>{item.precio}</strong>
                <p>{item.autor}</p>
                <p>{item.genero}</p>
                <p>{item.pags}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Comprar</button>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail