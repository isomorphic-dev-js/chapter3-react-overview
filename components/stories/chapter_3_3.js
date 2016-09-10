import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Lifecycle from '../Chapter_3_3/lifecycle.jsx';

storiesOf('Chapter 3.3 examples', module)
  .add('Lifecycle example', () => (
    <Lifecycle actions={{lifecycleEvent: action('lifecycleEvent')}}/>
  ))
