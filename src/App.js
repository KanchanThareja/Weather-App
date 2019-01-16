import React, { Component } from 'react';
import './App.css';
import Forms from './components/forms';
import Tiles from './components/tiles';
import Moment from 'moment';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';

class App extends Component {
  state = {
    data: [],
    date: [],
    index: [],
    times: [],
    temp : [],
    pressure : [],
    humidity: [],
  }

  getweather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    if(city){
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=73c146e4ee5ae67f94bff6e87db44483&units=metric`);
    const dataW = await api_call.json();
    if(dataW)
    {
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
    this.setState({humidity : humidity});
    this.setState({temp : temp});

    console.log(date);
    console.log(dateString.substring(11,20));
    } else {
    console.log("error: invalid input");
    }}
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
      <div>
        <Container>
        <Row className="main"><h1>Open Weather Forecast</h1></Row>
        <Row className="main"><Col>Enter your city</Col></Row>
        <Row className="borderdown">
         <Col sm={{ size: 'auto', offset: 0 }}><Forms getweather={this.getweather} /></Col>
         <Col sm={{ size: 'auto', offset: 0.7 }} className="slash">|</Col>
         <Col sm={{ size: 'auto', offset: 0.7 }}><Button onClick={this.handleclick}>Use my location</Button></Col>
       </Row><br />
        <Row><Tiles times={this.state.times}
        date={this.state.date}
        index={this.state.index}
        time={this.state.time}
        humidity = {this.state.humidity}
        pressure = {this.state.pressure}
        temp = {this.state.temp} /></Row>
        </Container>
      </div>
    );
  }
}

export default App;
