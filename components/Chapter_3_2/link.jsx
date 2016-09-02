import React from 'react';

export default (props) => {
  return <a href={props.link} target={props.target}>{props.displayName}</a>
}
