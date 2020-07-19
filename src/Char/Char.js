import React from 'react';

function CharComponent(props) {
  const style = {
    "display": "inline-block",
    "padding": "16px",
    "textAlign": "center",
    "margin": "16px",
    "border": "1px solid black"
  }
  return (
    <div className="CharComponent" style={style} onClick={props.click}>
      <p>{ props.character }</p>
    </div>
  )
}

export default CharComponent;
