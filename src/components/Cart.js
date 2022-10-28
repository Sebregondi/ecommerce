import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/CartContext'
import ItemCart from './ItemCart'

const Cart = () => {
    const { cart, totalPrice } = useCartContext()

    if (cart.length === 0) {
        return (
            <>
            <p>No hay productos en el carrito</p>
            <Link to='/'>Hacer compras</Link>
            </>
        )
    }

    return (
        <>
        {cart.map(product => <ItemCart key={product.id} product={product} />)}
        <p>Precio total: ${totalPrice()}</p>
        </>
    )
}

export default Cart