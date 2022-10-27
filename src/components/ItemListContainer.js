import React, { useEffect, useState } from 'react'
import { collection, getDocs, getFirestore } from "firebase/firestore"
import ItemCard from './ItemCard'
import Loader from './Loader'
import { useParams } from 'react-router-dom'


const ItemListContainer = () => {

  const { categoryId } = useParams()
  
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
      { loading ? <Loader/> 
      :
      items.map(i => <ItemCard key={i.id} {...i} />)}
    </div>)
}


export default ItemListContainer
