import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import logo from '../logo/logo.png'


function NavBar() {

  const cart = useSelector((state) => state.cart);
  return (
    <div>

      <nav className="flex flex-row justify-between items-center h-20 max-w-6xl mx-auto">

        <NavLink to="/">
          <div className='ml-5'>
            <img className='h-14' src={logo} />
          </div>
        </NavLink>

        <div className="flex flex-row items-center gap-x-6 mr-6 text-slate-100 -tracking-tighter font-medium">
          <NavLink to="/">
            <p>Home</p>
          </NavLink>

          <NavLink to="/cart">
            <div className='relative'>
              <FaShoppingCart className='text-2xl' />
              {
                cart.length > 0 &&
                <span className="absolute -top-1 -right-2 bg-green-600 rounded-full text-sm w-5 h-5 grid justify-items-center animate-bounce text-white">
                  {cart.length}
                </span>
              }
              
            </div>
          </NavLink>
          
        </div>
      </nav>
    </div>
  )
}

export default NavBar