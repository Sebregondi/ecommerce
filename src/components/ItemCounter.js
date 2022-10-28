import React, { useEffect } from 'react'
import { useState } from 'react'

const ItemCounter = ({ initial, stock, onAdd }) => {

    const [count, setCount] = useState( Number(initial) )

    const subHandler = () => {
        setCount(count - 1)
    }

    const addHandler = () => {
        setCount(count + 1)
    }

    useEffect(() => {
        setCount( Number(initial) )
    }, [initial])
    

    return (
        <div className="counter btn-group">
            <button disabled={count <= 1} onClick={subHandler} className="subBtn btn btn-outline">-</button>
            <button className="btn btn-outline">{count}</button>
            <button disabled={count >= stock} onClick={addHandler} className="btn btn-outline">+</button>
        </div>
    )
}

export default ItemCounter
