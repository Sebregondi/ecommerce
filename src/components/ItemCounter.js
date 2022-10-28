import React, { useEffect } from 'react'
import { useState } from 'react'

const ItemCounter = ({ initial, stock, onAdd }) => {

    const [count, setCount] = useState(Number(initial))

    const subHandler = () => {
        setCount(count - 1)
    }

    const addHandler = () => {
        setCount(count + 1)
    }

    useEffect(() => {
        setCount(Number(initial))
    }, [initial])


    return (
        <>
        <div className="counter btn-group">
            <button disabled={count <= 1} onClick={subHandler} className="btn bg-error shadow">-</button>
            <button className="btn btn-outline bg-error shadow">{count}</button>
            <button disabled={count >= stock} onClick={addHandler} className="btn bg-error shadow">+</button>
        </div>
        <div className="card-actions justify-end">
        <button disabled={stock <= 0} onClick={() => onAdd(count)} className="btn bg-error shadow">Agregar al carrito</button>
    </div>
    </>
    )
}

export default ItemCounter
