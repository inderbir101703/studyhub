import React from 'react';
import PropTypes from "prop-types";
import INPUT from './styled-input'

const Input=({
    className,
    type,
    placeholder,
    name,
    onBlur,
    onChange,
    ariaLabel,
    title,
    ...otherProps
} )=>{
    return (
        <INPUT
            className={className}
            type={type}
            placeholder={placeholder}
            name={name}
            onBlur={onBlur}
            onChange={onChange}
            aria-label={ariaLabel}
            title={title}
            {...otherProps}
        >
        </INPUT>
    );
}

Input.propTypes = {
    className: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func
};

function defaultBlur() {
    return;
}
function defaultChange() {
    return;
}
Input.defaultProps = {
    className: "",
    type: "",
    placeholder: "",
    name: "",
    ariaLabel: "",
    title: "",
    onChange: defaultChange(),
    onBlur: defaultBlur()
};
export default Input;