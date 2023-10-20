import React from 'react'
import { Container } from 'react-bootstrap'
import {  useNavigate } from 'react-router-dom'
const WelcomePage = () => {
    const navigate = useNavigate()
  return (
    <Container className='mt-5 text-white'>
      <h4 className='fw-2'>SILVERBIRD BANK</h4>
        <div className='welcome'>
            <p>Welcome to the home of Convenient Banking</p>
            <div className='mt-5'>
        <button
         onClick={()=>navigate('/signin')}
         className='btn btn-danger shadow-none'>ENTER HERE</button>
            </div>
         </div>
    </Container>
  )
}

export default WelcomePage