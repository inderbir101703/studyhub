import React from "react";
import UserHeader from "./UserHeaderDetails.style";
import Image from "../../atoms/Image";
import { connect } from "react-redux";
import Button from "../../atoms/Button";


const UserHeaderDetails = ({ auth, name, setUserClick, language,user }) => {
  const { loginText, signUpText, addPostLabel, editPostLabel, logOutText } =
    language;
  return (
    <UserHeader>
      
      {!user?._id&& <Button onClick={() => setUserClick("log-in")} name="Login">
        {loginText}
      </Button>}
      {!user?._id&& <Button onClick={() => setUserClick("sign-up")} name="signIn">
        {signUpText}
      </Button>}

      {user?._id&&
      <Button onClick={() => setUserClick("add-post")} name="addPost">
        {addPostLabel}
      </Button>}
     
      
      {user?._id&& <Image
        varient="user"
        src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
        onClick={() => setUserClick("edit-user")}
      />}
  
    </UserHeader>
  );
};

UserHeaderDetails.propTypes = {};

UserHeaderDetails.defaultProps = {};

const mapStateToprops = (state) => {
  if (state) {
    return {
      language: state?.home?.language,
      user:state?.home?.user
    };
  } else {
    return {
      language: null,
    };
  }
};

export default connect(mapStateToprops, null)(UserHeaderDetails);
