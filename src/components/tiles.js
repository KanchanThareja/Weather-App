import React,{Component} from 'react';

class Tiles extends React.Component {
  state = {
    index : 0
  }

getTime = () => {
  const tracks = this.props.times;
  const idx = this.props.index;

  let arr = [], r,temp,pressure,humidity;
  if(tracks && idx)
    {
      let j = this.state.index;
      for(let i = idx[j]; i < tracks.length && i < idx[j+1]; i++)
        {
        arr.push(
          <div key={i}>
          <div>{tracks[i]}</div>
          <div>temperature : {this.props.temp[i]}</div>
          <div>pressure : {this.props.pressure[i]}</div>
          <div>humidity : {this.props.humidity[i]}</div>
          </div>
        );}
  }
  return arr;
}
  render() {

    const times = this.props.times;
    const idx = this.props.index;

      return (
      <div className="tile">
      <button onClick={() => {this.setState({index: 0})}}>{this.props.date[0]}</button>
      <button onClick={() => {this.setState({index: 1})}}>{this.props.date[1]}</button>
      <button onClick={() => {this.setState({index: 2})}}>{this.props.date[2]}</button>
      <button onClick={() => {this.setState({index: 3})}}>{this.props.date[3]}</button>
      <button onClick={() => {this.setState({index: 4})}}>{this.props.date[4]}</button>
      <div>{this.getTime().map((i) => <div>{i}</div>)}</div>
      </div>
    );
}
}
export default Tiles;
