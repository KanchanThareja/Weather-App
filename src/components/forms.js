import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
class Forms extends React.Component {

  render() {
    return (
      <Form inline onSubmit={this.props.getweather}>
       <FormGroup>
         <Label for="examplesearch" hidden>Enter your city</Label>{'  '}
         <Input type="text" name="city" id="examplesearch" placeholder="city" />
       </FormGroup>
       <Button>Search</Button>
     </Form>
    );
  }
}

export default Forms;
