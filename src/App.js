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
    times: [],
    temp : [],
    pressure : [],
    humidity: [],
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
    let dates = [], times = [], humidity = [], temp = [], pressure = [];
    let indices = [];
    let prev = date;
    dates.push(prev);
    indices.push(0);


    for(let i = 0; i < dataW.list.length; i++)
      {
      dateString = dataW.list[i].dt_txt;
       date = Moment(dateString).format('ddd MMM Do');
       times.push(dateString.substring(11,20));
       temp.push(dataW.list[i].main.temp);
       pressure.push(dataW.list[i].main.pressure);
       humidity.push(dataW.list[i].main.humidity);
      if(date !== prev)
      {
        console.log(prev);
        dates.push(date);
        indices.push(i);
        prev = date;
      }
    }

    this.setState({date: dates});
    this.setState({times: times});
    this.setState({index: indices});
    this.setState({temp: temp});
    this.setState({pressure : pressure});
    this.setState({temp : temp});
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
          <button onClick={this.handleclick}>Use my location</button><br />
          <Tiles times={this.state.times}
          date={this.state.date}
          index={this.state.index}
          time={this.state.time}
          humidity = {this.state.humidity}
          pressure = {this.state.pressure}
          temp = {this.state.temp} />
        </header>
      </div>
    );
  }
}

export default App;
