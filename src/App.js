import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from './components/Grid';


class App extends Component {

  constructor() {
    super();
    this.speed = 200;
    this.rows =  50;
    this.columns = 50; 
    this.state = {
      gridFull: Array(this.rows).fill(Array(this.columns).fill(false))
    }
  }

  render() {
    return (
      <div className="App">
          <Grid rows={this.rows} columns={this.columns} gridFull={this.state.gridFull}/>
      </div>
    );
  }
}

export default App;
