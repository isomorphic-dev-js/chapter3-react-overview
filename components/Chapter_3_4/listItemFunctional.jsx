import React from 'react';
import Button from './button.jsx';

const ListItemFunctional = (props) => {
  return (
    <div>
      <div>{props.name}</div>
      <Button key='Delete' clickHandler={props.deleteCallback} label='Delete'></Button>
      <Button key='Complete' clickHandler={props.completeCallback} label='Complete'></Button>
    </div>
  )
}

export default ListItemFunctional;
