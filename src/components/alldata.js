import React from 'react';
import { useContext } from 'react';
import UserContext from '../usercontext';
import Bankcard from './bankcard';
import '../App.css';


// function Alldata(){
//     const cont = useContext(UserContext);
//     const user = cont.users
    
//     return(
//         <Bankcard
//             bgcolor="primary"
//             txtcolor = "light"
//             header="User Information"          
//             body={
//             <table className="table text-white">
//             <thead>
//               <tr>
//                 <th scope="col">#</th>
//                 <th scope="col">Name</th>
//                 <th scope="col">Email</th>
//                 <th scope="col">Password</th>
//                 <th scope="col">Amount</th>
//                 <th scope="col">Active</th>
//               </tr>
//             </thead>
//             <tbody>

//               {user.map((value,index) => {
//                 return (
                  
//                 <tr key={index+1}>
//                   <th scope="row">{index+1}</th>
//                   <td>{value.name}</td>
//                   <td>{value.email}</td>
//                   <td>{value.password}</td>
//                   <td>{value.balance}</td>
//                   <td>{value.active ? "Yes" : "No"}</td>
                  
//                 </tr> )
//               })} 
              
//             </tbody>
//           </table>
//           }
//         />
  
//     );
//   }

// export default Alldata;

function Alldata(){
  const cont = useContext(UserContext);
  const user = cont.users;
  const activeuser = user.filter((value) =>  value.active === true );
  
  return(
    <Bankcard
        bgcolor="primary"
        txtcolor = "light"
        header="User Information"          
        body={
        <table className="table table-hover text-white">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col">Amount</th>
            <th scope="col">Active</th>
          </tr>
        </thead>
        <tbody>
          {(user[0].active === true) ? (
            user.map((value,index) => {
                return (
                  <tr key={index+1}>
                    <th scope="row">{index+1}</th>
                    <td>{value.name}</td>
                    <td>{value.email}</td>
                    <td>{value.password}</td>
                    <td>{value.balance}</td>
                    <td>{value.active ? "Yes" : "No"}</td>   
                  </tr> 
                )
              }
            ) 
            ) : (
              <tr key={1}>
              <th scope="row">{1}</th>
              <td>{activeuser[0].name}</td>
              <td>{activeuser[0].email}</td>
              <td>{activeuser[0].password}</td>
              <td>{activeuser[0].balance}</td>
              <td>{activeuser[0].active ? "Yes" : "No"}</td>
              </tr>  
              
            )
          }
        </tbody>
      </table>
      }
    />
  );
}

export default Alldata;