import React from 'react';
import logo from './logo.svg';
import './App.css';
import Info from './components/Info'; 

function App() {
  return (
    <React.Fragment>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      
        <Info
            courseName="Welcome to Fullstack Development - I"
            title="React JS Programming Week09 Lab exercise"
            studentID="Student ID: 101391769"
            fnm="Adina"
            lnm="Termechikova"
            college="George Brown College"
            city="Toronto"
        />

      </header>
    </div>
    </React.Fragment>
  );
}

export default App;
