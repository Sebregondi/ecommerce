import React from "react";
import { useCartContext } from "../context/CartContext";

const ItemCart = ( {product} ) => {
    const {removeProduct} = useCartContext()

    return(
        <div>
            <div>
                <p>Título: {product.title}</p>
                <p>Cantidad: {product.quantity}</p>
                <p>Precio unitario: ${product.price}</p>
                <p>Subtotal: ${product.quantity * product.price}</p>
                <button className="btn" onClick={ () => removeProduct(product.id) }>Eliminar</button>
            </div>
        </div>
    )
}

export default ItemCart