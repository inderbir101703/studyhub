import React from "react";
import { connect } from "react-redux";
import EditUserStyle from "./EditUser.style";
import Button from "../../atoms/Button";
import TextArea from "../../atoms/TextArea";
import { useFormik } from "formik";
import InputWithLabelAndError from "../../molecules/InputWithLabelAndError";

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

const EditUserForm = ({ name, language, ...otherProps }) => {
  const {
    usernameLabel,
    usernamePlaceHolderText,
    hobbiesLabel,
    hobbiesPlaceholder,
    editInfoLabel,
  } = language;
  const formik = useFormik({
    initialValues: {
      username: "",
      userHobbies: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <EditUserStyle action="#" method="POST" onSubmit={formik.handleSubmit}>
      <h3 className="heading">{editInfoLabel}</h3>

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
        {editInfoLabel}
      </Button>
    </EditUserStyle>
  );
};

EditUserForm.propTypes = {};

EditUserForm.defaultProps = {
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

export default connect(mapStateToprops, null)(EditUserForm);
