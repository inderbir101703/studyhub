import React from "react";
import { connect } from "react-redux";
import SignUpFormStyle from "./signUpForm.style";
import Button from "../../atoms/Button";
import TextArea from "../../atoms/TextArea";
import { useFormik } from "formik";
import axios from "axios";
import InputWithLabelAndError from "../../molecules/InputWithLabelAndError";
import 'react-notifications/lib/notifications.css';
import { NotificationManager} from 'react-notifications';

const validate = (values) => {
  const errors = {};

  if (!values.username) {
    errors.username = "Required";
  } else if (values.username.length > 15) {
    errors.username = "Must be 15 characters or less";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password && values.password.length < 8) {
    errors.password = "Must be more than 8 letters";
  }
  if (!values.userHobbies) {
    errors.userHobbies = "Required";
  } else if (values.userHobbies.length < 8) {
    errors.userHobbies = "Minimum 8 letters required";
  }
  if (!values.confirmpassword) {
    errors.confirmpassword = "Required";
  } else if (values.confirmpassword !== values.password) {
    errors.confirmpassword = "passwords do not match";
  }
  if (!values.usermail) {
    errors.usermail = "Required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.usermail)
  ) {
    errors.usermail = "Invalid email address";
  }

  return errors;
};

const SignUpForm = ({ name,setUserClick, language, ...otherProps }) => {
  const {
    signUpText,
    usernameLabel,
    emailLabel,
    usernamePlaceHolderText,
    emailPlaceholderText,
    enterPasswordLabel,
    passwordPlaceholderText,
    confirmPasswordLabel,
    confirmPasswordPlaceholderText,
    hobbiesLabel,
    hobbiesPlaceholder,
  } = language;
  const formik = useFormik({
    initialValues: {
      username: "",
      usermail: "",
      password: "",
      confirmpassword: "",
      userHobbies: "",
    },
    validate,
    onSubmit: (values) => {
      
      axios({
        method: "post",
        data: values,
        withCredentials: true,
        url: "/register",
      }).then((res) => {
       
        if(res.status===200){
        NotificationManager.success('Now log in', 'User Created');
        setUserClick("log-in")
      }})
      .catch(error => {      
        NotificationManager.warning(error.response.data.msg,'Warning', 3000);
     }) 
    },
  });

  return (
    <SignUpFormStyle action="#" method="POST" onSubmit={formik.handleSubmit}>
      <h3 className="heading">{signUpText}</h3>

      <InputWithLabelAndError
        label={usernameLabel}
        id="singUp-username"
        name="username"
        placeholder={usernamePlaceHolderText}
        type="text"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.username}
        error={formik.errors.username}
        showError={formik.errors.username && formik.touched.username}
      />
      <InputWithLabelAndError
        label={emailLabel}
        id="singUp-mail"
        name="usermail"
        type="email"
        placeholder={emailPlaceholderText}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.usermail}
        error={formik.errors.usermail}
        showError={formik.errors.usermail && formik.touched.usermail}
      />
      <InputWithLabelAndError
        label={enterPasswordLabel}
        id="singUp-password"
        type="password"
        name="password"
        placeholder={passwordPlaceholderText}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        error={formik.errors.password}
        showError={formik.errors.password && formik.touched.password}
      />
      <InputWithLabelAndError
        label={confirmPasswordLabel}
        id="singUp-confirmPassword"
        name="confirmpassword"
        type="password"
        placeholder={confirmPasswordPlaceholderText}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.confirmpassword}
        error={formik.errors.confirmpassword}
        showError={
          formik.errors.confirmpassword && formik.touched.confirmpassword
        }
      />

      <label for="singUp-hobbies" className="signUp-label">
        {hobbiesLabel}
      </label>
      <TextArea
        placeholder={hobbiesPlaceholder}
        rows={5}
        className="signUp-input"
        name="userHobbies"
        ariaLabel="Hobbies"
        title="Hobbies"
        id="signUp-hobbies"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.userHobbies}
      />
      {formik.errors.userHobbies ? (
        <span className="general-error">
          {formik.errors.userHobbies &&
            formik.touched.userHobbies &&
            formik.errors.userHobbies}
        </span>
      ) : null}
      <Button className="signup-submit-button" type="submit">
        {signUpText}
      </Button>
      
    </SignUpFormStyle>
  );
};

SignUpForm.propTypes = {};

SignUpForm.defaultProps = {
  name: "",
};
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

export default connect(mapStateToprops, null)(SignUpForm);
