import React from 'react';
import { useContext, useState, useEffect } from 'react';
import UserContext from '../usercontext';
import Bankcard from './bankcard';
import '../App.css';

function Withdraw(){
    const cont = useContext(UserContext);
    const customers = cont.users; 
    const [status,setStatus] = useState(null);
    const activeUser = customers.filter((customer) => {
        if(customer.active === true){
            console.log(`${customer.name} is active and his balance is ${customer.balance}`);
            return customer
        }
     });  
    console.log(activeUser[0].name) 
    const [balance,setBalance] = useState(activeUser[0].balance);
    const [withdraw,setWithdraw] = useState(0);
    const [show,setShow] = useState(true);
    const [disable,setDisable] = useState(true);
    const balanceText = `Balance : ${balance}`

    function withdrawAmount(e){
        setWithdraw(e.currentTarget.value);
        setDisable(false);
    }

    function checkBalanceIsLess(field) {
      if(field > balance) {
        setStatus(`Error: Withdrawal amount is more than the balance`);
        setTimeout(() => setStatus(''), 3000);
        return true;
      }
      return false;
    }

    function checkEmptyField(field, fieldName) {
        if (!field) {
            setStatus(`Error : Enter the deposit amount `);
            setTimeout(() => setStatus(''), 3000);
            return true;
        }
        return false;
    }

    function checkNegativeWithdrawal(field) {
        if (parseInt(field) <= 0) {
            setStatus(`Error : Zero or Negative amounts can't be accepted `)
            setTimeout(() => setStatus(''), 3000)
            return true
        }
        return false
    }

    function checkWithdrawIsNumber(field) {
        if(isNaN(parseInt(field))){
            setStatus(`Error : Only Numbers are accepted `)
            setTimeout(() => setStatus(''), 3000)
            return true
        }
        return false
    }

    function clearForm(){
        setWithdraw('');
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

    function handleWithdrawal(e){
        if(checkEmptyField(withdraw,'deposit')) return;
        if(checkNegativeWithdrawal(withdraw)) return;
        if(checkWithdrawIsNumber(withdraw)) return;
        if(checkBalanceIsLess(withdraw)) return;
        setBalance(balance - parseInt(withdraw));
        setShow(false);
        setStatus(`Success: Withdrawal was processed`)
    }

    return(
        <Bankcard
            bgcolor="primary"
            header="Withdraw Amount"
            text = {balanceText}
            status={status}
            body={show ? (
                <>
                    Withdraw <br />
                    <input type="input" className="form-control" id="deposit" value={withdraw} onChange={withdrawAmount} /> <br />
                    <button disabled = {disable} type="submit" className="btn btn-light" onClick={handleWithdrawal}>Withdraw</button>
                </>
            ) : (
                <>
                    <button type="submit" className="btn btn-light" onClick={clearForm}>New Withdrawal</button>
                </>
            )}
        />
    );
}
export default Withdraw;