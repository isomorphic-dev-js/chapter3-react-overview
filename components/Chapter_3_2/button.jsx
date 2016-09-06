import React from 'react';

const Button = (props) => {
  return <button className="btn" onClick={props.clickHandler}>{props.label}</button>
}

export default Button;
