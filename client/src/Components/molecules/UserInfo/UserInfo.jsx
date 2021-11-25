import React from "react";
import UserInfoStyle from "./UserInfo.style";
import Image from "../../atoms/Image";

import { connect } from "react-redux";

const UserInfo = ({ auth, name, setUserClick, language }) => {
  const { nameLabel, idLabel, aboutLabel } = language;
  return (
    <UserInfoStyle>
      <Image
        src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
        alt=" user"
      />
      <div className="user-details">
        <span>
          <strong>{nameLabel}: </strong>inderbit
        </span>
        <span>
          <strong>{idLabel}: </strong>ibsbhidner54@gmail.com
        </span>
        <span>
          <strong>{aboutLabel} :</strong> hey hey
        </span>
      </div>
    </UserInfoStyle>
  );
};

UserInfo.propTypes = {};

UserInfo.defaultProps = {};

const mapStateToprops = (state) => {
  if (state) {
    return {
      language: state?.home?.language,
    };
  } else {
    return {
      language: null,
    };
  }
};

export default connect(mapStateToprops, null)(UserInfo);
