import React,{Component} from 'react';

class Tiles extends React.Component {
  state = {
    index : 0,
  }
  date = () => {
    const dateString = this.props.data[0].dt_txt;
    const dt = dateString.split(/\-|\s/);
    const dat = new Date(dt.slice(0,3).reverse().join('-') + ' ' + dt[3]);
    return dat;
  }
  render() {
    const {tracks} = this.props.data;

      return (
      <div>
      {tracks.map((track, k) => {
    return(
      <div>
      </div>
    );
  })}

      </div>
    );
}
}
export default Tiles;
