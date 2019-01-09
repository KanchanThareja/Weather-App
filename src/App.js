import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/form';

class App extends Component {
  state = {
    data: undefined,
  }
  getweather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    if(city){
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=73c146e4ee5ae67f94bff6e87db44483&units=metric`);
    const dataW = await api_call.json();
    this.setState({data : dataW});
    console.log(dataW);
    } else {
    console.log("error: invalid input");
  }
  }

  handleclick = (e) => {
    if(navigator.geolocation)
    {
      navigator.geolocation.getCurrentPosition(function(position){
      let lat = parseFloat(position.coords.latitude);
      let lon = parseFloat(position.coords.longitude);
      const api_c = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=73c146e4ee5ae67f94bff6e87db44483&units=metric&callback=JSON_CALLBACK`);
      console.log(api_c);
      //this.setState({data : dataWI});
      });
    }else {
      alert('browser doesn\'t support geolocation');
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Form getweather={this.getweather} />
          <button onClick={this.handleclick}>Use my location</button>
        </header>
      </div>
    );
  }
}

export default App;
