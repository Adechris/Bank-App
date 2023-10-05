import React from "react";
import { Container } from "react-bootstrap";
import Header from "../Header/Header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Transfer = ({ balance, pin, setBalance }) => {
  const [benefit, setBenefit] = useState();
  const [amount, setAmount] = useState();
  const [desc, setDesc] = useState();
  const [myPin, setMyPin] = useState();

  const navigate = useNavigate()

  const handleTransfer = (e) => {
    e.preventDefault()
    const newBalance = balance - Number(amount).toFixed(2);
    setBalance(newBalance)
if (pin!==myPin) {
    alert('Incorrect Pin')
} 
else if(balance < amount){
  alert('Insufficient Fund')
}
else {
  alert(`You transferred ${amount} to ${benefit} at ${new Date().toLocaleTimeString()}`)
    navigate('/dashboard')
} 
    
  };
  return (
    <Container>
      <Header />
      <div className="mt-5 shadow-lg py-5 px-5">
      <div className="text-center text-white">
          <h3> Transfer</h3> 
        </div>
        <form onSubmit={handleTransfer}>
          <input
            className="form-control shadow-none"
            value={benefit}
            onChange={(e) => setBenefit(e.target.value)}
            placeholder="Beneficiary Account Number"
            type="number"
          />

          <input
            className="form-control shadow-none mt-3"
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <textarea
            className="form-control shadow-none mt-3"
            type="text"
            placeholder="Description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />

            <input
            className="form-control shadow-none mt-3"
            type="number"
            placeholder="Pin"
            value={myPin}
            onChange={(e) => setMyPin(e.target.value)}
          />

          <button className="btn btn-danger mt-3 shadow-none">SEND</button>
        </form>
      </div>
    </Container>
  );
};

export default Transfer;
