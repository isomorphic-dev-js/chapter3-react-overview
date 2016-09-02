import { configure } from '@kadira/storybook';
import styles from 'css!../components/styles.css'

function loadStories() {
  require('../components/stories/Chapter_3_2/helloWorldStory.js');
  require('../components/stories/todo/todoStory.js');
  // require as many stories as you need.
}

configure(loadStories, module);
