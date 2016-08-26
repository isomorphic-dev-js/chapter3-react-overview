import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Test from '../../test.js'

storiesOf('Button', module)
  .add('with text', () => (
    <button onClick={action('clicked')}>My First Button</button>
  ))
  .add('with no text', () => (
    <button></button>
  ));

storiesOf('TestComponent', module)
  .add('test', () => (
    <Test />
  ))
