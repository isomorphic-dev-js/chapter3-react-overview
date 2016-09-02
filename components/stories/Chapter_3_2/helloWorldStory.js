import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import HelloWorld from '../../Chapter_3_2/helloWorld.jsx';
import HelloWorldVar from '../../Chapter_3_2/helloWorldVar.jsx';
import Link from '../../Chapter_3_2/link.jsx';
import ItemFunctional from '../../Chapter_3_2/itemFunctional.jsx';

storiesOf('Hello World, 3.2.1', module)
  .add('example 1, with text', () => (
    <HelloWorld/>
  ))
  .add('example 2, add a variable', () => (
    <HelloWorldVar/>
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
