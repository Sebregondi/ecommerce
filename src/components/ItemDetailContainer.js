import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = () => {

    const [data, setData] = useState({})
    const { detailId } = useParams()

    useEffect(() => {
    
        // getData.then(res => setData(res.find(item => item.id === Number(detailId))))
    
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
