import React, { useEffect, useState } from 'react'

const ItemListContainer = () => {

    const [items, setItems] = useState([])

    useEffect(() => { getItems() }, [])

    const getItems = () => {
        const URL = 'https://api.escuelajs.co/api/v1/products?offset=0&limit=9'
        fetch(URL)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setItems(data)
            })
            .catch(err => { console.log(err) })
    }
  
    return (
        <div>
            {items.map(i =>
                <div key={i.id} className="mt-5 ml-5 outline inline-flex card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={i.images} alt={i.title} /></figure>
                <div className="card-body">
                  <h1 className="card-title">{i.title}</h1>
                  <strong className='text-right text-xl'>Price: ${i.price}</strong>
                  <p >{i.description}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-outline btn-error">Buy Now</button>
                  </div>
                </div>
              </div>)}
        </div>
    )
}

export default ItemListContainer