import { configure } from '@kadira/storybook';

function loadStories() {
  require('../components/stories/Chapter_3_2_1/helloWorldStory.js');
  require('../components/stories/todo/todoStory.js');
  // require as many stories as you need.
}

configure(loadStories, module);
