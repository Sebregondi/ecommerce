import React, { useEffect, useState } from 'react'
import { collection, doc, getDoc, getFirestore } from "firebase/firestore"
import { useParams } from 'react-router-dom'
import { useCart } from './context/CartContext'
import Loader from './Loader'

const ItemDetail = () => {

  const { id } = useParams()

  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true)
  const {addtoCart} = useCart()

    useEffect(() => {
      getItemDetail()
    }, [])
    
    const getItemDetail = () => {
        const db = getFirestore()
        const details = collection (db, 'items')
        const docRef = doc (details, id)
        getDoc(docRef).then( snapshot =>{
          setProduct(snapshot.data())
          setLoading(false)
        } )
    }

    const addHandler = () => {
      addtoCart(product)
    }

    return ( loading ? <Loader/> 
    :
          <div className="card lg:card-side bg-base-100 shadow-xl">
              <figure className="max-w-4xl px-5"><img src={product.img} alt={product.title} width={300}/></figure>
              <div className="card-body">
                  <h2 className="card-title">${product.price}</h2>
                  <div>
                  <p>Título: {product.title}</p>
                  <p>Género: {product.categoryId}</p>
                  </div>
                  <p>Descripción: {product.description}</p>
                  
                  <div className="card-actions justify-end">
                      <button onClick={addHandler} className="btn bg-error shadow">Agregar al carrito</button>
                  </div>
              </div>
          </div>
          )
      }
      
      export default ItemDetail