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
  delete: action('delete'),
  complete: action('complete'),
  add: action('add')
}

storiesOf('ToDo app', module)
  .add('final version', () => (
    <ToDo todos={todos} actions={actions} />
  ))
