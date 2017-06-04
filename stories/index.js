import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

storiesOf('Button', module)
  .add('with text', () => (
    <button
      onClick={action('clicked')}
      className="btn btn-default"
    >
      Hello Button
    </button>
  ))
