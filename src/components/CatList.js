import React, { useEffect, useState } from 'react'
import { products } from './products'
import { CatDetail } from "./CatDetail";



const CatList = () => {

    const [cat, setCat] = useState([])

useEffect(() => {
    getCategories().then (response => {
        setCat(response)
    })
}, [])

const getCategories = () => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve (products)
        }, 1000);
    })
}

  return (
    <>
        <div>CATEGORÍAS</div>
        {cat.map( c => <CatDetail key={c.id} {...c}/> )}
    </>
    
  )
}

export default CatList