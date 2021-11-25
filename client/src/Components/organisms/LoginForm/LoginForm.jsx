import React from "react";
import { connect } from "react-redux";
import LogInFormStyle from "./LoginForm.style";
import Button from "../../atoms/Button";
import { useFormik } from "formik";
import InputWithLabelAndError from "../../molecules/InputWithLabelAndError";
import { NotificationManager} from 'react-notifications';
import { setUser } from "../../../actions/post-action";
import axios from "axios";
const validate = (values) => {
  const errors = {};

  if (!values.user) {
    errors.user = "Required";
  }
  if (!values.password) {
    errors.password = "Required";
  }
  return errors;
};

const LogInForm = ({ name, language,setUserClick,setUser, ...otherProps }) => {
  const {
    loginText,
    enterUserLabel,
    userPlaceholderText,
    enterPasswordLabel,
    passwordPlaceholderText,
  } = language;
  const formik = useFormik({
    initialValues: {
      user: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      axios({
        method: "post",
        data: values,
        withCredentials: true,
        url: "/login",
      }).then((res) =>{
  
        if(res.status===200){
          setUserClick('')
          NotificationManager.success('Welcome', values.user);
         setUser(res.data[0])
         
        }
      })
      .catch(error => {      
  
        NotificationManager.warning(error?.response?.data?.msg,'Warning', 3000);
     })
    },
  });

  return (
    <LogInFormStyle action="#" method="POST" onSubmit={formik.handleSubmit}>
      <h3 className="heading">{loginText}</h3>

      <InputWithLabelAndError
        label={enterUserLabel}
        id="logIn-user"
        name="user"
        placeholder={userPlaceholderText}
        type="text"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.user}
        error={formik.errors.user}
        showError={formik.errors.user && formik.touched.user}
      />
      <InputWithLabelAndError
        label={enterPasswordLabel}
        id="logIn-password"
        name="password"
        type="password"
        placeholder={passwordPlaceholderText}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        error={formik.errors.password}
        showError={formik.errors.password && formik.touched.password}
      />

      <Button type="submit">{loginText}</Button>
    </LogInFormStyle>
  );
};

LogInForm.propTypes = {};

LogInForm.defaultProps = {
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
const actionAsProps = {
  setUser:setUser
};
export default connect(mapStateToprops, actionAsProps)(LogInForm);
