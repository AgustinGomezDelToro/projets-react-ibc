import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppSubscribeForm from "./AppSubscribeForm";
import Clock from "./clock";

function App() {
  const handleValidateForm = (userName: string, password: string) => {
    window.alert(`Hello ${userName} ${password}`);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Clock startTime={50} />
        <Clock endTime={100}/>
        <Clock startTime={50} endTime={55}/>
        <AppSubscribeForm userName="Bonjour" onValidate={handleValidateForm} />
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
