import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Link from '../../Chapter_3_2/link.jsx';
import ItemFunctional from '../../Chapter_3_2/itemFunctional.jsx';
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
    <ItemFunctional completeCallback={action('complete')}
                   deleteCallback={action('delete')}
                   name="My first todo item"/>
  ));
