import React from 'react';
import ReactDOM from 'react-dom';

import Cell from './Cell';

class MyXO extends React.Component {

constructor(props) {
    super(props);
    this.state = {
        isStop: false,
        xo: true,
        matrix: [[0, 0, 0],
                 [0, 0, 0],
                 [0, 0, 0]]
        }
}

clickCell(e, x, y) {
    let copyMatrix = this.state.matrix;
    if (!this.state.isStop) {
        if (this.state.matrix[x][y] == 0) {
            if (this.state.xo) 
            {
                this.setState({xo: false});
                e.target.style.backgroundColor = "green";
                copyMatrix[x][y] = 1;
            }
            else {
                this.setState({xo: true});
                e.target.style.backgroundColor = "red";
                copyMatrix[x][y] = -1;
            }
            this.setState({matrix: copyMatrix});
        }
    }
    if (Math.abs(copyMatrix[0][0]+copyMatrix[0][1]+copyMatrix[0][2]) == 3 ||
        Math.abs(copyMatrix[1][0]+copyMatrix[1][1]+copyMatrix[1][2]) == 3 ||
        Math.abs(copyMatrix[2][0]+copyMatrix[2][1]+copyMatrix[2][2]) == 3 ||
        Math.abs(copyMatrix[0][0]+copyMatrix[1][0]+copyMatrix[2][0]) == 3 ||
        Math.abs(copyMatrix[0][1]+copyMatrix[1][1]+copyMatrix[2][1]) == 3 ||
        Math.abs(copyMatrix[0][2]+copyMatrix[1][2]+copyMatrix[2][2]) == 3 ||
        Math.abs(copyMatrix[0][0]+copyMatrix[1][1]+copyMatrix[2][2]) == 3 ||
        Math.abs(copyMatrix[0][2]+copyMatrix[1][1]+copyMatrix[2][0]) == 3)
        {
            this.setState({isStop: true});
        }
    console.log(Math.abs(this.state.matrix[0][0] + this.state.matrix[0][1] + this.state.matrix[0][2]));
    ////////
    console.log(this.state.matrix[x][y]);
     console.log(this.state.isStop);
    console.log(this.state.matrix[0]);
    console.log(this.state.matrix[1]);
    console.log(this.state.matrix[2]);
}

render() {
    return (
          <div className="square">
                <div className="column">
                    <div className="cell">
                        <div className="cell" onClick={(e) => this.clickCell(e, "0", "0")}><Cell el = {this.state.xo}/></div>
                        <div className="cell" onClick={(e) => this.clickCell(e, "0", "1")}><Cell el = {this.state.xo}/></div>
                        <div className="cell" onClick={(e) => this.clickCell(e, "0", "2")}><Cell el = {this.state.xo}/></div>
                    </div>
                    <div className="cell">
                        <div className="cell" onClick={(e) => this.clickCell(e, "1", "0")}><Cell el = {this.state.xo}/></div>
                        <div className="cell" onClick={(e) => this.clickCell(e, "1", "1")}><Cell el = {this.state.xo}/></div>
                        <div className="cell" onClick={(e) => this.clickCell(e, "1", "2")}><Cell el = {this.state.xo}/></div>
                    </div>
                    <div className="cell">
                        <div className="cell" onClick={(e) => this.clickCell(e, "2", "0")}><Cell el = {this.state.xo}/></div>
                        <div className="cell" onClick={(e) => this.clickCell(e, "2", "1")}><Cell el = {this.state.xo}/></div>
                        <div className="cell" onClick={(e) => this.clickCell(e, "2", "2")}><Cell el = {this.state.xo}/></div>
                    </div>
                </div>
          </div>
    );
    
}

}

export default MyXO;