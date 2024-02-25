import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import image from '../assets/images.png'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <div>
        <NavLink to="/">
          <img src={image} />
        </NavLink>

        <div>
          <NavLink to="/">
            <p>Home</p>
          </NavLink>

          <NavLink to="/cart">
            <FaShoppingCart />
          </NavLink>

        </div>
      </div>
    </div>
  )
}

export default Navbar
