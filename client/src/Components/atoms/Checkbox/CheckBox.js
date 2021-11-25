import React from "react";
import PropTypes from "prop-types";
import { StyledCheckbox } from "./Checkbox.style.js";
import withStyles from "../../withstyle";

const CheckBox = ({
  type,
  name,
  id,
  checkBoxLabel,
  varient,
  className,
  onChangeFunction,
  checked,
  checkClass,
  labelClass,
  ...otherProps
}) => {
  return (
    <span className={`${className}`}>
      <input
        type={type}
        name={name}
        id={id}
        checked={checked}
        aria-labelledby={id}
        data-testid="input-checkbox"
        className={checkClass}
        onChange={onChangeFunction}
        {...otherProps}
      />
      <label
        varient={varient}
        for={id}
        data-testid="label"
        className={labelClass}
      >
        {" "}
        {checkBoxLabel}{" "}
      </label>
    </span>
  );
};

CheckBox.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  checkBoxLabel: PropTypes.string,
  varient: PropTypes.string,
  checkClass:PropTypes.string,
  labelClass:PropTypes.string,
};
CheckBox.defaultProps = {
  type: "",
  name: "",
  id: "",
  checkBoxLabel: "",
  varient: "",
  checkClass:"check",
  labelClass:"checklabel",
};

export default withStyles(CheckBox, StyledCheckbox);
export { CheckBox as CheckBoxNotStyled };
