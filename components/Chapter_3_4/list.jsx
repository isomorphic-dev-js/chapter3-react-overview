import React from 'react';
import Item from './itemDone.jsx'

const List = (props) => {
  let listItems = [];
  props.data.forEach((item)=>{
    listItems.push(<Item key={item.id} {...item} actions={props.actions}/>);
  });

  return <div>{listItems}</div>
}

export default List;
