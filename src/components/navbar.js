import React from 'react';
import '../App.css';
import { useContext, useState, useEffect } from 'react';
import UserContext from '../usercontext';


function Navbar(props) {
    const cont = useContext(UserContext);
    const customers = cont.users; 
    const handleClick=(e) => {
        console.log(`know the customers : ${customers}`);
        var items =document.getElementsByClassName("nav-link");
        for (var i = 0; i < items.length; i++) {
            items[i].classList.remove("active") 
        }      
        var classes = e.target.className;
        if(classes.search("active")>0){
             e.target.classList.remove("active");
        }
        else{
            e.target.classList.add("active");
        }
        if(e.target.id === "logout"){
            document.getElementById("deposit").classList.add("disabled");
            document.getElementById("withdraw").classList.add("disabled");
            document.getElementById("alldata").classList.add("disabled");
        }
       if((e.target.id === "login" || e.target.id === "createaccount" || e.target.id === "home") ){
            if(document.getElementById("deposit").classList.contains("disabled")) {
                document.getElementById("deposit").classList.remove("disabled");
                customers[0].active = true;
            }
            if(document.getElementById("withdraw").classList.contains("disabled")) {
                document.getElementById("withdraw").classList.remove("disabled");
                customers[0].active = true;
            }
            if(document.getElementById("alldata").classList.contains("disabled")) {
                document.getElementById("alldata").classList.remove("disabled");
                customers[0].active = true;
            }
        }
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg nav-fill navbar-light bg-light" id="navbar">
                <a className="nav-link active " id="home" onClick={handleClick} title="Welcome to the bank" href="#">Home</a>
                <a className="nav-link " id="createaccount" onClick={handleClick} title= "Create new user account" href="#/createaccount/">Create Account </a>              
                <a className="nav-link " id="login" onClick={handleClick} title= "User Login" href="#/login/">Login</a>              
                <a className="nav-link " id="deposit" onClick={handleClick} title = "Money deposit and balance checking" href="#/deposit/">Deposit</a>
                <a className="nav-link " id="withdraw" onClick={handleClick} title="Money withrawal and balance checking" href="#/withdraw/">Withdraw </a>
                <a className="nav-link " id="alldata" onClick={handleClick} title = "Display all user accounts information" href="#/alldata/">Alldata</a>
                <a className="nav-link " id="logout" onClick={handleClick} title = "User logout" href="#/logout/">Logout</a>
            </nav>
        </>
    );
}

export default Navbar;