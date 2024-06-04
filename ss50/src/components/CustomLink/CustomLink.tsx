import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function CustomLink() {
  return (
    <div>CustomLink <br />
        <Link to='/home-page'>HomePage</Link>
        <Outlet></Outlet>
    </div>
  )
}
