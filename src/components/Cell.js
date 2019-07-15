import React, { Component } from 'react';

class Cell extends Component {
    selectCell = () => {
        this.props.selectCell(this.props.row, this.props.column);
    }
    render() {
        return (
            <div className={`cell ${this.props.cellClass}`}  id={this.props.cellID} onClick={this.selectCell}></div>
        ) 
    }
    
}

export default Cell;