import React from 'react';
import UserContext from '../usercontext';
import { useContext, useState} from 'react';

import Bankcard from './bankcard';
import {Link} from 'react-router-dom'
import '../App.css';

function Login(){
    const cont = useContext(UserContext);
    const customers = cont.users;
    const [show,setShow] = useState(true);
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [disable,setDisable] = useState(true);
    const [status,setStatus] = useState('');

    function checkEmptyField(field, fieldName){
      if (!field) {
          setStatus(`Error : Enter appropriate value in '${fieldName}' field `)
          setTimeout(() => setStatus(''), 3000)
          return true
      }
      return false
    }


    function setInput(e){
      if (e.currentTarget.id === "email") setEmail(e.currentTarget.value);
      if (e.currentTarget.id === "password") setPassword(e.currentTarget.value);
      setDisable(false);
    }

    function validateLogin(emailVal,passwordVal) {
      const userEmail = customers.filter( customer => customer.email === emailVal);
    
      if(userEmail.length === 1){
        // console.log("userEmail :"+ userEmail[0].email);
        // console.log("userPassword :"+ userEmail[0].password);
        console.log("before login active:"+ userEmail[0].active);
        if(userEmail[0].password === passwordVal) {
          setStatus("Valid username and password");
          customers.map((customer) => customer.active = false );
          userEmail[0].active = true;
          console.log("after login active:"+ userEmail[0].active);
          return true;
        }
        else
          setStatus("Wrong password");
          return false;
      }
      else
        setStatus("userEmail doesn't exist");
        return false;
      }

    function handleLogin(){
      if (checkEmptyField(email,'email')) return;
      if (checkEmptyField(password,'password')) return;
      if (!(validateLogin(email,password))) return;
      setShow(false);
      setStatus("Login Successful : You can deposit/ withdraw by clicking the corresponding tabs");
    }

    function depositLink(){
      document.getElementById('deposit').classList.add('active');
      document.getElementById('login').classList.remove('active');
    }

    function withdrawLink(){
      document.getElementById('withdraw').classList.add('active');
      document.getElementById('login').classList.remove('active');
    }

   return(
    <Bankcard
      bgcolor="primary"
      header="Login"
      status={status}
      body={show ? (
          <>
              Email Address <br />
              <input type="email" className="form-control" id="email" value={email} onChange={setInput} /> <br />
              Password <br />
              <input type="password" className="form-control" id="password" value={password} onChange={setInput} /> <br />
              <button disabled = {disable} type="submit" className="btn btn-light" onClick={handleLogin}>Login</button>
          </>
      ) : (
          <>
              {/* <button type="submit" className="btn btn-light" href="#/deposit/" onClick={handleClick}>Deposit</button><br/> */}
              <Link to="/deposit" className="btn btn-light" onClick = {depositLink} >Deposit</Link><br/><br/>
              <Link to="/withdraw" className="btn btn-light" onClick = {withdrawLink} >Withdraw</Link><br/><br/>
          </>
              
      )}
   />
    );
}

export default Login;
  