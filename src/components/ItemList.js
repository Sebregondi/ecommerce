import React, { useEffect, useState } from 'react'
import ItemCard from './ItemCard'
import { products } from './products'

const ItemList = () => {

  const [items, setItems] = useState([])

  useEffect(() => {
    getProducts().then(response => {
      setItems(response)
    })
  }, [])

  const getProducts = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(products)
      }, 2000);
    })
  }

  return (
    <>
      <div className='m-8'><h1 className='text-xl font-bold'>Categorias</h1></div>
      {items.map(i => <ItemCard key={i.id} {...i} />)}
    </>
  )
}

export default ItemList