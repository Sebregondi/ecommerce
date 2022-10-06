import React, { useEffect, useState } from 'react'

const PlatziContainer = () => {

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
                <div className="ml-7 inline-flex card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={i.images} alt={i.title} /></figure>
                <div className="card-body">
                  <h1 className="card-title">{i.title}</h1>
                  <strong>Price: ${i.price}</strong>
                  <p>{i.description}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>)}
        </div>
    )
}

export default PlatziContainer