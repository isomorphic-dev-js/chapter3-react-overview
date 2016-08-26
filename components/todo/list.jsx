import React from 'react';
import Item from './item.jsx'

class List extends React.Component {

  render() {
    let listItems = [];
    this.props.data.forEach((item, index)=>{
      listItems.push(<Item key={item.name+index} name={item.name} {...this.props}/>);
    });

    return <div>{listItems}</div>
  }
}

export default List;
