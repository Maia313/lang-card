import React from 'react';

import './Card.css';

const Card = (props) => {
  return (<div className="card-container">
    <div className="card">
      <div className="front">
        <div className="eng">{props.eng}</div>
      </div>
      <div className="back">
        <div className="deutsch">{props.deutsch}</div>
      </div>
    </div>
  </div>)
}

export default Card;