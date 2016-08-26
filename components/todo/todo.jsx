import React from 'react';
import List from './list.jsx';
import Tabs from './tabs.jsx';
require('css!./styles.css');

class ToDo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tab: 0
    }
  }

  updateTabView(index) {
    this.setState({
      tab: index
    })
  }

  render(){
    console.log(this.props)
    return (
      <div className='todo-app'>
        <h1>ToDo App</h1>
        <Tabs {...this.props}/>
        <List {...this.props} data={this.props.todos} />
        <div className="add">
          <span>Description: </span><input />
          <button onClick={this.props.addToDo}>Add a ToDo</button>
        </div>
      </div>
    )
  }
}

export default ToDo;
