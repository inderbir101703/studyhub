import React from "react";
import PropTypes from "prop-types";
import withStyles from "../../withstyle";
import { LogoStyle } from "./Logo.style";

const Logo = ({ src, alt, varient, className, style, ...otherProps }) => {
  return (
    <img
      src={src}
      alt={alt}
      varient={varient}
      style={{ ...style }}
      className={`${className}`}
      data-testid="logo-1"
      {...otherProps}
    />
  );
};

Logo.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  varient: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.string),
  className: PropTypes.string,
};

Logo.defaultProps = {
  src: "logo.png",
  alt: "",
  varient: "",
  style: {},
};

export default withStyles(Logo, LogoStyle);

export { Logo as LogoNotStyled };
