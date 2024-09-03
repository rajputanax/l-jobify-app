import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {


  return (
    <Wrapper >
    <form className='form'>
      <Logo />
      <h4>Login</h4>
      <FormRow type='email' name='email' id='name' placeholder='email'  labelText='email' />
   <FormRow type='password' name='password' id='password' placeholder='password'  labelText='password' />
   <button className="btn btn-block" type='submit'>submit</button>
   <button className="btn btn-block" type='button'>Explore App</button>
      <p>
        Dont have an account?
        <Link to='/register' className='member-btn'>register</Link>
      </p>
    </form>
  </Wrapper>
  )
}
export default Login


import Wrapper from '../wrappers/RegisterAndLoginPage'
import    Logo   from '../../components/Logo'
import   FormRow from '../../components/FormRow'

   
   
   