import React,{Component} from 'react';
import { Button, Row, Col, Container, Card, CardText} from 'reactstrap';

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
          <Card body outline color="secondary" className="Card">
          <Row>
          <Col sm={5} class="contain">{tracks[i]}</Col>
          <Col sm={7} class="contain">
          <CardText>Temperature : {this.props.temp[i]}</CardText>
          <CardText>Pressure : {this.props.pressure[i]}</CardText>
          <CardText>Humidity : {this.props.humidity[i]}</CardText>
          </Col>
          </Row></Card>
        );}
  }
  return arr;
}
  render() {
    if(this.props.times.length > 0)
    {  return (
      <div>
      <Container><Row className="tile">
      <Col sm={{ size: 'auto', offset: 0 }}><Button outline color="primary" onClick={() => {this.setState({index: 0})}}>{this.props.date[0]}</Button></Col>
      <Col sm={{ size: 'auto', offset: 0.95 }}><Button outline color="primary" onClick={() => {this.setState({index: 1})}}>{this.props.date[1]}</Button></Col>
      <Col sm={{ size: 'auto', offset: 0.95 }}><Button outline color="primary" onClick={() => {this.setState({index: 2})}}>{this.props.date[2]}</Button></Col>
      <Col sm={{ size: 'auto', offset: 0.95 }}><Button outline color="primary" onClick={() => {this.setState({index: 3})}}>{this.props.date[3]}</Button></Col>
      <Col sm={{ size: 'auto', offset: 0.95 }}><Button outline color="primary" onClick={() => {this.setState({index: 4})}}>{this.props.date[4]}</Button></Col>
      </Row>
      <Row className  ="aligning">
      <Col sm={{ size: 'auto', offset: 0 }}>{this.getTime().map((i, k) => <div key={k}>{i}</div>)}</Col>
      </Row>
      </Container>
      </div>

    );}
    else {
      return <div></div>
    }
}
}
export default Tiles;
