import React from 'react';
import { useContext } from 'react';
import UserContext from '../usercontext';
import Bankcard from './bankcard';
import '../App.css';




function Logout() {
    const cont = useContext(UserContext);
    const customers = cont.users; 
    const activeUser = customers.filter((customer) => {
        if(customer.active === true){
            console.log(`${customer.name} is active and his balance is ${customer.balance}`);
            customer.active = false;
            console.log(`${customer.name} is loggrd out and his balance is ${customer.balance}`);
            return customer;
        }
     });  
    const status = `${activeUser[0].name} logged out`;
    return (
        <>
            <Bankcard
            bgcolor="primary"
            header="Logout"
            status={status}
            />
        </>
    )
}

export default Logout
