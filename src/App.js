import React, { Component } from 'react';
import './App.css';
import Form from './components/form';
import Tiles from './components/tiles';

class App extends Component {
  state = {
    data: [],
    prevdate : undefined,
  }
  getweather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    if(city){
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=73c146e4ee5ae67f94bff6e87db44483&units=metric`);
    const dataW = await api_call.json();
    const dateString = dataW.list[0].dt_txt;

    this.setState({data : dataW.list});
    const dt  = dateString.split(/\-|\s/);
    const date = new Date(dt.slice(0,3).reverse().join('-') + ' ' + dt[3]);
    console.log(date);
    console.log(dateString.substring(11,20));
    } else {
    console.log("error: invalid input");
  }
  }

  handleclick = (e) => {
    e.preventDefault();
    if(navigator.geolocation)
    {
      navigator.geolocation.getCurrentPosition(function(position){
       const lat = position.coords.latitude;
       const lon = position.coords.longitude;
      const api_c = fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=73c146e4ee5ae67f94bff6e87db44483`);
      //const d = api_c.json();
      //console.log(d);
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
        <h1>Open Weather Forecast</h1>
          <Form getweather={this.getweather} /><br />
          <button onClick={this.handleclick}>Use my location</button>
          <Tiles data={this.state.data} />
        </header>
      </div>
    );
  }
}

export default App;
