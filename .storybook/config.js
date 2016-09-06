import { configure } from '@kadira/storybook';
import styles from '../components/styles.css'

function loadStories() {
  require('../components/stories/Chapter_3_2/chapter_3_2_examples.js');
  require('../components/stories/todo/todoStory.js');
  // require as many stories as you need.
}

configure(loadStories, module);
