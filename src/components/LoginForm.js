import React from 'react'
import './style.css'
import {Link} from 'react-router-dom'


const LoginForm = () => {
  return (
    <div className='login template d-flex justify-content-center align-items-center 100-w vh-1 '>
    <div className='50-w p-5 rounded bg-white'>
      <form>
        <h3 className='text-center'>Sign In</h3>
        <div className='mb-2'>
          <label htmlFor='email'>Email</label>
          <input type='email' placeholder='Enter Email' className='form-control'/>
        </div>
        <div className='mb-2'>
          <label htmlFor='password'>password</label>
          <input type='password' placeholder='Enter Password' className='form-control'/>

        </div>
        <div className='mb-2'> 
        <input type='checkbox' className='customer-control customer-checkbox' id='check'/>
        <label htmlFor='check' className='customer-input-label'>
          Remember me
        </label>
        </div>
        <Link to="/Todos">  
       
        <div className='d-grid'>
          <button className='btn btn-primary'>Sign in</button>
        </div>
        </Link>
        <p className='text-end mt-2'>
          Forgot <a href=''>Password?</a><Link to='/SignupForm' className='ms-2'>Sign Up</Link>
          </p>
      </form>
      </div>
    </div>
  )
}

export default LoginForm
