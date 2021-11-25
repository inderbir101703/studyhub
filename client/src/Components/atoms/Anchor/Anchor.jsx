import React from "react";
import PropTypes from "prop-types";
import { LinkStyle } from "./Anchor.style";
import { Link } from "react-router-dom";

const Anchor = ({ href, target, varient, className, children, ...props }) => {
  return (
    <LinkStyle
      href={href}
      target={target}
      varient={varient} 
      className={`${className}`}
      {...props}
    >
      {children}
    </LinkStyle>
  );
};

Anchor.propTypes = {
  href: PropTypes.string,
  target: PropTypes.string,
  text: PropTypes.string,
  varient: PropTypes.string,
  className: PropTypes.string,
};

Anchor.defaultProps = {
  href: "#",
  text: "",
  target: "_self",
  varient: "",
};

export default Anchor;
