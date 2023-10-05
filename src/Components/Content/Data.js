import React,{useState} from 'react'
import { Container } from 'react-bootstrap';
import Header from '../Header/Header';

const Data = () => {
  const [data, setData] = useState(false)

  return (
  <Container>
            <Header/>
            <section className='mt-5'>
            <button className='btn btn-danger' onClick={()=>setData(!data)}>Data Subscription</button>
                <div>
                    <input
                    type='number'
                    className='form-control shadow-none mt-3 w-50'
                    placeholder='Phone Number'
                    />
                </div>
              <p>
                {data && <div>
                    <form>
                    {/* <label className='label'>Data</label> */}
                <select
                 type='number'
                 placeholder='Amount'
                 className='form-control shadow-none w-50 mt-2'
                 >
                  <option>choose...</option>
                  <option>#100 for 100mb valid for 1 day</option>
                  <option>#100 for 40mb valid for 1 day</option>
                  <option>#200 for 1Gb valid for 7days</option>
                  <option>#300 for 1Gb valid for 7days</option>
                  <option>#500 for 2Gb valid for 7days</option>
                  <option>#1000 for 1Gb valid for 30days</option>
                  <option>#1000 for 1.5Gb valid for 7days</option>
                 </select>
                <button className='btn btn-danger mt-3'>Buy Data</button>
                    </form>
                 
                </div>}
              </p> 
            </section>

  </Container>
  )
}

export default Data