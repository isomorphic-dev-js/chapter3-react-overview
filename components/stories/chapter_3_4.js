import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Link from '../Chapter_3_4/link.jsx';
import ListItemFunctional from '../Chapter_3_4/listItemFunctional.jsx';
import ButtonBasic from '../Chapter_3_4/buttonBasic.jsx';
import List from '../Chapter_3_4/list.jsx';


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
    name: "Get a haircut",
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
  delete: action('deleteTodo'),
  complete: action('complete'),
  add: action('add')
}

storiesOf('Chapter 3.4 examples', module)
  .add('JSX basic button', () => (
    <ButtonBasic/>
  ))
  .add('link displays with props', () => (
    <Link displayName="My first link"
        link="http://google.com"
        target="_blank"/>
  ))
  .add('list item functional', () => (
    <ListItemFunctional completeCallback={actions.complete}
                   deleteCallback={actions.delete}
                   name="My first todo item"/>
  ))
  .add('list container with list item', () =>(
    <List data={todos} actions={actions}/>
  ));
