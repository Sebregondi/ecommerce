import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const ItemList = () => {

  const { categoryId } = useParams()

  const [list, setList] = useState([])
  const [category, setCategory] = useState([])

  useEffect(() => {
    getItemList()
    getCategory('Cuento')
  }, [])
  
  const getItemList = () => {
    const db = getFirestore()
    const collectionRef = collection (db, 'items')
    getDocs(collectionRef).then (snapshot =>{
      const data = snapshot.docs.map (e => ({id: e.id, ...e.data()}))
      setList(data)
    })
  }

// Aquí lógica para traer productos por categoría

const getCategory = () => {
  const db = getFirestore()
  const categoryRef = collection (db, 'items')
  const q = query (categoryRef, where ('categoryId', '==', 'Cuento'))
  getDocs (q).then (snapshot => {
    const data = snapshot.docs.map( e => ({id: e.id, ...e.data()}))
    setCategory(data)
    console.log(data);
  })
}

  return (
  <>
    <div>
      <h1 className='m-3 text-3xl'>Nuestro catálogo</h1>
    </div>
    {list.map(l => <div className='m-3' key={l.id} {...l}>{l.title}, 
    <Link to={`/category/:categoryId`}>{l.categoryId}</Link>
    </div>)}
  </>
)
}

export default ItemList

