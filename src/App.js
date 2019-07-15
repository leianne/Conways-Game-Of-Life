import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from './components/Grid';


class App extends Component {

  constructor() {
    super();
    this.speed = 200;
    this.rows =  40;
    this.columns = 50; 
    this.state = {
      gridFull: Array(this.rows).fill(Array(this.columns).fill(false))
    }
  }

  componentDidMount() {
    this.seedGrid()
  }
  
  selectCell = (row, column) => {
    let gridCopy = copyArr(this.state.gridFull);
    gridCopy[row][column] = !gridCopy[row][column];
    console.log(gridCopy[row][column]);
    this.setState({
      ...this.state,
      gridFull: gridCopy
    })
  }
  seedGrid = () => {
    let gridCopy = copyArr(this.state.gridFull);
    for(let i = 0; i < gridCopy.length; i++) {
      for(let j = 0; j < gridCopy.length; j++) {
        if(Math.floor(Math.random() *  4) == 1){
          gridCopy[i][j] = true
        }
      }
    }
    this.setState({
      ...this.state,
      gridFull: gridCopy
    })
  }
  render() {
    return (
      <div className="App">
          <Grid rows={this.rows} columns={this.columns} gridFull={this.state.gridFull} selectCell={this.selectCell}/>
      </div>
    );
  }
}

function copyArr(arr) {
  return JSON.parse(JSON.stringify(arr))
}
export default App;
