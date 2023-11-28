import React from 'react'
import "./login.css"
import { Link } from 'react-router-dom'


function Login () {
 
  return (
   
    <div className='login'>
      <form action="" className="loginform">
      <span className="logintitle">Login</span>
        <label>Email</label>
        <input type="text" className='logininput' placeholder='Enter your email....' />
        <label>Password</label>
        <input type="password" className='logininput'  placeholder="Enter password" />   
        <button className="loginbutton">login</button>  
        <span className='accountQ'>Dont have an account?</span>
      <Link to="/register">
        <button className="registerbutton">register </button>
        </Link>
      </form>
    </div>
  )
}

export default Login
