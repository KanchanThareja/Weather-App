import React,{Component} from 'react';

class Tiles extends React.Component {
  state = {
    index : 0,
    times : []
  }

getTime = () => {
  const {tracks} = this.props.data;
  const idx = this.props.index;
  let arr = [], r,temp,pressure,humidity;
  for(let i = idx[this.state.index]; i < idx[this.state.index+1] && i < idx.length; i++)
  {
    r = tracks[i].dt_txt.substring(11,20);
    temp = tracks[i].main.temp;
    pressure = tracks[i].main.pressure;
    humidity = tracks[i].main.humidity;
    arr.push(
      <div key={i}>
      <div>{r}</div>
      <div>temperature : {temp}</div>
      <div>pressure : {pressure}</div>
      <div>humidity : {humidity}</div><br />
      </div>
    );}
    return arr;
}
  render() {

      return (
      <div className="tile">
      <button onClick={() => {this.setState({index: 0})}}>{this.props.date[0]}</button>
      <button onClick={() => {this.setState({index: 1})}}>{this.props.date[1]}</button>
      <button onClick={() => {this.setState({index: 2})}}>{this.props.date[2]}</button>
      <button onClick={() => {this.setState({index: 3})}}>{this.props.date[3]}</button>
      <button onClick={() => {this.setState({index: 4})}}>{this.props.date[4]}</button>
      { this.props.index[this.state.index] }
      </div>
    );
}
}
export default Tiles;
