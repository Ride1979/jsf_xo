import React from 'react';
import ReactDOM from 'react-dom';


class Cell extends React.Component {

constructor(props) {
    super(props);
}


render() {
    let xo = this.props.el;
    return (
          <div className="cell">{xo}</div>
    );
}

}

export default Cell;