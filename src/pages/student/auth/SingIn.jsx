import React from 'react'
import './SingIn.css'
const SingIn = () => {
  return (
    <div className='singIn'>
    <form className="form">
      <p className="title">Sing In </p>
      <p className="message">Welcome Back </p>

      <label>
        <input required placeholder type="email" className="input" />
        <span>Email</span>
      </label> 
      <label>
        <input required placeholder type="password" className="input" />
        <span>Password</span>
      </label>
      <button className="submit">Submit</button>
      <p className="signin">Dont have an acount ? <a href="#">SignUp</a> </p>
    </form>
    
        </div>
  )
}

export default SingIn