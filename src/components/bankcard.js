import React from 'react';
import '../App.css';
import {Card} from 'bootstrap';

function Bankcard(props){
  function classes(){
      const bg  = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
      const txt = props.txtcolor ? ' text-' + props.txtcolor: ' text-white';
      return 'card mb-5 ' + bg + txt;
    }  
    
    return (     
      <div className={classes()} style={{maxWidth: "40rem", margin:"0 auto"}}>
        <div className="card-header text-center">{props.header}</div> 
        <div className="card-body">
          {props.title && (<h5 className="card-title text-center" >{props.title}</h5>)}
          {props.text && (<p className="card-text">{props.text}</p>)}
          {props.body} <br/><br/>
          {props.status && (<div id='createStatus'>{props.status}</div>)}     
        </div>
      </div> 
    );    
  }

  export default Bankcard;

  