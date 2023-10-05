import React from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
const ErrorPage = () => {
  const navigate = useNavigate();
  const handleError = () =>{
    navigate(-1)
  }
  return (
 <Container className='text-center'>
  <div className='mt-5'>
    <p>ERROR PAGE</p>
    <button className='btn btn-danger' onClick={handleError}>GO TO HOMEPAGE</button>
  </div>
 </Container>
  )
}

export default ErrorPage