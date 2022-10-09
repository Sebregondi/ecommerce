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
        <div className="mt-1 card outline outline-2 outline-red-400 items-center w-96 bg-base-100 shadow-xl">
            <figure className="w-2/3 px-5">
                <img src={item.img} alt={item.nombre} className="mt-5 items-center rounded-xl outline outline-1 outline-red-400" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">${item.precio}</h2>
                <p>Título: {item.nombre}</p>
                <p>Autor: {item.autor}</p>
                <p>Género: {item.genero}</p>
                <p>Págs.: {item.pags}</p>
                <div className="card-actions">
                    <button className="btn btn-error">¡Comprar!</button>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail