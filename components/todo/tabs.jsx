import React from 'react';

class Tabs extends React.Component {
  render() {
    return (
      <div className="tabs">
        <Tab {...this.props} name="All" index="0"/>
        <Tab {...this.props} name="Current" index="1"/>
        <Tab {...this.props} name="Done" index="2"/>
      </div>
    )
  }
}

export default Tabs;


export class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.actions.updateTabView(this.props.index)
  }

  render() {
    return (
      <div className="tab"
        onClick={this.handleClick}>
        {this.props.name}
      </div>
    )
  }
}
