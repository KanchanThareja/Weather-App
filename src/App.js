import React, { Component } from 'react';
import './App.css';
import Form from './components/form';
import Tiles from './components/tiles';
import Moment from 'moment';

class App extends Component {
  state = {
    data: [],
    date: [],
    index: [],
    humidity: 0,
    temperature: 0,
    pressure: 0,
    time : ''
  }

  getweather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    if(city){
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=73c146e4ee5ae67f94bff6e87db44483&units=metric`);
    const dataW = await api_call.json();
    this.setState({data : dataW.list});
    console.log(dataW);

    let dateString = dataW.list[0].dt_txt;
  //  let dateString = dataW.list[i].dt_txt;

    let date = Moment(dateString).format('ddd MMM Do');
    let dates = [];
    let prev = date;
   dates.push(prev);

    for(let i = 0; i < dataW.list.length; i++)
      {
      dateString = dataW.list[i].dt_txt;
       date = Moment(dateString).format('ddd MMM Do');
      if(date !== prev)
      {
        console.log(prev);
        dates.push(date);
        prev = date;
      }
    }

    this.setState({date: dates});
    this.setState({pressure : dataW.list[0].main.pressure});
    this.setState({temperature : dataW.list[0].main.temp});
    this.setState({time: dateString.substring(11,20)});
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
          <Tiles data={this.state.data}
          date={this.state.date}
          time={this.state.time}
          humidity = {this.state.humidity}
          pressure = {this.state.pressure}
          temperature = {this.state.temperature} />
        </header>
      </div>
    );
  }
}

export default App;
