import { NavLink } from 'react-router-dom'
import './Login.css'

export default function Login() {
  return (
    <div className='container'>
        <h2>Login accout</h2>
        <div>
            <label htmlFor="">Your email</label>
            <input 
            id="email"
            name="email"
            placeholder="name@company.com"
            type="text"
             />            
        </div>
        <div>
            <label htmlFor="">Password</label>
            <input 
            id="password" 
            name="password"
            placeholder="******"
            type="password"
             />
        </div>
        <button>Login</button>
        <p>Already have an accout? <NavLink to={'/register'}>Register here</NavLink></p>
    </div>
  )
}
