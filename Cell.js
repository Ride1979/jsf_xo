import React from 'react';
import ReactDOM from 'react-dom';


class Cell extends React.Component {

constructor(props) {
    super(props);
}


render() {
    return (
          <div>{this.props.el}</div>
    );
}

}

export default Cell;