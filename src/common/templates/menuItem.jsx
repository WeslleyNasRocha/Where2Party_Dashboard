import React from 'react';

export default props => (
  <li>
    <a href={props.path}>
      <i className={props.icon} />
      {props.label}
    </a>
  </li>
);
