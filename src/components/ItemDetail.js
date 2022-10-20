import React, { useEffect, useState } from 'react'
import { collection, doc, getDocs, getFirestore } from "firebase/firestore"
// import { useParams } from 'react-router-dom'
// import { products } from './products'

const ItemDetail = () => {

    useEffect(() => {
      getItemDetails()
    }, [])
    
    const getItemDetails = () => {
        const db = getFirestore()
        const itemsRef = collection (db, 'items')
        getDocs(itemsRef).then( snapshot =>{
            const data = snapshot.docs.find( i => ({id: i.id, ...i.data()}) )
            console.log(data);
        })
    }

  return (
    <div>ItemDetail</div>
  )
}

export default ItemDetail



// const ItemDetail = () => {

//     const { id: itemId } = useParams()
//     const [item, setItem] = useState({})

//     useEffect(() => {
//         getItemDetails().then(response => {
//             setItem(response)
//         })
//     }, [])


//     const getItemDetails = () => {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(products.find(p => p.id === Number(itemId)))
//             }, 1000);
//         })
//     }

//     return (
//         <div className="card lg:card-side bg-base-100 shadow-xl">
//             <figure className="max-w-4xl px-5"><img src={item.img} alt={item.nombre}/></figure>
//             <div className="card-body">
//                 <h2 className="card-title">${item.precio}</h2>
//                 <div>
//                 <p>Título: {item.nombre}</p>
//                 <p>Autor: {item.autor}</p>
//                 <p>Género: {item.categoryId}</p>
//                 <p>Págs.: {item.pags}</p>
//                 </div>
//                 <p>Descripción: {item.sintesis}</p>
                
//                 <div className="card-actions justify-end">
//                     <button className="btn btn-primary">Agregar al carrito</button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default ItemDetail