import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import AppSubscribeForm from "../../AppSubscribeForm";
import Clock from "../../clock";


function App() {
  const [midClockComplete, setmidClockComplete] = React.useState(false);
  const handleValidateForm = (userName: string, password: string) => {
    window.alert(`Hello ${userName} ${password}`);
  }

  const midClockDidFinish = () => {
    setmidClockComplete(true);
    console.log("FINISH");
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Clock startTime={50} />
        { !midClockComplete &&
            <Clock endTime={3} onClockEnd={midClockDidFinish}/>
        }
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
