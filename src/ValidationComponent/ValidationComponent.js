import React from 'react';

function ValidationComponent(props) {
  if (props.count <= 5) {
    let textvalue = "Text too short"
    return textvalue;
  } 
  if (props.count > 5) {
    let textvalue = "Text too Long"
    return textvalue;
  } 
  return (
    <div className="ValidationComponent">
      <h3>{props.count}</h3>
      <h1>{this.textvalue}</h1>
    </div>
  )
}

export default ValidationComponent;
