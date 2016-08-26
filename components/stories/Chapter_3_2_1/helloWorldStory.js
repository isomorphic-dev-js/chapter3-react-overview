import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import HelloWorld from '../../Chapter_3_2_1/helloWorld.jsx';
import HelloWorldVar from '../../Chapter_3_2_1/helloWorldVar.jsx';

storiesOf('Hello World, 3.2.1', module)
  .add('example 1, with text', () => (
    <HelloWorld/>
  ))
  .add('example 2, add a variable', () => (
    <HelloWorldVar/>
  ));
