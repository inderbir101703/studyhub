import React from "react";
import { connect } from "react-redux";
import EditPostStyle from "./EditPost.style";
import Button from "../../atoms/Button";
import TextArea from "../../atoms/TextArea";
import Dropdown from "../../atoms/Dropdown";
import { useFormik } from "formik";
import InputWithLabelAndError from "../../molecules/InputWithLabelAndError";

const validate = (values) => {
  const errors = {};

  if (!values.heading) {
    errors.heading = "Required";
  }
  if (!values.topic) {
    errors.topic = "Required";
  }

  if (values.topic === "Other" && !values.newTopic) {
    errors.newTopic = "Required";
  }

  if (!values.postBody) {
    errors.postBody = "Required";
  } else if (values.postBody.length < 50) {
    errors.postBody = "Minimum 50 letters required";
  }

  return errors;
};

const EditPost = ({ name, language, ...otherProps }) => {
  const {
    editPostLabel,
    differentPostText,
    differentTopicPlaceholder,
    postHeadingLabel,
    postHeadingPlaceholder,
    contentLabel,
  } = language;
  const formik = useFormik({
    initialValues: {
      heading: "",
      postBody: "",
      newTopic: "",
      topic: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <EditPostStyle action="#" method="POST" onSubmit={formik.handleSubmit}>
      <h3 className="heading">Edit post</h3>

      <label for="topic" className="addPost-label">
        {editPostLabel}
      </label>
      <Dropdown
        className="topic"
        onChange={formik.handleChange}
        options={[
          {
            label: "ASC",
            value: "ascending",
          },
          {
            label: "DSC",
            value: "descending",
          },
          { label: "Other", value: "Other" },
        ]}
        id="topic"
        name="topic"
      />
      {formik.values.topic === "Other" && (
        <InputWithLabelAndError
          label={differentPostText}
          id="newTpic"
          name="newTopic"
          placeholder={differentTopicPlaceholder}
          type="text"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.newTopic}
          error={formik.errors.newTopic}
          showError={formik.errors.newTopic && formik.touched.newTopic}
        />
      )}
      <InputWithLabelAndError
        label={postHeadingLabel}
        id="add-post-heading"
        name="heading"
        placeholder={postHeadingPlaceholder}
        type="text"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.heading}
        error={formik.errors.heading}
        showError={formik.errors.heading && formik.touched.heading}
      />

      <label for="singUp-hobbies" className="addPost-label">
        {contentLabel}
      </label>
      <TextArea
        placeholder={contentLabel}
        rows={5}
        name="postBody"
        ariaLabel="Hobbies"
        title="Hobbies"
        id="postBody"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.postBody}
      />
      {formik.errors.postBody ? (
        <span className="general-error">
          {formik.errors.postBody &&
            formik.touched.postBody &&
            formik.errors.postBody}
        </span>
      ) : null}
      <Button type="submit">{editPostLabel}</Button>
    </EditPostStyle>
  );
};

EditPost.propTypes = {};

EditPost.defaultProps = {
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

export default connect(mapStateToprops, null)(EditPost);
