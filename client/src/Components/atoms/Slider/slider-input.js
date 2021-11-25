import React, { Component } from "react";
import PropTypes from "prop-types";


import INPUT from "./styledinput";


Slider.propTypes={
    className: PropTypes.string,
    min_value : PropTypes.number,
    max_value :PropTypes.number,
    step :PropTypes.number,
    value:PropTypes.number,
    onChange:PropTypes.func
}

export default function Slider(props) {
  const {
    className,
    min_value,
    label,
    max_value,
    step,
    value,
    onChange,
    defaultValue,
    title,
    ...otherProps
  } = props;
  
  return (
    <div>
      <INPUT
        className={className}
        type="range"
        min={min_value}
        max={max_value}
        step={step}
        value={value}
        onChange={onChange}
        defaultValue={defaultValue}
        title={title}
        {...otherProps}
      ></INPUT>
      <div></div>
    </div>
  );
}
