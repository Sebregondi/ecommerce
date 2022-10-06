import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <div className="navbar bg-error">
            <div className="flex-1">
                <Link to='/' className="btn btn-ghost normal-case text-xl">Dobby's Books</Link>
            </div>
            <div className="dropdown">
                <label tabIndex={0} className="btn m-1">Menú</label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><Link to={'/PZT'}>Products</Link></li>
                </ul>
            </div>
            <CartWidget /> 
        </div>
    )
}

export default NavBar