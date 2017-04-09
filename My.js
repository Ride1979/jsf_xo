import React from 'react';
import ReactDOM from 'react-dom';

import Cell from './Cell';

class MyXO extends React.Component {

constructor(props) {
    super(props);
    this.state = {
        xo: "X",
        matrix: [[0, 0, 0],
                 [0, 0, 0],
                 [0, 0, 0]]
        }
}

clickCell() {
    if (this.state.xo == "X") 
    {
        this.setState({xo: "0"});
    }
    else {
        this.setState({xo: "X"});
    }
/*    let str = "";
    for(let row = 0; row < this.state.matrix.length; row++) {
	    for(let col = 0; col < this.state.matrix[row].length; col++) {
            console.log(row + ' ' + col);
		    console.log(this.state.matrix[row][col] + '  ');
	}
	console.log('\n');
    }*/
    console.log(this.state.matrix[0]);
    console.log(this.state.matrix[1]);
    console.log(this.state.matrix[2]);
}

render() {
    let strRender = " ";
    strRender = "<div className=\"square\"><div className=\"column\">";
    for(let row = 0; row < this.state.matrix.length; row++) {
        strRender = strRender + "<div className=\"cell\">";
	    for(let col = 0; col < this.state.matrix[row].length; col++) {
		    strRender = strRender + "<div className=\"cell\">2</div>";
	    }
        strRender = strRender + "</div>";
    }
    strRender = strRender + "</div></div>";

    let str = (
          <div className="square">
                <div className="column">
                    <div className="cell">
                        <div className="cell" onClick={this.clickCell.bind(this)}><Cell el = {this.state.xo}/></div>
                        <div className="cell">2</div>
                        <div className="cell">3</div>
                    </div>
                    <div className="cell">
                        <div className="cell">4</div>
                        <div className="cell">5</div>
                        <div className="cell">6</div>
                    </div>
                    <div className="cell">
                        <div className="cell">7</div>
                        <div className="cell">8</div>
                        <div className="cell">9</div>
                    </div>
                </div>
          </div>
    );

    
   // console.log(strRender);
    return str;
    
}

}

export default MyXO;