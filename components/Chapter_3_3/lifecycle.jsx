import React from 'react';
import AddItemLifecycle from './addItemLifecycle.jsx';
import Button from '../Chapter_3_2/button.jsx';

class Lifecycle extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showChild: false,
      testUpdateProp: null
    }
    this.updateChildVisibility = this.updateChildVisibility.bind(this);
    this.updateProps = this.updateProps.bind(this);
  }

  updateChildVisibility(event) {
    this.setState({
      showChild: !this.state.showChild
    })
  }

  updateProps(event) {
    this.setState({
      testUpdateProp: {
        value: Math.random()
      }
    });
  }

  render() {
    console.log("state", this.state.showChild);
    return (
      <div className="lifecycle">
        {this.state.showChild ? <AddItemLifecycle {...this.props} testUpdateProp={this.state.testUpdateProp}/> : ""}
        <Button clickHandler={this.updateChildVisibility} label="Toggle"/>
        {this.state.showChild ? <Button clickHandler={this.updateProps} label="Test Update Prop"/> : ""}
      </div>
    );
  }
}

export default Lifecycle ;
