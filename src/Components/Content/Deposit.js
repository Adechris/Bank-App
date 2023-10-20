import React, {useState} from 'react'
import { Container } from 'react-bootstrap'
import Header from '../Header/Header';
import { useNavigate } from 'react-router-dom';

function Deposit({pin, balance, setBalance, amount, setAmount}) {
    // const [amount, setAmount] = useState();
    const [myPin, setMyPin] = useState();

    const navigate = useNavigate()

    const handleDeposit = (e) =>{
            e.preventDefault();
            const newBalance = Number(balance).toFixed(2) - Number(amount).toFixed(2);
            setBalance(newBalance)
            if (pin!==myPin) {
                alert('Incorrect Pin')
            } else {
                navigate('/dashboard')
            }
    }
  return (


        <Container>
        <Header/>
        <div className='mt-5 shadow-lg py-5 px-5'>
        <div className="text-center text-white">
          <h3> Withdraw</h3> 
        </div>
            <form onSubmit={handleDeposit}>
    <input 
    className='form-control shadow-none mt-3' 
    type='number' 
    placeholder='Amount'
    value={amount}
    onChange={(e)=>setAmount(e.target.value)}
    
    />

    <input 
    className='form-control shadow-none mt-3' 
    type='number' 
    placeholder='Pin'
    value={myPin}
    onChange={(e)=>setMyPin(e.target.value)}
    
    />
    <button className='btn btn-danger mt-3 shadow-none'>SEND</button>
            </form>
        </div>

    </Container>


  )
}

export default Deposit