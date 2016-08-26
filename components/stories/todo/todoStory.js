import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import ToDo from '../../todo/todo.jsx';

let todos = [
  {
    name: "Finish the dishes",
    done: true,
    id: 0
  },
  {
    name: "Walk the dog",
    done: false,
    id: 1
  },
  {
    name: "Get a haricut",
    done: true,
    id: 2
  },
  {
    name: "Work on Chapter 3",
    done: false,
    id: 3
  }
]

let actions = {
  updateTabView: action('updateTabView'),
  delete: action('delete'),
  complete: action('complete'),
  add: action('add')
}

storiesOf('ToDo app', module)
  .add('all', () => (
    <ToDo todos={todos} activeTab="0" actions={actions} />
  ))
  .add('current', () => (
    <ToDo todos={todos} activeTab="1" actions={actions} />
  ))
  .add('done', () => (
    <ToDo todos={todos} activeTab="2" actions={actions} />
  ));
