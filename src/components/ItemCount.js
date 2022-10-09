import React from 'react'
import { useState } from 'react'

const ItemCount = () => {

    const [counter, setCounter] = useState(0)

    const addHandler = () => {
        console.log('ItemCount add');
        setCounter(counter + 1)
    }

    const subHandler = () => {
        console.log('ItemCount subtract');
        setCounter(counter - 1)
    }

    return (
        <div className="btn-group">
            <button onClick={subHandler} className="subBtn btn btn-outline">-</button>
            <button className="btn btn-outline">{counter}</button>
            <button onClick={addHandler} className="btn btn-outline">+</button>
        </div>
    )
}

export default ItemCount