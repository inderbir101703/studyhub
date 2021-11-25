import React from "react";
import PropTypes from "prop-types";
import { ButtonStyle } from "./Button.style";

const Button = ({
  btnText,
  onClick,
  type,
  size,
  style,
  varient,
  className,
  onSubmit,
  ...otherProps
}) => {
  return (
    <ButtonStyle
      onClick={onClick}
      type={type}
      size={size}
      varient={varient}
      style={{ ...style }}
      className={`${className}`}
      aria-label={btnText}
      onSubmit={onSubmit}
      {...otherProps}
    >
      {btnText}
    </ButtonStyle>
  );
};

Button.propTypes = {
  btnText: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  size: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.string),
  varient: PropTypes.string,
  className: PropTypes.string,
};

Button.defaultProps = {
  btnText: "",
  onClick: () => console.log("Please enter the onClick info"),
  type: "",
  size: "",
  style: {},
  varient: "",
};

export default ButtonStyle
