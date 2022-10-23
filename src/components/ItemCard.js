import React from 'react'
import { Link } from 'react-router-dom'

const ItemCard = ({ id, title, img }) => {
    return (
        <div key={id} className="mt-5 ml-5 outline outline-2 outline-red-400 inline-flex card card-compact w-1/6 bg-base-100 shadow-xl">
            <figure><img src={img} alt={title} /></figure>
            <div className="card-body">
                <div className="card-actions justify-end">
                    <Link to={`/item/${id}`}>
                        <button className="btn btn-outline btn-error">+ info</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ItemCard
