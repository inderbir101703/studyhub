import React from "react";
import PropTypes from "prop-types";
import Input from "../../atoms/inputs/input";
import InputStyle from "./InputWithLabelAndError.style";

const InputWithLabelAndError = ({
  label,
  id,
  type,
  name,
  placeholder,
  onChange,
  onBlur,
  value,
  error,
  touched,
  showError,
}) => {
  return (
    <InputStyle>
      <label for={id} className="general-label">
        {label}
      </label>
      <Input
        placeholder={placeholder}
        className="general-input"
        name={name}
        ariaLabel={name}
        title={name}
        type={type}
        id={id}
        onBlur={onBlur}
        onChange={onChange}
        value={value}
      />
      {showError ? <span className="general-error">{error}</span> : null}
    </InputStyle>
  );
};

InputWithLabelAndError.propTypes = {
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string,
};

InputWithLabelAndError.defaultProps = {
  onChange: () => {},
  onBlur: () => {},
  placeholder: "",
  type: "text",
};

export default InputWithLabelAndError;
