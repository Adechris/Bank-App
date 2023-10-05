import React, {  } from "react";
import { Container } from "react-bootstrap";
import {  useNavigate } from "react-router-dom";

const SignIn = ({
    firstName, 
    setFirstName,
     lastName, 
     setLastName, 
     email, 
     setEmail, 
     password, 
     setPassword,
     pin,
     setPin,
      handleSubmit
    
    }) => {
  const navigate = useNavigate();

const canSave = Boolean(firstName) && Boolean(lastName) && Boolean(email) && Boolean(password) && Boolean(pin)
  
  return (
    <Container className="signin text-white">
      <h4>SILVER BANK</h4>
      <div className='text-center mt-5'>
      <p>Welcome, create your Silver Bank sign up account here. Enjoy futuristic banking practices.</p>
      </div>
      <form onSubmit={handleSubmit}>
        <label className="label">First Name</label>
        <input
          className="form-control shadow-none"
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label className="label">Last Name</label>
        <input
          className="form-control shadow-none"
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label className="label">Email</label>
        <input
          className="form-control shadow-none"
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="label">Password</label>
        <input
        placeholder="password"
          className="form-control shadow-none"
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label className="label">Pin</label>
        <input
        placeholder="ATM card pin"
          className="form-control shadow-none"
          type="text"
          value={pin}
          maxLength={4}
          minLength={4}
          onChange={(e) => setPin(e.target.value)}
        />
        <button className="btn btn-primary mt-3" disabled={!canSave} onClick={()=>navigate('/login')}>
          Create Account
        </button>
      </form>
    </Container>
  );
};

export default SignIn;
