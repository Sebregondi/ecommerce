import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'

const ItemListContainer = () => {

  const [data, setData] = useState([])
  const { categId } = useParams()

  useEffect(() => {
    const db = getFirestore()
    const collectionRef = collection(db, 'items')
    if (categId) {
      const collectionFilter = query(collectionRef, where('category', '==', categId))
      getDocs(collectionFilter)
        .then(res => setData(res.docs.map(product => ({ id: product.id, ...product.data() }))))
    } else {
      getDocs(collectionRef)
        .then(res => setData(res.docs.map(product => ({ id: product.id, ...product.data() }))))
    }
  }, [categId])


  return (
    <>
      <ItemList data={data} />
    </>
  )
}

export default ItemListContainer
