import React from 'react';
import List from './list.jsx';
import Tabs from './tabs.jsx';
import AddItem from './addItem.jsx';

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

  filterTodos() {
    return this.props.todos.filter((todo) => {
      if (this.props.activeTab == 0) {
        return true;
      } else if (this.props.activeTab == 1) {
        return !todo.done;
      } else {
        return todo.done;
      }
    });
  }

  render(){
    let actions = {updateTabView: updateTabView}
    return (
      <div className='todo-app'>
        <h1>ToDo App</h1>
        <Tabs {...this.props} actions={actions}/>
        <List {...this.props} data={this.filterTodos()} />
        <AddItem {...this.props} />
      </div>
    )
  }
}

export default ToDo;
