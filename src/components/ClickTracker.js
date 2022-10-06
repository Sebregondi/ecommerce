import React from 'react'
import { useState } from 'react'

const ClickTracker = () => {

    const [counter, setCounter] = useState(0)

    const clickHandler = () => {
        console.log('You clicked');
        setCounter(counter + 1)
    }

    return (
        <div>
            <div className='m-5'>{counter}</div>
            <button onClick={clickHandler} className='btn m-5' >Click here</button>
        </div>
    )
}

export default ClickTracker