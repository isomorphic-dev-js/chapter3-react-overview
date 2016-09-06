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
    this.updateTabView = this.updateTabView.bind(this);
  }

  updateTabView(index) {
    console.log('updateTabView', index)
    this.setState({
      tab: index
    })
  }

  filterTodos() {
    return this.props.todos.filter((todo) => {
      if (this.state.tab == 0) {
        return true;
      } else if (this.state.tab == 1) {
        return !todo.done;
      } else {
        return todo.done;
      }
    });
  }

  render(){
    let actions = this.props.actions || {};
    actions.updateTabView = this.updateTabView;
    return (
      <div className='todo-app'>
        <h1>Todo App</h1>
        <Tabs activeTab={this.state.tab} actions={actions}/>
        <List actions={actions} data={this.filterTodos()} />
        <AddItem actions={actions} />
      </div>
    )
  }
}

export default ToDo;
