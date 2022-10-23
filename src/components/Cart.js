import React from 'react'
import { useCart } from './context/CartContext'

const Cart = () => {

    const { products, clearCart, id } = useCart()

    const clearHandler = () => {
        clearCart()
    }

    return (
        <div>
            <div>Carrito</div>
            {products.map(p => <li key={p.id}>{p.title} </li>)}
            <button className='btn' onClick={clearHandler}>Limpiar carrito</button>
        </div>
    )
}

export default Cart