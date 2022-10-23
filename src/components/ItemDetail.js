import React, { useEffect, useState } from 'react'
import { collection, doc, getDoc, getFirestore } from "firebase/firestore"
import { useParams } from 'react-router-dom'

const ItemDetail = () => {

  const { id } =useParams()

  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true)

    useEffect(() => {
      getItemDetail()
    }, [])
    
    const getItemDetail = () => {
        const db = getFirestore()
        const details = collection (db, 'items')
        const docRef = doc (details, id)
        getDoc(docRef).then( snapshot =>{
          // console.log(snapshot.data());
          setProduct(snapshot.data())
          setLoading(false)
        } )
    }

    return ( loading ? <h1 className='text-xl font-bold'>Cargando...</h1> 
    :
          <div className="card lg:card-side bg-base-100 shadow-xl">
              <figure className="max-w-4xl px-5"><img src={product.img} alt={product.title}/></figure>
              <div className="card-body">
                  <h2 className="card-title">${product.price}</h2>
                  <div>
                  <p>Título: {product.title}</p>
                  {/* <p>Autor: {item.autor}</p> */}
                  <p>Género: {product.categoryId}</p>
                  {/* <p>Págs.: {item.pags}</p> */}
                  </div>
                  <p>Descripción: {product.description}</p>
                  
                  <div className="card-actions justify-end">
                      <button className="btn btn-primary">Agregar al carrito</button>
                  </div>
              </div>
          </div>
          )
      }
      
      export default ItemDetail