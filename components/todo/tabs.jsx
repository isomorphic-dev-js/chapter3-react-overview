import React from 'react';

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

const Tab = () => {
  return null;
}

export default Tab;

