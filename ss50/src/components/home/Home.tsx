import { NavLink, Outlet } from 'react-router-dom'
import './Home.css'

export default function Home() {
  return (
    <div>
      Đây là trang chủ
        <nav>
          <NavLink to="">Home</NavLink>        
          <NavLink to="/contact">Contact</NavLink> 
        </nav>
        <Outlet></Outlet>
    </div>
  )
}
