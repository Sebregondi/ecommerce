import React from 'react'
import { Link } from 'react-router-dom'

export const ItemCard = ({ info }) => {
    return (
        <div key={info.id} className="mt-5 ml-5 outline outline-2 outline-red-400 inline-flex card card-compact w-1/6 bg-base-100 shadow-xl">
            <figure><img src={info.img} width={200} alt={info.title}/></figure>
            <div className="card-body">
                <div className="card-actions justify-end">
                <Link to={`/detail/${info.id}`}>
                    <button className="btn btn-outline btn-error">Ir al detalle</button>
                </Link>
                </div>
            </div>
        </div>
    )
}

export default ItemCard
