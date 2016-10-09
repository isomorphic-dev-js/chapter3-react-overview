import React from 'react';

const ItemDone = (props) => {
  let completeButton = "";
  if (!props.done) {
    completeButton = <button onClick={props.completeCallback}>Complete</button>
  }
  return (
    <div>
      <div>{props.name}</div>
      <button onClick={props.deleteCallback}>Delete</button>
    </div>
  )
}

export default ItemDone;
