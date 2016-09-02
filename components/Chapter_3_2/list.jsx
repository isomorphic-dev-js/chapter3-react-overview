import React from 'react';
import Item from './item.jsx'

let List = () => {
  let listItems = [];
  this.props.data.forEach((item)=>{
    listItems.push(<Item key={item.id} {...item} {...this.props}/>);
  });

  return <div>{listItems}</div>
}

export default List;
