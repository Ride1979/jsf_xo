import React from 'react';
import ReactDOM from 'react-dom';


class Cell extends React.Component {

constructor(props) {
    super(props);
}


render() {
    if (this.props.el == 1) {
        //return (<div className="cell" className="d24"></div>);
return (
<svg className="cell2" width="100%" height="100%" >
 <g>
  <path stroke-opacity="0" id="svg_3" d="m2.499512,71.689796l0,0c0,-38.211601 30.976837,-69.187847 69.186859,-69.187847l0,0c18.349457,0 35.948761,7.289181 48.921509,20.264332c12.97641,12.975151 20.265167,30.5737 20.265167,48.923515l0,0c0,38.211693 -30.977112,69.187904 -69.186676,69.187904l0,0c-38.210022,0 -69.186859,-30.976212 -69.186859,-69.187904zm34.591705,0l0,0c0,19.105858 15.488129,34.594002 34.595154,34.594002c19.102814,0 34.591553,-15.488144 34.591553,-34.594002c0,-19.105736 -15.488739,-34.593903 -34.591553,-34.593903l0,0c-19.107025,0 -34.595154,15.488167 -34.595154,34.593903z" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="5" stroke="#000000" fill="#ff7f00"/>
 </g>
</svg>)

    } else if (this.props.el == -1) {
        return (<div className="cell" className="ring"></div>);
    } else {
        return (<div className="cell"></div>);
    }
}

}

export default Cell;