import React from 'react';
import Button from './button.jsx';

class AddItem extends React.Component {

  constructor(props) {
    super(props);
    this.add = this.add.bind(this);
  }

  add() {
    this.props.actions.add(this.refs.description.value)
  }

  render() {
    return (
      <div className="add-item">
        <h2>Add todo:</h2>
        <div className="form-input">
          <span>Description: </span><input ref="description" />
        </div>
        <Button clickHandler={this.add}>Create New</Button>
      </div>
    )
  }
}

export default AddItem;
