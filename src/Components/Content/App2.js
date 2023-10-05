import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SignIn from '../../Components/Content/SignIn';
import LoginIn from '../../Components/Content/LoginIn';
import ErrorPage from '../../Components/Content/ErrorPage';
import { useState, useEffect } from 'react';
import WelcomePage from '../../Components/Content/WelcomePage';
import Dashboard from '../../Components/Content/Dashboard';
import Transfer from '../../Components/Content/Transfer';
import Deposit from '../../Components/Content/Deposit';
import Header from '../../Components/Header/Header';
import Airtime from '../../Components/Content/Airtime';
import PayBills from '../../Components/Content/PayBills';
import Data from '../../Components/Content/Data';


const App2 = () =>{
    const storeFirstName = () =>{
        let store = localStorage.getItem('fname');
        if (store) {
          return JSON.parse(localStorage.getItem('fname'))
        }
        else{
          return []
        }
      }
      const storeLastName = () =>{
        let store = localStorage.getItem('lname');
        if (store) {
          return JSON.parse(localStorage.getItem('lname'))
        }
        else{
          return []
        }
      }
      const storeEmail = () =>{
        let store = localStorage.getItem('email');
        if (store) {
          return JSON.parse(localStorage.getItem('email'))
        }
        else{
          return []
        }
      }
      const storePassword = () =>{
        let store = localStorage.getItem('password');
        if (store) {
          return JSON.parse(localStorage.getItem('password'))
        }
        else{
          return []
        }
      }
      const storePin = () =>{
        let store = localStorage.getItem('pin');
        if (store) {
          return JSON.parse(localStorage.getItem('pin'))
        }
        else{
          return []
        }
      };
    
      const storeAcct = () =>{
        let store = localStorage.getItem('acct');
        if(store){
          return JSON.parse(localStorage.getItem('acct'))
        }else{
          return []
        }
      }
     
    
      const [firstName, setFirstName] = useState(storeFirstName());
      const [lastName, setLastName] = useState(storeLastName());  
      const [email, setEmail] = useState(storeEmail());
      const [password, setPassword] = useState(storePassword());
      const [pin, setPin] = useState(storePin());
      const [balance, setBalance] =useState(parseInt(500));
      const [acctNum, setAcctNum] =useState(storeAcct`0049${Math.floor(Math.random()* 1000000)}`) 
    
    
      const handleSubmit = (e) => {
        e.preventDefault();
       
        if (firstName && lastName && email && password && pin) {
          setFirstName('')
          setLastName('')
          setEmail('')
          setPassword('')
          setPin('')
        }
      };
    
    
      useEffect(() => {
        localStorage.setItem("acct", JSON.stringify(acctNum));
      }, [acctNum]);
    
      useEffect(() => {
        localStorage.setItem("fname", JSON.stringify(firstName));
      }, [firstName]);
    
      useEffect(() => {
        localStorage.setItem("lname", JSON.stringify(lastName));
      }, [lastName]);
    
      useEffect(() => {
        localStorage.setItem("email", JSON.stringify(email));
      }, [email]);
    
      useEffect(() => {
        localStorage.setItem("password", JSON.stringify(password));
      }, [password]);
      useEffect(() => {
        localStorage.setItem("pin", JSON.stringify(pin));
      }, [pin]);
return <Router>
      <Routes>
        <Route path='/' element={<WelcomePage/>}/>
        <Route path='' element={<Header/>}/>
        <Route path='pay' element={<PayBills/>}/>
        <Route path='/data' element={<Data/>}/>
        <Route path='airtime' element={<Airtime balance={balance} setBalance={setBalance} pin={pin}/>}/>
        <Route path='/signin' element={<SignIn
        firstName={firstName}
        setFirstName={setFirstName}
        lastName={lastName}
        setLastName={setLastName}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        pin={pin}
        setPin = {setPin}
        handleSubmit={handleSubmit}
         />} />
        <Route path='/login' element={<LoginIn
      email={email} password={password}
        />} />
        <Route path='*' element={<ErrorPage/>} />
        <Route path='/deposit' element={<Deposit pin={pin} balance={balance} setBalance={setBalance}/>}/> 
        <Route path='/transfer' element={<Transfer balance={balance} setBalance={setBalance} pin ={pin}/>}/>
        <Route path='/dashboard' element={<Dashboard 
        firstName={firstName}
        lastName={lastName}
        acctNum={acctNum}
        balance={balance}
        />}/>
      </Routes>
    </Router>


}
export default App2;