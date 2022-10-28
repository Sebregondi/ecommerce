import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

export const ItemDetailContainer = () => {

    const [data, setData] = useState({})
    const { detailId } = useParams()

    useEffect(() => {
        const db = getFirestore()
        const docRef = doc(db, 'items', detailId)
        getDoc(docRef).then(res => setData({ id: res.id, ...res.data() }))
    }, [detailId])
    

    return (
        <ItemDetail data={data} />
    )
}

export default ItemDetailContainer


{/* <>
        //     <div>
                <h1 className='m-3 text-3xl'>Nuestro catálogo</h1>
        //     </div>
        //     {list.map(l => <div className='m-3' key={l.id} {...l}>{l.title},
        //         <Link to={`/category/:categoryId`}>{l.categoryId}</Link>
        //     </div>)}
        // </> */}
