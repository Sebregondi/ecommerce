import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { products } from './products'

const ItemListContainer = () => {

  const [items, setItems] = useState([])

  useEffect(() => {
    getProducts().then(response => {
      setItems(response)
    })
  }, [])

  const getProducts = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(products)
      }, 2000);
    })
  }

  return (
    <div>
        {items.map(i =>
            <div key={i.id} className="mt-5 ml-5 outline outline-2 outline-red-400 inline-flex card card-compact w-1/6 bg-base-100 shadow-xl">
            <figure><img src={i.img} alt={i.nombre} /></figure>
            <div className="card-body">
              <div className="card-actions justify-end">
                  <button className="btn btn-outline btn-error">+ info</button>
              </div>
            </div>
          </div>)}
    </div>
  )
}

export default ItemListContainer