import React from 'react'
import { NavLink } from 'react-router-dom'
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <div className="navbar bg-error">
            <div className="flex-1">
                <NavLink to='/' className="btn btn-ghost normal-case font-serif text-3xl">Georgie's Books</NavLink>
            </div>
            <div className="dropdown dropdown-left">
                <label tabIndex={0} className="btn btn-sm m-1 bg-error">Menu</label>
                <ul tabIndex={0} className="dropdown-content menu p-2 outline outline-2 outline-red-400 shadow bg-base-100 rounded-box w-52">
                    <li><NavLink to={'/'}>Todos los productos</NavLink></li>
                    <li><NavLink to={'/cart'}>Carrito</NavLink></li>
                    <li><NavLink to={'/category/cuento'}>Cuento</NavLink></li>
                    <li><NavLink to={'/category/poesia'}>Poesía</NavLink></li>
                    <li><NavLink to={'/category/ensayo'}>Ensayo</NavLink></li>
                    <li><NavLink to={'/category/entrevistas'}>Entrevistas/Conferencias</NavLink></li>
                    <li><NavLink to={'/category/colaboracion'}>En colaboración</NavLink></li>
                    <li><NavLink to={'/category/antologia'}>Antología</NavLink></li>
                </ul>
            </div>
            <CartWidget />
        </div>
    )
}

export default NavBar