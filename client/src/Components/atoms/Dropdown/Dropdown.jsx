import React from "react";
import PropTypes from "prop-types";
import { DropdownStyle } from "./Dropdown.style";

const Dropdown = (props) => {
  const { name, options, onChange, className, ...otherProps } = props;

  return (
    <DropdownStyle
      className={className}
      onChange={onChange}
      name={name}
      {...otherProps}
    >
      {options.map((option) => (
        <option value={option.value} disabled={option.disabled} selected={option.selected}>
          {option.label}
        </option>
      ))}
    </DropdownStyle>
  );
};

Dropdown.propTypes = {
  name: PropTypes.string,
  options: PropTypes.array,
  onChange: PropTypes.func,
  className: PropTypes.string,
};

Dropdown.defaultProps = {
  options: [
    {
      label: "Select a Category",
      value: "Select a Category",
    },
  ],
  onChange: () => {},
  className: "",
};

export default Dropdown;
