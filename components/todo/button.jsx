import React from 'react';

const Button = (props) => {
  return <button onClick={props.clickHandler}>{props.children}</button>
}

export default Button;
