import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

/** Components */
import {
  User,
  BobUser,
  EnhancedUser
} from './higherOrderComponents/Users.js';
import {
  AdvancedUser
} from './higherOrderComponents/AdvancedUsers.js';

storiesOf('Button', module)
  .add('with text', () => (
    <button
      onClick={action('clicked')}
      className="btn btn-default"
    >
      Hello Button
    </button>
  ))

storiesOf('HOC', module)
  .add('default', () => (
    <User name={'Tuan Anh'} status={'Active'} />
  ))
  .add('override props', () => (
    <BobUser name={'Tuan Anh'} status={'Active'} />
  ))
  .add('enhanced', () => (
    <EnhancedUser name={'Tuan Anh'} status={'Active'} />
  ))
  .add('advanced', () => (
    <AdvancedUser name={'Tuan Anh'} status={'Active'} />
  ))
