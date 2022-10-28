import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import { Loader } from "./Loader";

const ItemListContainer = () => {

  const [data, setData] = useState([])
  const { categoryId } = useParams()

  useEffect(() => {

    const db = getFirestore()
    const collectionRef = collection(db, 'items')
    if (categoryId) {
      const collectionFilter = query (collectionRef, where('category', '==', categoryId ))
      getDocs (collectionFilter)
        .then( res => setData( res.docs.map( product => ({ id: product.id, ...product.data() }))))
    } else {
      getDocs(collectionRef)
        .then( res => setData( res.docs.map( product => ({ id: product.id, ...product.data() }))))
    }
  }, [categoryId])
  

  return (
    <>
    <ItemList data={data} />
    </>
  )
}

export default ItemListContainer


{/* <div>
      { loading ? <Loader/> 
      :
      items.map(i => <ItemCard key={i.id} {...i} />)}
    </div> */}
