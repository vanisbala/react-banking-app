import React from 'react';
import { getByRole, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

// import App from './App';
import Createaccount from './components/createaccount'

test('Check Create Account Title',() => {
  const {getByText,getByLabelText} = render(<Createaccount/>)

  expect(getByText('Create Account')).not.toBeNull(); 
});

test('Check Create Account Labels ',() => {
  const {getByText,getByLabelText} = render(<Createaccount/>)

  expect(getByLabelText('Name')).not.toBeNull();
  expect(getByLabelText('Email Address')).not.toBeNull();
  expect(getByLabelText('Password')).not.toBeNull();
});

test('Check Create New Account Button ',() => {
  const {getByText} = render(<Createaccount/>)
  
  expect(getByText("Create New Account")).not.toBeNull(); 
});

test('Check Empty Name Field', () => {
  const {getByText, getByLabelText} = render(<Createaccount/>);
  
  const inputEmail = getByLabelText('Email Address');
  const button = getByText("Create New Account");

  userEvent.type(inputEmail,"ram@gmail.com");
  userEvent.click(button);

  getByText("Error : Enter appropriate value in 'name' field");
});

test('Check Empty Email Field', () => {
  const {getByText, getByLabelText} = render(<Createaccount/>);
  
  const input = getByLabelText('Name');
  const button = getByText("Create New Account");

  userEvent.type(input,"ram")
  userEvent.click(button);

  getByText("Error : Enter appropriate value in 'email' field");
});

test('Check Empty Password Field', () => {
  const {getByText, getByLabelText} = render(<Createaccount/>);
  
  const inputName = getByLabelText('Name');
  const inputEmail = getByLabelText('Email Address');
  const button = getByText("Create New Account");

  userEvent.type(inputName,"ram");
  userEvent.type(inputEmail,"ram@gmail.com");
  userEvent.click(button);

  getByText("Error : Enter appropriate value in 'password' field");
});

test('Check Password length', () => {
  const {getByText, getByLabelText} = render(<Createaccount/>);

  const inputName = getByLabelText('Name');
  const inputEmail = getByLabelText('Email Address');
  const inputPassword = getByLabelText('Password');
  const button = getByText("Create New Account");

  userEvent.type(inputName,"ram");
  userEvent.type(inputEmail,"ram@gmail.com");
  userEvent.type(inputPassword,"hello1");
  userEvent.click(button);

  getByText("Error: Length of the password must be eight or more");
});

test('Check Invalid Email', () => {
  const {getByText, getByLabelText} = render(<Createaccount/>);

  const inputName = getByLabelText('Name');
  const inputEmail = getByLabelText('Email Address');
  const inputPassword = getByLabelText('Password');
  const button = getByText("Create New Account");

  userEvent.type(inputName,"ram");
  userEvent.type(inputEmail,"ram@gmailcom");
  userEvent.type(inputPassword,"hello123");
  userEvent.click(button);

  getByText("Error: You have entered an invalid email address");
});

// test('Check successful account creation', async() => {
//   const {getByText, getByLabelText} = render(<Createaccount/>);

//   const inputName = getByLabelText('Name');
//   const inputEmail = getByLabelText('Email Address');
//   const inputPassword = getByLabelText('Password');
//   const button = getByText("Create New Account");

//   userEvent.type(inputName,"ram");
//   userEvent.type(inputEmail,"ram@gmail.com");
//   userEvent.type(inputPassword,"hello123");
//   userEvent.click(button);

//   await waitFor(() => {
//     expect(getByText("Create Account")).toBeInTheDocument();
//   });

//   // getByLabelText("New account created Successfully");
  
// });

// test('Check successful account creation', () => {
//   const {getByText, getByLabelText} = render(<Createaccount/>);

//   const inputName = getByLabelText('Name');
//   const inputEmail = getByLabelText('Email Address');
//   const inputPassword = getByLabelText('Password');
//   const button = getByText("Create New Account");

//   userEvent.type(inputName,"ram");
//   userEvent.type(inputEmail,"ram@gmail.com");
//   userEvent.type(inputPassword,"hello123");
//   userEvent.click(button);

//   getByText("Add Another Account");
  

//   // getByLabelText("New account created Successfully");
  
// });

