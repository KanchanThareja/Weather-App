import React,{Component} from 'react';

class Tiles extends React.Component {
   i = 0;
  state = {
    index : 0,
    curridx : 0
  }

  render() {
    const {tracks} = this.props.data;

      return (
      <div className="tile">
      <h5 onClick={() => {this.setState({index: 0})}}>{this.props.date[0]}</h5>
      <h5 onClick={() => {this.setState({index: 1})}}>{this.props.date[1]}</h5>
      <h5 onClick={() => {this.setState({index: 2})}}>{this.props.date[2]}</h5>
      <h5 onClick={() => {this.setState({index: 3})}}>{this.props.date[3]}</h5>
      <h5 onClick={() => {this.setState({index: 4})}}>{this.props.date[4]}</h5>
      <h5 onClick={() => {this.setState({index: 0})}}>{this.props.time}</h5>
      <h5 onClick={() => {this.setState({index: 0})}}>humidity :  {this.props.humidity}</h5>
      <h5 onClick={() => {this.setState({index: 10})}}>temperature : {this.props.temperature}</h5>
      <h5 onClick={() => {this.setState({index: 15})}}>pressure : {this.props.pressure}</h5>
      </div>
    );
}
}
export default Tiles;
