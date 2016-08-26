import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import ToDo from '../../todo/todo.jsx';

let todos = [
  {
    name: "Test Todo1",
    done: true
  },
  {
    name: "Test Todo2",
    done: false
  },
  {
    name: "Test Todo3",
    done: false
  }
]

let addToDo = () => {
  todos.push({
    name: "test",
    done: false
  })
}

storiesOf('ToDo app', module)
  .add('full example', () => (
    <ToDo todos={todos} actions={{updateTabView: action('updateTabView'), delete: action('delete'), complete: action('complete')}}/>
  ));
