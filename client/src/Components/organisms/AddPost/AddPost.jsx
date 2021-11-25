import React, { useState,useEffect } from "react";
import { connect } from "react-redux";
import AddPostStyle from "./AddPost.style";
import Button from "../../atoms/Button";
import TextArea from "../../atoms/TextArea";
import Dropdown from "../../atoms/Dropdown";
import { useFormik } from "formik";
import {updateState, setPosts} from '../../../actions/post-action'
import { NotificationManager} from 'react-notifications';
import InputWithLabelAndError from "../../molecules/InputWithLabelAndError";
import axios from "axios";

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

const AddPost = ({ name, language,user,setUserClick,topics,updateState,setPosts,posts, ...otherProps }) => {
  const [optionsArray,setOptionsArray]=useState([])
  const {
    postTopicLabel,
    differentPostText,
    differentTopicPlaceholder,
    postHeadingLabel,
    postHeadingPlaceholder,
    contentLabel,
    addPostLabel,
    onMindLabel,
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
     if(values.newTopic){
      
      axios({
        method: "post",
        data: {'Topic':values.newTopic},
        withCredentials: true,
        url: "/addTopic",
      })
  
     }
let finalTopic=values?.newTopic?values?.newTopic:values?.topic
      const finalValues={heading:values.heading,
        postBody:values.postBody,
      topic:finalTopic,
      user:user?._id
    }
      axios({
        method: "post",
        data: finalValues,
        withCredentials: true,
        url: "/addPost",
      }).then((res) => {
       
        if(res.status===200){
          setPosts(res.data)
          
    
          updateState()
        NotificationManager.success('Post created', 'Congrats');
        setUserClick("")
      }})
      .catch(error => {      
        NotificationManager.warning(error?.response?.data?.msg,'Warning', 3000);
     })
    },
  });
  useEffect(() => {
   
  if(topics){
    const ar=[{label:'',value:''},{label:'Other',value:'Other'}]
topics.map((topic)=>{
ar.push({label:topic.topic,
value:topic.topic})
})
setOptionsArray(ar)
  }},[topics])
  return (
    <AddPostStyle action="#" method="POST" onSubmit={formik.handleSubmit}>
      <h3 className="heading">{onMindLabel}</h3>

      <label for="topic" className="addPost-label">
        {postTopicLabel}
      </label>
      <Dropdown
        className="topic"
        onChange={formik.handleChange}
        placeholder='Select'
        options={optionsArray}
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
        className="signUp-input"
        name="postBody"
        ariaLabel={contentLabel}
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
      <Button type="submit">{addPostLabel}</Button>
    </AddPostStyle>
  );
};

AddPost.propTypes = {};

AddPost.defaultProps = {
  name: "",
};

const mapStateToprops = (state) => {
  if (state) {
    return {
      language: state?.home?.language,
      user:state?.home?.user,
      topics:state?.home?.topics,
      posts:state?.home?.posts
    };
  } else {
    return {
      language: null,
    };
  }
};
const actionAsProps = {
  updateState:updateState,
  setPosts:setPosts
};
export default connect(mapStateToprops, actionAsProps)(AddPost);
