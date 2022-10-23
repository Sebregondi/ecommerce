import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { collection, getDocs, getFirestore } from "firebase/firestore"
import ItemCard from './ItemCard'

const ItemListContainer = () => {

  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getItems()
  }, [])
  
  const getItems = () => {
    const db = getFirestore()
    const collectionRef = collection(db, 'items')
    getDocs (collectionRef).then (snapshot => {
      const data = snapshot.docs.map ( e => ({id: e.id, ...e.data()}))
      setItems(data)
      setLoading (false)
    })
  }

return (
    <div>
      { loading ? <h1 className='text-xl font-bold'>Cargando...</h1>
      :
      items.map(i => <ItemCard key={i.id} {...i} />)}
    </div>)
}


export default ItemListContainer
