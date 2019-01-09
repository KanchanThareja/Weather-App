import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/form';

class App extends Component {
  handleclick = (e) => {
    e.preventDefault();
    if(navigator.geolocation)
    {
      navigator.geolocation.getCurrentPosition(function(position){
      console.log(position);
      });
    }else {
      alert('browser doesn\'t support geolocation');
    }
  }
  getweather = (e) => {
    
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Form handleclick={this.handleclick} />
          <button onClick={this.handleclick}>Use my location</button>
        </header>
      </div>
    );
  }
}

export default App;
