import React from "react";
import PropTypes from "prop-types";
import TEXTAREA from "./style-textarea";
TextArea.propTypes = {
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  className: PropTypes.string,
  typename: PropTypes.string,
  placeholder: PropTypes.string,
  rows: PropTypes.number,
  col: PropTypes.number,
};

TextArea.defaultProps = {
  onChange: () => console.log("Please enter the onChange info"),
  onFocus: () => console.log("OnFocus"),
  className: "",
  typename: "",
  placeholder: "",
  rows: 0,
  col: 0,
};
export default function TextArea(props) {
  const {
    typename,
    onChange,
    className,
    placeholder,
    rows,
    col,
    varient,
    onFocus,
    ...otherProps
  } = props;

  return (
    <TEXTAREA
      type={typename}
      className={className}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      col={col}
      varient={varient}
      onFocus={onFocus}
      {...otherProps}
    ></TEXTAREA>
  );
}
