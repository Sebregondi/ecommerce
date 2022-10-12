import React from 'react'
import { Link, useParams } from 'react-router-dom'
import CartWidget from './CartWidget'
import { products } from './products'

const categories = () => {

    const {genero} = useParams()
    const [cat, setCat] = useState({})

    useEffect(() => {
      getCategories().then (response => {
        setCat (response)
      })
    }, [])
    

const getCategories = () => {
    return new Promise((resolve) => {
        resolve (products.find (p => p.genero = p.genero))
    })
}

const poeHandler = () => {
    
}

}

const NavBar = () => {
    return (
        <div className="navbar bg-error">
            <div className="flex-1">
                <Link to='/' className="btn btn-ghost normal-case font-serif text-3xl">Dobby's Books</Link>
            </div>
            <div className="dropdown dropdown-left">
                <label tabIndex={0} className="btn btn-sm m-1 bg-error">Menú</label>
                <ul tabIndex={0} className="dropdown-content menu p-2 outline outline-2 outline-red-400 shadow bg-base-100 rounded-box w-52">
                    <li><Link to={'/'}>Productos</Link></li>
                    <li className="dropdown dropdown-left">
                        <label tabIndex={0}><Link to={'/category/:id'}>Categorias</Link></label>
                        <li tabIndex={0} className="dropdown-content dropdown-right menu p-2 outline outline-2 outline-red-400 shadow bg-base-100 rounded-box w-52"> 
                            <li onClick={poeHandler}>Poesía</li>
                            <li onClick={cueHandler}>Cuento</li>
                            <li onClick={colHandler}>En colaboración</li>
                            <li onClick={entHandler}>Entrevistas/Conferencias</li>
                        </li> 
                    </li>
                    <li><Link to={'/count'}>ItemCount</Link></li>
                </ul>
            </div>
            <CartWidget /> 
        </div>
    )
}

export default NavBar