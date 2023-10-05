import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";

const Airtime = ({ pin, balance, setBalance }) => {
  const [amount, setAmount] = useState();
  const [phoneNum, setPhoneNum] = useState();
  const [myPin, setMyPin] = useState();

  const navigate = useNavigate();

  const handleAirtime = (e) => {
    e.preventDefault();
    if (amount && phoneNum && myPin) {
        const newBalance = balance - Number(amount).toFixed(2);
        setBalance(newBalance);
        if (pin!== myPin) {
            alert("Incorrect Pin");
          } 
          else if(newBalance){
              alert(`You bought airtime of ${amount} to ${phoneNum} at ${new Date().toLocaleTimeString()}`);
            navigate("/dashboard");

          }
      
    }
    
  };
  return (
    <Container>
      <Header />
      <div className="mt-5 shadow-lg py-5 px-5">
        <div className="text-center text-white">
          <h3> Buy Airtime</h3> 
        </div>
        <form onSubmit={handleAirtime}>
          <input
            className="form-control shadow-none mt-3"
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <input
            className="form-control shadow-none mt-3"
            type="number"
            placeholder="Phone Number"
            value={phoneNum}
            onChange={(e) => setPhoneNum(e.target.value)}
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

export default Airtime;
