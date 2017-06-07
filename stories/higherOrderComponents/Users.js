/*
Learn about higher order component using Recompose
compose, setDisplayName, setPropTypes
*/

import React, { Component } from 'react';
import { compose, setPropTypes, setDisplayName } from 'recompose';
import PropTypes from 'prop-types';

/** Root component */
export const User = ({ name, status }) =>
  <div className="User" style={{ maxWidth: '200px' }}>{name}: {status}</div>

/** HOC that overrides some props */
const overrideProps = (overrideProps) => (BaseComponent) => (props) =>
  <BaseComponent {...props} {...overrideProps} />
export const BobUser = overrideProps({ name: 'Bob' })(User)

/** Compose multiple HOCs */
const enhance = compose(
  setDisplayName('User'),
  setPropTypes({
    name: PropTypes.string.isRequired,
    status: PropTypes.string
  })
)
export const EnhancedUser = enhance(User)
