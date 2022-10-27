import React, { useEffect, useState } from 'react'
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = () => {

    const { detailId } = useParams()
    const [data, setData] = useState()

    useEffect(() => {
        const db = getFirestore()
        const docRef = doc(db, 'items', '1LLjjMGoWuaTqMSCTA7c')
        getDoc(docRef)
            .then (res => setData({ id: res.id, ...res.data()}))
    }, [])

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
