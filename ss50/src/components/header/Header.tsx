import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <div>Header
        <nav>
          <NavLink to="">Home</NavLink>        
          <NavLink to="/product">Product</NavLink> 
          <NavLink to="/detail">Detail</NavLink>
        </nav>
        <Outlet></Outlet>
    </div>
  )
}
