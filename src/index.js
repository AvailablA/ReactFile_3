import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// how to use javascript expression ans1
const name = "Kunal ";
const lname = "Shewale";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
  <h1>My name is "name"
    <br></br>
    {/* ans1    with the help of {curely bracket} */}
    My name is {name}
    <p>My Favourite number is {Math.random()}</p>
    <ol>
      <li>we can use EXPRESSION help of curely brackets</li>
      <li>we can't use STATEMENT in curely brackets</li>
    </ol>
    
    
  </h1>
  <p>===================================</p>
  <h1>My name is {name+" "+lname+"."}</h1>
  <h1>{`My first name is ${name} and my last name ${lname}`}</h1>

  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
