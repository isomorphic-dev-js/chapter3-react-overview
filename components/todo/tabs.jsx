import React from 'react';
import classnames from 'classnames';

class Tabs extends React.Component {
  render() {
    return (
      <div className="tabs">
        <Tab {...this.props} name="All" index="0" active={this.props.activeTab == 0}/>
        <Tab {...this.props} name="Current" index="1" active={this.props.activeTab == 1}/>
        <Tab {...this.props} name="Done" index="2" active={this.props.activeTab == 2}/>
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
    const classes = classnames({active: this.props.active}, 'tab')

    return (
      <div className={classes}
        onClick={this.handleClick}>
        {this.props.name}
      </div>
    )
  }
}
