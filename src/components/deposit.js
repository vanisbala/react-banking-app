import React from 'react';
import { useContext, useState, useEffect } from 'react';
import UserContext from '../usercontext';

import Bankcard from './bankcard';
import '../App.css';

function Deposit(){
    const cont = useContext(UserContext);
    const customers = cont.users; 
    
    const activeUser = customers.filter((customer) => {
        if(customer.active === true){
            console.log(`${customer.name} is active and his balance is ${customer.balance}`);
            return customer;
        }
     });  
    
    console.log(activeUser[0].name) 
    const [status,setStatus] = useState(null);
    const [balance,setBalance] = useState(parseInt(activeUser[0].balance));
    const [deposit,setDeposit] = useState(parseInt(0));
    const [show,setShow] = useState(true);
    const [disable,setDisable] = useState(true);
    const balanceText = `Balance : ${balance}`;

    function addDeposit(e){
        setDeposit(e.currentTarget.value);
        setDisable(false);
    }

    function checkEmptyField(field, fieldName) {
        if (!field) {
            setStatus(`Error : Enter the deposit amount `)
            setTimeout(() => setStatus(''), 3000)
            return true
        }
        return false
    }

    function checkNegativeDeposit(field) {
        if (parseInt(field) <= 0) {
            setStatus(`Error : Zero or Negative amounts can't be accepted `)
            setTimeout(() => setStatus(''), 3000)
            return true
        }
        return false
    }

    function checkDepositIsNumber(field) {
        if(isNaN(parseInt(field))){
            setStatus(`Error : Only Numbers are accepted `)
            setTimeout(() => setStatus(''), 3000)
            return true
        }
        return false
    }

    function clearForm(){
        setDeposit('');
        setShow(true);
        setStatus('');
    }

    useEffect(()=> {
        
            customers.map((customer) => {
                if(customer.active === true){
                    customer.balance = balance;
                    console.log(`New balance of active user: ${customer.balance}`);
                }
        })

    },[balance])
        

    function handleDeposit(e){
        if(checkEmptyField(deposit,'deposit')) return;
        if(checkNegativeDeposit(deposit)) return;
        if(checkDepositIsNumber(deposit)) return;

        setBalance(balance + parseInt(deposit));

        setShow(false);

        setStatus(`Success: Your Amount got Deposited`)
    }

    return(
        <Bankcard
            bgcolor="primary"
            header="Deposit Amount"
            text = {balanceText}
            status={status}
            body={show ? (
                <>
                    Deposit <br />
                    <input type="input" className="form-control" id="deposit" value={deposit} onChange={addDeposit} /> <br />
                    <button disabled = {disable} type="submit" className="btn btn-light" onClick={handleDeposit}>Deposit</button>
                </>
            ) : (
                <>
                   
                    <button type="submit" className="btn btn-light" onClick={clearForm}>New Deposit</button>
                     
                </>
            )}
            
        />

    );
    
}
export default Deposit;