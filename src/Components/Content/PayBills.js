import React from 'react'
import { Container } from 'react-bootstrap'
import Header from '../Header/Header'
import { useState } from 'react'

const PayBills = () => {
  const [showBill, setShowBill] = useState(false)
  const [dstvBill, setDstvBill] = useState(false)
  const [rent, setRent] = useState(false)
  const [Water, setWater] = useState(false);



  const handleBills = (e) =>{
    e.preventDefault()
  }
 
  return (
    <Container>
            <Header/>
            <div className='mt-5 py-4 px-4'>
              <form onSubmit={handleBills}>
              <button className='btn btn-danger' onClick={()=>setShowBill(!showBill)}>Electricity Bills</button>
              <p>{showBill 
              && <div>
                <label className='label'>Electricity Bill</label>
                <input
                 type='number'
                 placeholder='Amount...'
                 className='form-control shadow-none w-50 mt-2'/>
                <input
                 type='number'
                 className='form-control shadow-none w-50 mt-2'
                 placeholder='Account Number...'/>
                <input
                 type='number'
                 className='form-control shadow-none w-50 mt-2'
                 placeholder='Pin...'/>
                 <button className='btn btn-danger my-3 shadow-none'>Pay</button>
                </div>
             }
              </p>
              <button className='btn btn-danger' onClick={()=>setDstvBill(!dstvBill)}>DSTV Subscription</button>
              <p>
                {dstvBill && <div>
                  <label className='label'>Dstv Subscription</label>
                <input
                 type='number'
                 placeholder='Amount...'
                 className='form-control shadow-none w-50 mt-2'/>
                <input
                 type='number'
                 placeholder='Account Number...'
                 className='form-control shadow-none w-50 mt-2'/>
                </div>}
              </p>
           
              <button className='btn btn-danger' onClick={()=>setRent(!rent)}>House Rent</button>
              <p>
                {rent && <div>
                  <label className='label'>House Rent</label>
                <input
                placeholder='Amount...'
                 type='number'
                 className='form-control shadow-none w-50 mt-2'
                 />
                <input
                 type='number'
                 placeholder='Account Number'
                 className='form-control shadow-none w-50 mt-2'
                 />
                </div>}
              </p>
           
              <button className='btn btn-danger' onClick={()=>setWater(!Water)}>Water Bill</button>
              <p>
                {Water && <div>
                  <label className='label'>Water Bill</label>
                <input
                 type='number'
                 placeholder='Amount'
                 className='form-control shadow-none w-50 mt-2'
                 />
                <input
                 type='number'
                 placeholder='Account Number'
                 className='form-control shadow-none w-50 mt-2'
                 />
                </div>}
              </p>
           
            
              </form>
            </div>
        
    </Container>
  )
}

export default PayBills