import React from 'react';

class Tabs extends React.Component {

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
        <span>Description: </span><input ref="description" />
        <button onClick={this.add}>Create New</button>
      </div>
    )
  }
}

export default Tabs;
