import React from 'react';

class Item extends React.Component {

  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
    this.complete = this.complete.bind(this);
  }

  delete() {
    console.log("Delete", this.props.actions)
    this.props.actions.delete(this.props.id)
  }

  complete() {
    this.props.actions.complete(this.props.id)
  }

  render(){
    return (
      <div>
        <div>{this.props.name}</div>
        <button onClick={this.delete}>Delete</button>
        <button onClick={this.complete}>Complete</button>
      </div>
    )
  }
}

export default Item;
