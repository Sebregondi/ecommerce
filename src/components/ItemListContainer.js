import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { products } from './products'
import { collection, getDocs, getFirestore } from "firebase/firestore"

const ItemListContainer = () => {

  const [items, setItems] = useState([])

  useEffect(() => {
    getItems()
  }, [])
  
  const getItems = () => {
    const db = getFirestore()
    const collectionRef = collection(db, 'items')
    getDocs (collectionRef).then (snapshot => {
      const data = snapshot.docs.map ( e => ({id: e.id, ...e.data()}))
      setItems(data)
    })
  }

return (
    <div>
        {items.map(i =>
            <div key={i.id} className="mt-5 ml-5 outline outline-2 outline-red-400 inline-flex card card-compact w-1/6 bg-base-100 shadow-xl">
            <figure><img src={i.img} alt={i.nombre} /></figure>
            <div className="card-body">
              <div className="card-actions justify-end">
                <Link to={`/item/${i.id}`}>
                  <button className="btn btn-outline btn-error">+ info</button>
                </Link>
              </div>
            </div>
          </div>)}
    </div>
  )
}

export default ItemListContainer
