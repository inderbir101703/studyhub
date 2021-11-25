import React, { useState } from "react";
import AddCommentStyle from "./AddComment.style";
import Input from "../../atoms/inputs/input";
import Button from "../../atoms/Button";
import { connect } from "react-redux";

const AddComment = ({ setAddCommentOpener, language,addingComment }) => {
  const { commentText } = language;
  const [input , setInput]=useState('')
  return (
    <AddCommentStyle method='POST' action='#' onSubmit={(event)=>event.preventDefault()}>
    
      <Input className="addComment-input"   onChange={(event)=>{setInput(event.target.value)}} required={true}/>
      <Button className="addComment-addButton" onClick={()=>{if(input){

        addingComment(input)
     
    }}}>{commentText}</Button>
      <Button
        varient="close"
        onClick={() => setAddCommentOpener(false)}
        className="addComment-close"
        type='submit'
      >
        x
      </Button>
     
    </AddCommentStyle>
  );
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

export default connect(mapStateToprops, null)(AddComment);
