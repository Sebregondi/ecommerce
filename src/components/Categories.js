import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from "./products";

const Categories = () => {

  const { genero } = useParams()
  const [cat, setCat] = useState({})

  useEffect(() => {
    getCategories().then (response => {
      setCat(response)
      console.log(response);
    })
  }, [])
  

    const getCategories = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve( products.find (p => p.genero = p.genero) )
        }, 1000);
      })
    }
    

  return (
    <div>
      {cat.map (c => <li>{cat.genero}</li>)}
    </div>
  )
}

export default Categories