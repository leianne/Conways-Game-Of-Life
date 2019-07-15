import React, { Component } from 'react';
import Cell from './Cell';

class Grid extends Component {
    render() {
        const width = this.props.columns * 14;
        let grid = [];
        let cellClass = "";

        for(let i = 0; i < this.props.rows; i++) {
            for(let j = 0; j < this.props.columns; j++) {
                let cellID = `${i}-${j}`;
                cellClass = this.props.gridFull[i][j] ? "on" : "off";
                grid.push(
                    <Cell
                        cellClass = {cellClass};
                        key={cellID}
                        row={i}
                        column={j}
                        cellID={cellID}
                    />
                )
            }
        }
        return  (
            <div className="grid" style={{width: width}}>
                {grid}
            </div>
        )
    }
}

export default Grid;