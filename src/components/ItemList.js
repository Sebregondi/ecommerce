import { collection, getDocs, getFirestore } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'

const ItemList = () => {

  const [list, setList] = useState([])

  useEffect(() => {
    getItemList()
  }, [])
  
  const getItemList = () => {
    const db = getFirestore()
    const collectionRef = collection (db, 'items')
    getDocs(collectionRef).then (snapshot =>{
      const data = snapshot.docs.map (e => ({id: e.id, ...e.data()}))
      setList(data)
    })
  }

  return (
    <div>
      <h1 className='m-3 text-3xl'>Listado de títulos</h1>
      {list.map(l => <li className='m-3' key={l.id} {...l}>{l.title}</li>)}
    </div>
  )
}

export default ItemList