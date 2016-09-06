import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Link from '../../Chapter_3_2/link.jsx';
import ListItemFunctional from '../../Chapter_3_2/listItemFunctional.jsx';
import ButtonBasic from '../../Chapter_3_2/buttonBasic.jsx';

storiesOf('Chapter 3.2 examples', module)
  .add('JSX basic button', () => (
    <ButtonBasic/>
  ))
  .add('link displays with props', () => (
    <Link displayName="My first link"
        url="http://google.com"
        target="_blank"/>
  ))
  .add('todo item functional', () => (
    <ListItemFunctional completeCallback={action('complete')}
                   deleteCallback={action('delete')}
                   name="My first todo item"/>
  ));
