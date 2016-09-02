import React from 'react';

function ItemFunctional(props) {
  return (
    <div>
      <div>{props.name}</div>
      <button onClick={props.deleteCallback}>Delete</button>
      <button onClick={props.completeCallback}>Complete</button>
    </div>
  )
}

export default ItemFunctional;
