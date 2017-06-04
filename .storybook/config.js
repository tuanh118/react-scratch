import { configure } from '@storybook/react';

function loadStories() {
  // Default story
  require('../stories/index.js');
}

configure(loadStories, module);
