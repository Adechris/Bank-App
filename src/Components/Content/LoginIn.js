import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
const LoginIn = ({email, password}) => {
    const [myEmail, setMyEmail] = useState('')
    const [myPassword, setMyPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) =>{
      e.preventDefault();
     
     
      navigate('/dashboard')
     
    }
    const canSave = Boolean(myEmail) && Boolean(myPassword) && Boolean(confirmPassword)
  return (
    <Container className=' text-white'>
      <div className='mt-5'>
          <h4>SILVER BANK</h4>
      </div>
      <div className='text-center'>
        <p>Welcome, register your details here!<br/> Thanks for banking with us.</p>
      </div>
          <section className='login'>
          <form onSubmit={handleLogin}>
            <label>Email</label>
            <input
            type='email'
            className='form-control shadow-none'
            value={myEmail}
            onChange={(e)=>setMyEmail(e.target.value)}
            />
            <label className='label'>Password</label>
            <input
            type='password'
            className='form-control shadow-none'
            value={myPassword}
            onChange={(e)=>setMyPassword(e.target.value)}
            />
            <label className='label'>Confirm Password</label>
            <input
            type='password'
            className='form-control shadow-none'
            value={confirmPassword}
            onChange={(e)=>setConfirmPassword(e.target.value)}
            />
            <button className='btn btn-danger mt-3' disabled={!canSave} type='submit'>LOGIN</button>
        </form>
          </section>
       

    </Container>
  )
}

export default LoginIn