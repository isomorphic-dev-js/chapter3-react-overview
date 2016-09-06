import React from 'react';
import Button from './button.jsx';

class Item extends React.Component {

  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
    this.complete = this.complete.bind(this);
  }

  delete() {
    console.log("this.props.actions", this.props.actions)
    this.props.actions.delete(this.props.id)
  }

  complete() {
    this.props.actions.complete(this.props.id)
  }

  render(){
    return (
      <div className="list-item">
        <div>{this.props.name}</div>
        <Button clickHandler={this.delete}>Delete</Button>
        {this.props.done ? "" : <Button clickHandler={this.complete}>Complete</Button>}
      </div>
    )
  }
}

export default Item;
