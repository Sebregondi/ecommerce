import React, { useEffect, useState } from 'react'

const [items, setItems] = useState([])

const PlatziContainer = () => {

    useEffect(() => { getItems() }, [])

    const getItems = () => {
        const URL = 'https://api.escuelajs.co/api/v1/categories'
        fetch(URL)
            .then(res => res.json())
            .then(data => {
                setItems(data)
            })
            .catch(err => { console.log(err) })
    }


    return (
        <div>Platzi Container</div>
    )
}

export default PlatziContainer