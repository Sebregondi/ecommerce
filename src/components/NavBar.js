import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <div className="navbar bg-error">
            <div className="flex-1">
                <Link to='/' className="btn btn-ghost normal-case font-serif text-3xl">Georgie's Books</Link>
            </div>
            <div className="dropdown dropdown-left">
                <label tabIndex={0} className="btn btn-sm m-1 bg-error">Menu</label>
                <ul tabIndex={0} className="dropdown-content menu p-2 outline outline-2 outline-red-400 shadow bg-base-100 rounded-box w-52">
                    <li><Link to={'/'}>ItemListContainer</Link></li>
                    <li><Link to={'/category/:id'}>ItemList</Link></li>
                    <li><Link to={'/count'}>ItemCount</Link></li>
                </ul>
            </div>
                <CartWidget />
            </div>
    )
}

export default NavBar