import Loader from './Loader'

const ItemDetail = ({ data }) => {
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

        <div className="card-actions justify-end">
          <button className="btn bg-error shadow">Agregar al carrito</button>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail