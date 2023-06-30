import React from 'react'
import {Link} from 'react-router-dom'
const SignupForm = () => {
  return (
    <div className='signup template d-flex justify-content-center align-items-center 100-w vh-1 '>
   <div className='50-w p-5 rounded bg-white'>
      <form>
        <h3 className='text-center'>Sign up</h3>
        <div className='mb-2'>
          <label htmlFor='fname'>First Name</label>
          <input type='text' placeholder='Enter First Name' className='form-control'/>

        </div>
        <div className='mb-2'>
          <label htmlFor='lname'>Last Name</label>
          <input type='text' placeholder='Enter Last Name' className='form-control'/>

        </div>
        <div className='mb-2'>
          <label htmlFor='email'>Enter Email</label>
          <input type='text' placeholder='Enter Email' className='form-control'/>

        </div>
        <div className='mb-2'>
          <label htmlFor='password'>Password</label>
          <input type='password' placeholder='Enter Password' className='form-control'/>

        </div>
        
        <div className='text-end mt-2'>
          <button className='btn btn-primary'>Sign up</button>
        </div>
        <p className='text-end mt-2'>
          Already Registerd <Link to='/' className='ms-2'>Sign in</Link>
        </p>
      </form>
      </div>
    </div>
  )
}

export default SignupForm
