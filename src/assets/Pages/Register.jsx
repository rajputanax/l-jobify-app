import React from 'react'
import { Link } from 'react-router-dom'
import Wrapper from '../wrappers/RegisterAndLoginPage'
import Logo   from '../../components/Logo'
import   FormRow from '../../components/FormRow'
const Register = () => {
  return (
    <Wrapper >
      <form className='form'>
        <Logo />
        <h4>Register</h4>
        <FormRow type='text' name='name' id='name' placeholder='Enter Name'  labelText='name' value='name'/>
        <FormRow type='text' name='lastname' id='lastname' placeholder='last Name'  labelText='last name' />
        <FormRow type='text' name='location' id='location' placeholder='location'  labelText='Address' />
        <FormRow type='email' name='email' id='name' placeholder='email'  labelText='email' />
        <FormRow type='password' name='password' id='password' placeholder='password'  labelText='password' />
        <button className="btn btn-block" type='submit'>submit</button>
        <p>
          Already a member?
          <Link to='/login' className='member-btn'>Login</Link>
        </p>
      </form>
    </Wrapper>
  )
}

export default Register;