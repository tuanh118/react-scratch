import { configure } from '@storybook/react';
import './style.css';

function loadStories() {
  // Default story
  require('../stories/index.js');
}

configure(loadStories, module);
