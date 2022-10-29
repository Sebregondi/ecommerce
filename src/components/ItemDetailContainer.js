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
