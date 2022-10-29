import React from 'react'
import { ItemCard } from "./ItemCard";

const ItemList = ({ data } = []) => {
  return (
    data.map(item => <ItemCard key={item.id} info={item}/>)
  )
}

export default ItemList