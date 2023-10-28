import React from 'react'
import "./register.css"
import { Link } from 'react-router-dom'

function Register() {
  return (
    
   
    <div className='register'>
      
      <form action="" className="registerform">
      <span className="registertitle">Register</span>
      <label>Username</label>
        <input type="text" name='username' className='registerinput' placeholder='Enter your username' />
        <label>Email</label>
        <input type="email" name='email' className='registerinput' placeholder='Enter your email' />
        <label>Password</label>
        <input type="password" name='password' className='registerinput'  placeholder="Enter password" /> 
        
        
        <button className="loginbutton1">register</button>
        <span className='accountQ'>already have an account?</span> 
      
      <Link to="/login">
        <button className="registerbutton1">login</button>
        </Link>
      </form>
      
        

    </div>
  )
}

export default Register
