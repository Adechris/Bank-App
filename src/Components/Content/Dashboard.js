import React from 'react'
import Header from '../Header/Header';
import { Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
const Dashboard = ({firstName, lastName, acctNum,balance}) => {
  const [userDay, setUserDay] = useState();
  const [showBal, setShowBal] = useState(false)
  const [showBal2, setShowBal2] = useState(false)
  const getMyDay = () =>{
    const dayNow = new Date();
    let Hour = dayNow.getHours()
   
    if (Hour >= 0) {
      setUserDay('Morning')
    } 
     if(Hour >= 12){
      setUserDay('Afternoon')
    }
    
    if(Hour >= 18){
      setUserDay('Evening')
    }
  }
  useEffect(()=>{
      getMyDay()
  },[]);

  return (
    <Container >
<Header/>
      <section className='dashboard'>
        <h3>Good {userDay}, {firstName}</h3>
        <main className='row mt-5'>
          <div className='col'>
          <div>
        <p>Total Balance</p>
          <div className=''>
          <p>{showBal2 ? '****.**' : balance}</p>
          </div>
          <div className=''>
          <Form>
          <Form.Check type='switch' onClick={(e)=>setShowBal2(!showBal2)} className='shadow-none' label={showBal2 ? 'Show Balance' : 'Hide Balance'}/>
          </Form>
          </div>
      </div>
          </div>
          <div className='col'>
    <h6>{lastName} {firstName}</h6>
    <div className='text-center'>
    <p>Aspire Savings Account</p>
    <p>{showBal ? '****.***' : balance}</p>
    </div>
    <div className='row'sm={3} md={3}>
      <div className='col'>
        <p>Account Number</p>
    <p>{acctNum}</p>
      </div>
      <div className='col'>
      <Form>
            <Form.Check type='switch' onClick={(e)=>setShowBal(!showBal)} className='shadow-none' label={showBal ? 'Show Balance' : 'Hide Balance'}/>
          </Form>
      </div>
    </div>
      </div>

      <div className='row mt-5 shadow-lg'>
      <div className='col'>
      <h5>Recent Transactions</h5>
      </div>
      <div className='col'>
      <Link className='links' to='/history'>View Transaction History</Link>
      </div>
      </div>

      <div className='row mt-5 shadow'>
      <div className='col'>
      <h5>My Favorite</h5>
      </div>
      <div className='col'>
      <Link className='links'>Add Favorites</Link>
      </div>
      <div className='text-center'>
      <p >OOPS! You don't have any favorites yet</p>
      </div>
      </div>
      
        </main>
      </section>
    </Container >
  )
}

export default Dashboard