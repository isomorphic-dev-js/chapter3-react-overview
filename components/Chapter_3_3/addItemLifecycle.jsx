import React from 'react';
import Button from '../button.jsx'

class AddItemLifecycle extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      desc: ''
    }
    this.update = this.update.bind(this);
  }

  componentWillMount() {
    // fetch data
    this.props.actions.lifecycleEvent('componentWillMount');
  }

  componentDidMount() {
    // add third party non react libraries, things that need window
    // add event listeners
    this.props.actions.lifecycleEvent('componentDidMount');
  }

  componentWillReceiveProps(nextProps) {
    this.refs['description'].value = '';
    this.props.actions.lifecycleEvent('componentWillRecieveProps', nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    this.props.actions.lifecycleEvent('shouldComponentUpdate', nextProps, nextState);
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    //remove event listers
    this.props.actions.lifecycleEvent('componentWillUpdate', nextProps, nextState)
  }

  componentDidUpdate(prevProps, prevState) {
    // add event listeners
    this.props.actions.lifecycleEvent('componentDidUpdate', prevProps, prevState);
  }

  componentWillUnmount() {
    this.props.actions.lifecycleEvent('componentWillUnmount');
  }

  update() {
    this.setState({
      desc: this.refs['description'].value
    });
  }

  render() {
    this.props.actions.lifecycleEvent('render');
    return (
      <div className="add-item">
        <h2>Add todo:</h2>
        <div className="form-input">
          <span>Description: </span><input ref="description" />
        </div>
        <Button clickHandler={this.update} label="Create New" />
      </div>
    )
  }
}

export default AddItemLifecycle;
