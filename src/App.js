import React, { Component } from 'react';
import NavBar from './components/NavBar';
import './styles/App.css';
import MainApplication from './components/MainApplication';

class App extends Component {
  render() {
    return (
      <div className="App">
      
        <NavBar />
        <MainApplication/>

      </div>
    );
  }
}

export default App;
