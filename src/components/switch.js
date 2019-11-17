import React from 'react';
import './Switch.css';

const Switch = (props) => {
  return (
    <React.Fragment>
      <input
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
        onChange={props.toggle}
      />
      <label
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
    </React.Fragment>
  );
};

export default Switch;