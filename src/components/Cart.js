import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/CartContext'
import ItemCart from './ItemCart'
import { addDoc, collection, getFirestore } from 'firebase/firestore';

export const UserForm = ({ setUser }) => {

    const updateUser = (event) => {
        setUser(user => ({ ...user, [event.target.name]: event.target.value }))
        console.log(event.target.value);
    }

    return (
        <div className='card lg:card-side bg-base-100 shadow-xl'>
            <div className='m-3'>Nombre: <input onChange={updateUser} name='name' type='text' className='border boder-indigo-800' /> </div>
            <div className='m-3'>Teléfono: <input onChange={updateUser} name='phone' type='tel' className='border boder-indigo-800' /> </div>
            <div className='m-3'>Email: <input onChange={updateUser} name='email' type='email' className='border boder-indigo-800' /> </div>
        </div>
    )
}

const Cart = () => {
    const { cart, totalPrice, clearCart } = useCartContext()
    const [user, setUser] = useState({})

    const putOrder = () => {
        const order = {
            buyer: user,
            items: cart.map(product => ({ id: product.id, title: product.title, price: product.price, quantity: product.quantity })),
            total: totalPrice()
        }

        const db = getFirestore()
        const ordersCollection = collection(db, 'orders')
        addDoc(ordersCollection, order)
            .then(({ id }) => alert(`Su compra se ha registrado con el ID: ${id}`))
    }


    if (cart.length === 0) {
        return (
            <>
                <p>No hay productos en el carrito</p>
                <Link to='/'><button className='btn btn-outline btn-error'>Hacer compras</button></Link>
            </>
        )
    }

    return (
        <>
            <div>
                {cart.map(product => <ItemCart key={product.id} product={product} />)}
                <p className='text-xl font-bold bg-error'>Precio total: ${totalPrice()}</p>
                <UserForm setUser={setUser} />
                <button className="btn btn-outline btn-error" onClick={() => clearCart()}>Vaciar carrito</button>
                <button className='btn btn-outline btn-error' onClick={putOrder}>Finalizar compra</button>  
            </div>


        </>
    )
}

export default Cart