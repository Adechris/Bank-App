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
import History from '../../Components/Content/History';


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
      };


      const storeBenefit = () =>{
        let store = localStorage.getItem('ben');
        if(store){
          return JSON.parse(localStorage.getItem('ben'))
        }
        return []
      }
     
      const storeAmount= () =>{
        let store = localStorage.getItem('amt');
       if(store){
        return JSON.parse(localStorage.getItem('amt'))
       }
       return []
      }

      const storeDesc = () =>{
        let store = localStorage.getItem('des');
        if(store){
          return JSON.parse(localStorage.getItem('des'))
        }
        return []
      }

      // const storeBalance = () =>{
      //   let store = localStorage.getItem('balance');
      //   if(store){
      //     return JSON.parse(localStorage.getItem('balance'))
      //   }
      //   return []
      // }
      
     
    
      const [firstName, setFirstName] = useState(storeFirstName());
      const [lastName, setLastName] = useState(storeLastName());  
      const [email, setEmail] = useState(storeEmail());
      const [password, setPassword] = useState(storePassword());
      const [pin, setPin] = useState(storePin());
      const [balance, setBalance] =useState(Number(500000));
      const [acctNum, setAcctNum] =useState(`0049${Math.floor(Math.random()* 1000000)}`) 
    
      const [benefit, setBenefit] = useState(storeBenefit())
      const [amount, setAmount] = useState(storeAmount()) 
      const [desc, setDesc] = useState(storeDesc())
    
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
        localStorage.setItem("ben", JSON.stringify(benefit));
      }, [benefit]);
      
      useEffect(() => {
        localStorage.setItem("balance", JSON.stringify(balance));
      }, [balance]);

      useEffect(() => {
        localStorage.setItem("amt", JSON.stringify(amount));
      }, [amount]);
      useEffect(() => {
        localStorage.setItem("des", JSON.stringify(desc));
      }, [desc]);

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
        <Route path='/deposit' element={<Deposit 
        pin={pin} 
        balance={balance} 
        setBalance={setBalance}
        amount={amount}
        setAmount={setAmount}
        
        />}/>

        <Route path='/transfer' element={<Transfer
         benefit={benefit}
         setBenefit={setBenefit}
         desc={desc}
         setDesc={setDesc}
         amount={amount}
         setAmount={setAmount} 
         balance={balance} 
        setBalance={setBalance} 
         pin ={pin}/>}/>

        <Route path='/dashboard' element={<Dashboard 
        firstName={firstName}
        lastName={lastName}
        acctNum={acctNum}
        balance={balance}
        />}/>
        <Route path='history' element={<History 
         benefit={benefit}
         setBenefit={setBenefit}
         desc={desc}
         setDesc={setDesc}
         amount={amount}
         setAmount={setAmount}
        />}/>
      </Routes>
    </Router>


}
export default App2;