import React, { useEffect, useState } from 'react'
import ItemCard from './ItemCard'
import { products } from './products'

const ItemList = () => {

  const [items, setItems] = useState([])

useEffect(() => {
  getProducts().then ( response => {
    console.log(response);
    setItems (response) 
  })
}, [])

const getProducts = () => { 
  return new Promise ( resolve => {
    setTimeout(() => {
      resolve (products)
    }, 2000);
  })
 }

  return (
    <>
      <div>ItemList</div>
      {items.map( i=> <ItemCard key={i.id} {...i}/>)}
    </>
  )
}

export default ItemList