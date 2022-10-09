import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <div className="navbar bg-error">
            <div className="flex-1">
                <Link to='/' className="btn btn-ghost normal-case font-serif text-3xl">Dobby's Books</Link>
            </div>
            <div className="dropdown dropdown-left">
                <label tabIndex={0} className="btn btn-sm m-1">Menu</label>
                <ul tabIndex={0} className="dropdown-content menu p-2 outline shadow bg-base-100 rounded-box w-52">
                    <li><Link to={'/PZT'}>Products</Link></li>
                    <li><Link to={'/item'}>ItemList</Link></li>
                    <li><Link to={'/'}>About us</Link></li>
                    <li><Link to={'/'}>Shipping</Link></li>
                    
                </ul>
            </div>
            <CartWidget /> 
        </div>
    )
}

export default NavBar