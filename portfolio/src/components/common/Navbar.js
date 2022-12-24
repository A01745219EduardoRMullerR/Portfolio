import React, { useContext } from 'react'; 
import { Link, NavLink } from 'react-router-dom'; 

export const Navbar = () => {

    return( 
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark"> 
            <Link className='navbar-brand' to='/about'>
                About me
            </Link>

            <div className='navbar-collapse'>
                <div className='navbar-nav'>
                    <NavLink className={({ isActive }) => isActive ? "active" : "nav-item nav-link"} 
                        exact="true" 
                        to="/about">
                            About
                    </NavLink> 
                </div>
            </div>
        </nav> 
    ) 
}