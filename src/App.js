import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [greeting, setGreeting] = useState('');

  fetch("/new-route", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({name: 'Luke Duke'})
  })
    .then(res => res.json())
    .then((result) => {
        setGreeting(result.greeting);
    })
    .catch(error => console.log(error))
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {greeting && 
          <h2>{greeting}</h2>
        } 
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
