import React from 'react';
import { useContext, useState } from 'react';
import UserContext from '../usercontext';
import Bankcard from './bankcard';
import '../App.css';

function Createaccount() {
    const [show, setShow] = useState(true);
    const [disable,setDisable] = useState(true);
    const [status, setStatus] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const cont = useContext(UserContext);

    function checkEmptyField(field, fieldName) {
        if (!field) {
            setStatus(`Error : Enter appropriate value in '${fieldName}' field`)
            setTimeout(() => setStatus(''), 3000)
            return true
        }
        return false
    }

    function checkPasswordLength(pswd) {
        if (pswd.length < 8) {
            setStatus(`Error: Length of the password must be eight or more`);
            setTimeout(() => setStatus(''), 3000);
            return true;
        }
    }

    function validateEmail(email) {
        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
            setStatus(`Error: You have entered an invalid email address`);
            setTimeout(() => setStatus(''), 3000);
            return true;
        }
    }

    function handleCreateAccount() {
        console.log(name, email, password);
        if (checkEmptyField(name, 'name')) return;
        if (checkEmptyField(email, 'email')) return;
        if (checkEmptyField(password, 'password')) return;
        if (checkPasswordLength(password)) return;
        if (validateEmail(email)) return;
        cont.users.push({ name, email, password, balance: 100, active: false });
        //cont.users.push({ name, email, password, balance: 100});
        setShow(false);
    }

    function setInput(e){
        if (e.currentTarget.id === "name") setName(e.currentTarget.value);
        if (e.currentTarget.id === "email") setEmail(e.currentTarget.value);
        if (e.currentTarget.id === "password") setPassword(e.currentTarget.value);
        setDisable(false);
    }
    

    function clearForm() {
        setName('');
        setEmail('');
        setPassword('');
        setShow(true);
        setDisable(true);
    }

    return (
        <Bankcard
            bgcolor="primary"
            header="Create Account"
            status={status}
            body={show ? (
                <>
                    <label htmlFor="name">Name</label> <br />
                    <input type="input" className="form-control" id="name" value={name} onChange={setInput} /> <br />
                    <label htmlFor="email">Email Address</label> <br />
                    <input type="email" className="form-control" id="email" value={email} onChange={setInput} /> <br />
                    <label htmlFor="password">Password</label> <br />
                    <input type="password" className="form-control" id="password" value={password} onChange={setInput} /> <br />
                    <button disabled = {disable} type="submit" className="btn btn-light" onClick={handleCreateAccount}>Create New Account</button><br/><br/>
                </>
            ) : (
                <>
                    <label className = "success-msg">New account created Successfully!</label><br/><br/>
                    <button type="submit" className="btn btn-light" onClick={clearForm}>Add Another Account</button>
                </>
            )}
        />
    );
}
export default Createaccount;
