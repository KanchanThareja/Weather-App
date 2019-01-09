import React from 'react';

class Form extends React.Component {

  render() {
    return (
      <form onSubmit={this.props.handleclick}>
        <input name="city" placeholder="city ..." />
        <button>Search</button>
      </form>
    );
  }
}

export default Form;
