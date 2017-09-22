import React from 'react';

class Square extends React.Component {
  render() {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
  }
}