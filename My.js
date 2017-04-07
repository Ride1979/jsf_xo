import React from 'react';
import ReactDOM from 'react-dom';

class MyXO extends React.Component {


render() {
    return (
          <div className="square">
                <div className="column">
                    <div className="cell">
                        <div className="cell">1</div>
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
}

}

export default MyXO;