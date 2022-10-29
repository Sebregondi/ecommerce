import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/CartContext'
import ItemCart from './ItemCart'
import { addDoc, collection, getFirestore } from 'firebase/firestore';

const Cart = () => {
    const { cart, totalPrice } = useCartContext()

    const order = {
        buyer: {
            name: 'Esteban',
            phone: '1124539823',
            email: 'esteban@esteban.com'
        },
        items: cart.map(product => ({ id: product.id, title: product.title, price: product.price, quantity: product.quantity })),
        total: totalPrice()
    }

const clickHandler = () =>{
    const db = getFirestore()
    const ordersCollection = collection(db, 'orders')
    addDoc(ordersCollection, order)
        .then(({ id }) => alert(`Su compra se ha registrado con el ID: ${id}`))
}


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
        <button className='btn' onClick={clickHandler}>Emitir orden de compra</button>
        </>
    )
}

export default Cart