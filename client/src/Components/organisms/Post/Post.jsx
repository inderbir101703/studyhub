import React, { useEffect, useState } from "react";
import PostStyle from "./Post.style";
import { connect } from "react-redux";
import Image from "../../atoms/Image";
import Button from "../../atoms/Button";
import AddComment from "../../molecules/AddComment";
import CommentSection from "../../molecules/CommentSection";
import {findUser,getcommentUser} from '../../../utils'
import {addLike,addComment} from '../../../actions/post-action'

const Post = ({ auth, name, language,user, setUserClick, data,users,addLike,addComment }) => {
  const {
    postedByText,
    onText,
    atText,
    likesText,
    commentsText,
    likeText,
    commentText,
    unlikeText
   
  } = language;
  const [addCommentOpener, setAddCommentOpener] = useState(false);
  const [showCommentSection, setshowCommentSection] = useState(false);
  const owner=findUser(data.user,users)
  const [liked,setLiked]=useState(0)
 
  useEffect(()=>{
    if(getcommentUser(user?._id,data?.likes)){

    setLiked(1)}
  },[data])
 const addingComment=(comment)=>{
   addComment({post:data?._id,user:user?._id,comment:comment,time:new Date()})
   data?.comments?.push({post:data?._id,user:user?._id,comment:comment,time:new Date()?.toString()})
   setAddCommentOpener(false)
   setshowCommentSection(true)
 }
  return (
    <PostStyle>
      <div className="post-header">
        <Image
          varient="user"
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
        />
        <div>
          <h4>{data?.heading}</h4>
          <small>
            {" "}
            {postedByText} {owner?.username} {onText} {data?.topic} {atText} {data?.time?.substring(0,15)}{" "}
          </small>
        </div>
      </div>
      <p>
        {data?.body}
      </p>

      <span className="post-interaction">
        {" "}
        <medium>
          {" "}
          {data?.likes.length+liked}{likesText}
          <Button
            onClick={() => {if(user?._id){
            if(!showCommentSection)  setshowCommentSection(true);
          else setshowCommentSection(false)}
              else{
                setUserClick("log-in")
              }
            }}
          >
            {data?.comments.length} {commentsText}
          </Button>{" "}
        </medium>
        <medium>
          <Button  onClick={() => {if(user?._id){
            if(!liked){ setLiked(1)
            addLike({post:data?._id,user:user?._id})
            }
            else setLiked(0)
            
              }
              else{
                setUserClick("log-in")
              }
            }}>{!liked?likeText:unlikeText}</Button>
          {!addCommentOpener ? (
            <Button onClick={() =>{if(user?._id){
              setAddCommentOpener(true)}
              else{
                setUserClick("log-in")
              }
            } }>
              {commentText}
            </Button>
          ) : null}
        </medium>
      </span>
      {addCommentOpener ? (
        <AddComment setAddCommentOpener={setAddCommentOpener} addingComment={addingComment} />
      ) : null}
      {showCommentSection ? <CommentSection comments={data?.comments} users={users}/> : null}
    </PostStyle>
  );
};

Post.propTypes = {};

Post.defaultProps = {}; 
const mapStateToprops = (state) => {
  if (state) {
    return {
      language: state?.home?.language,
      user:state?.home?.user,
      users:state?.home?.users,

    };
  } else {
    return {
      language: null,
    };
  }
};
const actionAsProps = {
  addLike:addLike,
  addComment:addComment
};

export default connect(mapStateToprops, actionAsProps)(Post);
