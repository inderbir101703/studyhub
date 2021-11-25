import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as fa from "@fortawesome/free-solid-svg-icons";
import * as far from "@fortawesome/free-regular-svg-icons";

const Icon = ({
  iconClassName,
  size,
  style,
  color,
  onClick,
  ...otherProps
}) => {
  let iconName;

  if (iconClassName) {
    let classNameType = iconClassName.split(" ");
    if (classNameType[0] === "fas") {
      iconName = fa[classNameType[1]];
    } else {
      iconName = far[classNameType[1]];
      if (!iconName) {
        iconName = fa[classNameType[1]];
      }
    }
  }

  return (
    <i data-testid="icon" iconsize={size} color={color} {...otherProps}>
      {onClick ? (
        <FontAwesomeIcon
          icon={iconName}
          size={size}
          style={{ ...style, cursor: "pointer" }}
          color={color}
          onClick={onClick}
        />
      ) : (
        <FontAwesomeIcon
          icon={iconName}
          size={size}
          style={{ ...style }}
          color={color}
        />
      )}
    </i>
  );
};

Icon.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.string),
  onClick: PropTypes.func,
  reqOnClick: PropTypes.bool,
  iconClassName: PropTypes.string,
};

Icon.defaultProps = {
  size: "sm",
  color: "",
  iconClassName: "fas faHome",
  onClick: null,
  reqOnClick: false,
  style: {
    color: "white",
    backgroundColor: "inherit",
    fontSize: "inherit",
  },
};

export default Icon;
