import React from "react";

import HeaderStyle from "./Header.style";
import UserHeaderDetails from "../../molecules/UserHeaderDetails";
import Toggle from "react-toggle";
import { connect } from "react-redux";
import { fetchTheme, fetchLanguage } from "../../../actions/post-action";
import "react-toggle/style.css";
import Icon from "../../atoms/Icon/icon";

const Header = ({
  name, 
  setUserClick,
  currentTheme,
  currentLanguage,
  language,
  ...otherProps
}) => {
  return (
    <HeaderStyle name={name} {...otherProps}>
    <Toggle
        defaultChecked={true}
        onChange={(event) => {
          if (event?.target?.checked) currentTheme("light");
          else currentTheme("dark");
        }}
        icons={{
          checked: (
            <div>
              <Icon iconClassName="fas faSun" className="custom-classname" />
            </div>
          ),
          unchecked: <Icon iconClassName="fas faMoon" />,
        }}
      />
      <Toggle
        defaultChecked={true}
        onChange={(event) => {
          if (event?.target?.checked) currentLanguage("en");
          else currentLanguage("hindi");
        }}
        icons={{
          checked: (
            <div>
              <Icon
                iconClassName="fas faDollarSign"
                className="custom-classname"
              />
            </div>
          ),
          unchecked: <Icon iconClassName="fas faRupeeSign" />,
        }}
      />
      <UserHeaderDetails name={name} setUserClick={setUserClick} />
    </HeaderStyle>
  );
};

Header.propTypes = {};

Header.defaultProps = {
  name: "",
};

const actionAsProps = {
  currentTheme: fetchTheme,
  currentLanguage: fetchLanguage,
};

export default connect(null, actionAsProps)(Header);
