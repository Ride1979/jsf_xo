import React from 'react';
import ReactDOM from 'react-dom';


class Cell extends React.Component {

constructor(props) {
    super(props);
}


render() {
    if (this.props.el == 1) {
        return (<div className="cell" className="d24"></div>);
    } else if (this.props.el == -1) {
        return (<div className="cell" className="ring"></div>);
    } else {
        return (<div className="cell"></div>);
    }
}

}

export default Cell;