import React from 'react';
import logo from '../img/mandoblack.png'

export function Home() {
return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
          <img src={logo} className="App-marca" alt="marca" width="650px"
          height="200px"/>
          </p>
        </header>
      </div>
      );
    }