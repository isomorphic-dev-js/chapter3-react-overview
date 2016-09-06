import React from 'react';
import Item from './item.jsx'

class List extends React.Component {

  render() {
    let listItems = [];
    this.props.data.forEach((item)=>{
      listItems.push(<Item key={item.id} {...item} {...this.props}/>);
    });

    return <div className="list">{listItems}</div>
  }
}

export default List;
