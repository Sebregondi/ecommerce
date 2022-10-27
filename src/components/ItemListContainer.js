import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'

const ItemListContainer = () => {

  const [data, setData] = useState([])
  const { categoryId } = useParams()

  useEffect(() => {

    // if (categoryId) {
    //   getData.then>(res => setData(res.filter(item => item.category === categoryId)))      
    // } else {
    //   getData.then(res => setData(res))
    // }
    
  }, [categoryId])
  

  return (
    <ItemList data={data} />
  )
}

export default ItemListContainer


{/* <div>
      { loading ? <Loader/> 
      :
      items.map(i => <ItemCard key={i.id} {...i} />)}
    </div> */}
