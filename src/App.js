import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
       num1: 1,
       num2: 1,
    }

    this.clickIncrease = this.clickIncrease.bind(this);
  }

  clickIncrease(e) {
     let a = this.state.num1 + this.state.num2;
     this.setState({
        num1: a,
        num2: this.state.num1,
     });
  }


  render() {
    return (
       <div>
          The current number is: {this.state.num1}
          <br/>
          <br/>
          <button onClick={this.clickIncrease}>Go to Page A</button>
          <button onClick={this.clickIncrease}>Go to Page B</button>
       </div>
    );
  }
}

export default App;
