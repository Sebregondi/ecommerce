import React from "react";
import { useCartContext } from "../context/CartContext";

const ItemCart = ({ product }) => {
    const { removeProduct } = useCartContext()

return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure className="max-w-4xl px-5"><img src={product.img} alt={product.title} width={100} /></figure>
        <div className="card-body">
            <h2 className="card-title">${product.price}</h2>
            <div>
                <p>Título: {product.title}</p>
                <p>Cantidad: {product.quantity}</p>
                <p>Subtotal: ${product.quantity * product.price}</p>
                <button className="btn btn-outline btn-error " onClick={() => removeProduct(product.id)}>Eliminar</button>
            </div>

        </div>
    </div>
)
}
export default ItemCart