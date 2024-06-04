
import { NavLink } from 'react-router-dom'
import './Register.css'

export default function Register() {
  return (
    <div className='container'>
        <h2>Create accout</h2>
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
        <div>
            <label htmlFor="">Confirm password</label>
            <input 
            id="password" 
            name="password"
            placeholder="******"
            type="password"
             />
        </div>
        <button>Create an accout</button>
        <p>Already have an accout? <NavLink to={'/login'}>Login here</NavLink></p>
    </div>
  )
}
