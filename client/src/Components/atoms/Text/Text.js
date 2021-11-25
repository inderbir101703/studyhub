import React from "react";
import PropTypes from "prop-types";
import withStyles from "../../withstyle";
import { TextStyle } from "./Text.style";

const TextElement = ({ content, varient, className, ...otherProps }) => {
  return (
      <span className={`${className}`} varient={varient} aria-label= {content} {...otherProps}>{content}</span>  
  );
};

TextElement.propTypes = {
  content: PropTypes.string,
  className: PropTypes.string
};

TextElement.defaultProps = {
  content: "Hi",
  varient: {
    color: "",
    backgroundColor: "",
    fontSize: "",
    border:"",
    borderRadius:""
  }
};

export default withStyles(TextElement, TextStyle);
export {TextElement};
