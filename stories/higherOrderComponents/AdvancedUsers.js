/*
withState, withHandlers
*/

import React, { Component } from 'react';
import { compose, withState, withHandlers } from 'recompose';

const withToggle = compose(
  withState('toggledOn', 'setToggle', false),
  withHandlers({
    show: ({ setToggle }) => () => setToggle(true),
    hide: ({ setToggle }) => () => setToggle(false),
    toggle: ({ setToggle }) => () => setToggle(x => !x),
  })
)

const StatusList = () =>
  <div className="StatusList">
    <div>pending</div>
    <div>inactive</div>
    <div>active</div>
  </div>

const Status = withToggle(
  ({ status, toggledOn, toggle }) =>
    <span onClick={toggle}>
      {status}
      {toggledOn && <StatusList />}
    </span>
)

const Tooltip = withToggle(
  ({ text, children, toggledOn, show, hide }) =>
    <span>
      {toggledOn && <div className="Tooltip">{text}</div>}
      <span
        onMouseEnter={show}
        onMouseLeave={hide}
      >
        {children}
      </span>
    </span>
)

export const AdvancedUser = ({ name, status }) =>
  <div className="User">
    <Tooltip text="Cool Dude!">{name}</Tooltip>-
    <Status status={status} />
  </div>
