import React from 'react';
import Bankcard from './bankcard';
import '../App.css';

function Home(){
    return(
       <Bankcard
        header = "THE BANK PROJECT"
        title="Welcome to the Bank"
        body={(<img src="bank.png" className="img-fluid" alt ="bank image" width="400px" height = "auto"/>)}
        text="Explore your banking options..."
        status=""
        bgcolor="primary"
        txtcolor ="white"  
        cardwidth = "25rem"     
       />
    );
}

export default Home;