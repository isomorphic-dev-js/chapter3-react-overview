import React from 'react';
import Button from './button.jsx';

let ListItemFunctional = (props) => {
  return (
    <div>
      <div>{props.name}</div>
      <Button clickHandler={props.deleteCallback} label='Delete'></Button>
      <Button clickHandler={props.completeCallback} label='Complete'></Button>
    </div>
  )
}

export default ListItemFunctional;
