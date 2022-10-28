import ItemCounter from "./ItemCounter"
import { useState } from "react";
import { Link } from "react-router-dom";

const ItemDetail = ({ data }) => {

  const [addToCart, setAddToCart] = useState(false)

  const onAdd = (quantity) => {
    setAddToCart(true)
  }

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure className="max-w-4xl px-5"><img src={data.img} alt={data.title} width={300} /></figure>
      <div className="card-body">
        <h2 className="card-title">${data.price}</h2>
        <div>
          <p>Título: {data.title}</p>
          <p>Género: {data.category}</p>
        </div>
        <p>Descripción: {data.description}</p>

      <div className="card-actions justify-center">
      {
        addToCart ? <Link to='/cart'>Terminar compra</Link>
        :
        <ItemCounter initial={1} stock={5} onAdd={onAdd} />
      }

        <div className="card-actions justify-end">
          <button disabled={stock <= 0} onClick={() => onAdd(count)} className="btn bg-error shadow">Agregar al carrito</button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default ItemDetail