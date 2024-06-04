import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './Bt8.css'

export default function BT8() {
  return (
    <div>BT8
        <nav>
          <NavLink to="/admin">Admin</NavLink>        
          <NavLink to="/account">Account</NavLink>
          <NavLink to="/product">Product</NavLink> 
        </nav>
        <Outlet></Outlet>
    </div>
  )
}
