import React from 'react';
//import logo from './logo.svg';
import agenda from './fetchAgenda.svg';
import './App.css';
import { render } from 'react-dom';

const Agenda = agenda;

const App: React.FC = () => {

    
    return (
      <div className="App">
        <header className="App-header">
          <p>
            NDC Agenda 2019          
          </p>
        </header>
      </div>
    );
  
}

export default App;
