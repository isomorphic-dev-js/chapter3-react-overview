import { configure } from '@kadira/storybook';
import styles from '../components/styles.css'

function loadStories() {
  require('../components/stories/chapter_3_4.js');
  require('../components/stories/chapter_3_6.js');
  require('../components/stories/todo.js');
  // require as many stories as you need.
}

configure(loadStories, module);
